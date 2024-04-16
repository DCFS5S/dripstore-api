const { getDBConnection } = require("../utils/getDBConnection");

const Order = {
  createOne: async (nome, preco, imagem, cor, tamanho) => {
    const connection = await getDBConnection();
    
    const [results] = await connection.query(
      'INSERT INTO product (nome, preco, imagem, cor, tamanho) VALUES (?, ?, ?, ?, ?)',
      [nome, preco, imagem, cor, tamanho]
    );
    return results;
  },
  updateOne: async (orderId, nome) => {
    const connection = await getDBConnection();

    const [results] = await connection.query(
      'UPDATE product SET nome = ? WHERE id = ?',
      [nome, orderId]
    );
    return results;
  },
  getOne: async (orderId) => {
    const connection = await getDBConnection();
    
    const [results] = await connection.query(
      'SELECT * FROM product WHERE id = ?',
      [orderId]
    );
    return results;
  },
  remove: async (orderId) => {
    const connection = await getDBConnection();

    const [results] = await connection.query(
      'DELETE FROM product WHERE id = ?',
      [orderId]
    );
    return results;
  }
}

module.exports = Order;