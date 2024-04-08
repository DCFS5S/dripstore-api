const { getDBConnection } = require("../utils/getDBConnection");

const Order = {
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
