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
  getOne: jest.fn(() => productListMock[0])
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
})