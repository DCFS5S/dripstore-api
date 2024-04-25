const Product = require("../models/product");
const productsController = require('./productsController')

const responseMock = {
  json: jest.fn(),
  status: jest.fn(),
}

const requestMock = {
  params: {
    productId: 123
  }
}

const productListMock = [
  { id: 123 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
]

const connectionQueryMock = jest.fn()
const getDBConnectionMock = () => ({
  query: connectionQueryMock
})


jest
  .mock("../models/Product", () => ({
    getAll: () => productListMock,
    getOne: jest.fn(() => productListMock[0]),
    createOne: jest.fn(() => 321),
    addCategory: jest.fn(), 
  }))
  .mock("../utils/getDBConnection", () => ({
    getDBConnection: getDBConnectionMock
  }))

describe('productsController', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('list', () => {
    it('returns a list of products', async () => {
      await productsController.list(requestMock, responseMock)

      expect(responseMock.json).toHaveBeenCalledWith({
        products: productListMock
      })
    })
  })

  describe('show', () => {
    it('returns a selected product', async () => {
      await productsController.show(requestMock, responseMock)
      
      expect(responseMock.json).toHaveBeenCalledWith(productListMock[0])
    })

    it('return not found for unexisting product', async () => {
      Product.getOne.mockImplementation(() => undefined)

      await productsController.show(requestMock, responseMock)
      
      expect(Product.getOne).toHaveBeenCalledWith(123)
      expect(responseMock.status).toHaveBeenCalledWith(404)
      expect(responseMock.json).toHaveBeenCalledWith({
        error: 'Produto não encontrado'
      })
    })
  })

  describe('create', () => {
    it('creates a product without categories', async () => {
      const noCategoryRequestMock = {
        body: {
          name: 'Produto 1',
          price: 100.00,
        }
      }

      await productsController.create(noCategoryRequestMock, responseMock);


      expect(Product.createOne).toHaveBeenCalledWith(
        noCategoryRequestMock.body.name,
        noCategoryRequestMock.body.price,
      );
      expect(Product.addCategory).not.toHaveBeenCalled();
      expect(responseMock.status).toHaveBeenCalledWith(201);
      expect(responseMock.json).toHaveBeenCalled();
    })

    it('creates a product with categories', async () => {
      const categoryRequestMock = {
        body: {
          name: 'Produto 1',
          price: 100.00,
          categories: [{id: 1}, {id: 2}]
        }
      }

      await productsController.create(categoryRequestMock, responseMock);


      expect(Product.createOne).toHaveBeenCalledWith(
        categoryRequestMock.body.name,
        categoryRequestMock.body.price,
      );

      expect(Product.addCategory).toHaveBeenCalledWith(
        321,
        categoryRequestMock.body.categories,
      );

      expect(responseMock.status).toHaveBeenCalledWith(201);
      expect(responseMock.json).toHaveBeenCalled();
    })
  })

  describe('remove', () => {
    it('removes an existing product', async () => {
      connectionQueryMock.mockReturnValue([{
        affectedRows: 1
      }])

      await productsController.remove(requestMock, responseMock);
      
      expect(responseMock.json).toHaveBeenCalledWith({
        message: 'Produto removido com sucesso!'
      })
    })

    it('tries to remove an unexisting product', async () => {
      connectionQueryMock.mockReturnValue([{
        affectedRows: 0
      }])

      await productsController.remove(requestMock, responseMock);

      expect(responseMock.status).toHaveBeenCalledWith(404)
      expect(responseMock.json).toHaveBeenCalledWith({
        message: 'Produto não encontrado'
      })
    })
  })

  describe('update', () => {
    it('updates name and price from a existing product', async () => {
      connectionQueryMock
        .mockReturnValueOnce([[
          {
            name: 'ok',
            price: 123
          }
        ]])
        .mockReturnValue([{
          affectedRows: 0
        }])

      await productsController.remove(requestMock, responseMock);

    })
    it('updates only price from a existing product', async () => {})
    it('tries to update an unexisting product', async () => {})
  })
})
