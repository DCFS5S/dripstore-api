const { request, response } = require("express")

const cartProduct = {
  product: {
    status: temp,
    id,
    nome: 'teste01',
    preco: 100,
    imgPequena: 'url/teste-01.png',
    cor: 'preto',
    tamanho: 41,
    quantidade: 1,
  },
  desconto: 0.1,
  frete: 10,
  total: ((pedido.preco * quantidade) + frete.value) * (1 - desconto),
}


const order = {
  id,
  orderNumber: Number,
  status: 'Fake',
  productName: 'Tênis Nike Air'
}

const order = {
  // COLUNAS
  id,
  number,
  status: ['pagemento efetuado', 'produto em transito', 'finalizado', 'cancelado'],
  product_name
}


npx sequelize-cli model:generate --name Order --attributes status:string,tamanho:string,quantity:number,productName:string,price:integer

npx sequelize-cli seed:generate --name demo-user


// ===============================================
// aula

// tabelas
Products_Orders: {
  product_id,
  order_id,
  amount,
  value,
  discount,
}

products: {
  id,
  name,
  value
}

orders: {
  id,
  status: draft, paid, pending, delivering, done
  user_id,
  addres_id
}

user: {
  id,
  name
}
// ======================================================
//Adiciona produto no  carrinho
[post] /orders/product
request
{
  orderId:??
  productId: 123
}
response
order: {
  id: 123
}

Remove produto do carrinho
[delete] /orders/product
{
  orderId: 123,
  productId: 123
}

Response
oder: {
  id: 123
}

Ver detalhes do carrinho
[get] /orders/:orderId
Request {}
Response{
  order: {
    id,
    status,
    userId:
    products: [
      {
        id: 123,
        amout: 3,
        value: 120,
      },
      {
        id: 123,
        amout: 3,
        value: 120,
      }
    ]
  }
}