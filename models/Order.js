const Order = {
  getOne: async (productId) => {
    const connection = await getDBConnection();
  
    const [results] = await connection.query(
        `
        SELECT 
            product.id AS product_id,
            product.name AS product_name,
            
        FROM 
            product
        WHERE product_id = ?;
        `, [productId]
        );
        
    const [ selectedProduct ] = results;
  },
  getDraft: async () => {
    const connection = await getDBConnection();
    
  }
}
