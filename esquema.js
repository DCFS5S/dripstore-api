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
