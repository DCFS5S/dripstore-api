const mysql = require('mysql2/promise');

const getDBConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'database_name',
    port: 3307,
  });

  return connection;
}


const createProductController = (request, response) => {
    const newProduct = {
      id: (+products[products.length - 1].id + 1).toString(),
      name: 'ok',
      price: 200.00,
    }
  
    products.push(newProduct);
  
    response.json(newProduct);
  }
  const showProductController = (request, response) => {
    const selectedProduct = products
      .find(p => p.id === request.params.productId)
  
    if (selectedProduct) {
      response.json(selectedProduct)
    } else {
      response.status(404)
      response.json({
        error: 'Produto não encontrado'
      })
    }
  }
  const listProductController = async (request, response) => {
    const connection = await getDBConnection();

    const [results, fields] = await connection.query(
      'SELECT * FROM aluno'
    );
  
    console.log(results);

    response.json({ alunos: results });
  }

  const deleteProductController = (request, response) => {
    const newProducts = products
      .filter(product => product.id !== request.params.productId)
  
    if (newProducts.length === products.length) {
      response.status(404)
      response.json({
        message: 'Produto não encontrado',
      })    
    } else {
      products = newProducts
      response.json({
        message: 'Produto removido com sucesso!',
      })
    }
  
  }

  module.exports = {
    createProductController,
    showProductController,
    listProductController,
    deleteProductController,
  }