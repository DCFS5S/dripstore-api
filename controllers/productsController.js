const mysql = require('mysql2/promise')

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dripstore2',
    port: 3307,
  });

  return connection;
}

// Create
const createProductController = async (request, response) => {
  const connection = await getDBConnection()
  const { nome, preco } = request.body;

  const [results, fields] = await connection.query(
    `INSERT INTO tb_produto (nome, preco) VALUES (?, ?)`,
    [nome, preco]
  )

  console.log(results);

    response.json('Seu produto foi adicionado com sucesso!')
  }

//Show
const showProductController = async (request, response) => {
  const connection = await getDBConnection()
  let id = request.params.productId
    
  const [results, fields] = await connection.query(
    `SELECT * FROM tb_produto WHERE id=${id}`
  )

  console.log(results);

  response.json(results)
}

//List
const listProductController = async (request, response) => {
  const connection = await getDBConnection()

  const [results, fields] = await connection.query(
    'SELECT * FROM tb_produto'
  )

  console.log(results)

  response.json({ produto: results })
}

//Delete
const deleteProductController = async (request, response) => {
  const connection = await getDBConnection()
  let id = request.params.productId

  try {
    const [results, fields] = await connection.query(
      `DELETE FROM tb_produto WHERE id = ${id} ` 
    )

    console.log('Seu produto foi removido com sucesso!')
    response.status(200).send('Produto removido com sucesso!')
  } catch (error) {
    console.error('Erro ao remover produto:', error)
    response.status(500).send('Erro ao remover produto')
  } finally {
    connection.end()
  }
}

//Update
const updateProductController = async (request, response) => {
  const connection = await getDBConnection()
  let id = request.params.productId
  const { nome, preco } = request.body;

  const [results, fields] = await connection.query(
    `UPDATE tb_produto set nome = ?, preco = ? where id = ${id}`,
    [ nome, preco, id]
  )

  console.log(results);

  response.json('Seu produto foi alterado com sucesso!')
}

module.exports = {
  createProductController,
  showProductController,
  listProductController,
  deleteProductController,
  updateProductController,
}