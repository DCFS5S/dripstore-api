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
    },
    createOne: async (name, price) => {
        const connection = await getDBConnection();

        const [results] = await connection.query(
            'INSERT INTO product (name, price) VALUES (?, ?)',
            [name, price]
        );

        return results.insertId
    },
    addCategory: async (productId, categories = []) => {
        const connection = await getDBConnection();

        await connection.query(
            'INSERT INTO product_category (product_id, category_id) VALUES '
            + categories.map(() => '(?, ?)').join(', '),
            categories.flatMap(categoryId => [productId, categoryId]) 
          );
    }
}

module.exports = Product;