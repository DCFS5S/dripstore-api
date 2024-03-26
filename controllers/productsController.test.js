const Product = require("../models/Product");
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

jest.mock("../models/Product", () => ({
  getAll: () => productListMock,
  getOne: jest.fn(() => productListMock[0]),
  createOne: jest.fn(() => 321),
  addCategory: jest.fn(), 
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
})