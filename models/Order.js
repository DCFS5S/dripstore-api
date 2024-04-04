const { getDBConnection } = require("../utils/getDBConnection");

const Order = {
  getOne: async () => {
    const connection = await getDBConnection();

    const [results] = await connection.query(
        'SELECT * FROM product'
    );

    return results
  }
}

module.exports = Order;
