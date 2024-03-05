const { getDBConnection } = require("../utils/getDBConnection");

const Product = {
    getAll: async () => {
       const connection = await getDBConnection();
        const [results] = await connection.query(
            'SELECT * FROM product'
        );

        return results
    },
    getOne: async (productId) => {
        const connection = await getDBConnection();
      
        const [results] = await connection.query(
          'SELECT * FROM product JOIN category WHERE product.id = ?', [productId]
        );
      
        const [ selectedProduct ] = results;

        return selectedProduct
    }
}

module.exports = Product;