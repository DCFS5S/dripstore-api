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
            `
            SELECT 
                product.id AS product_id,
                product.name AS product_name,
                product.slug AS product_slug,
                product.price AS product_price,
                product.description AS product_description,
                brand.name AS brand_name,
                brand.id AS brand_id,
                category.id AS category_id,
                category.name AS category_name,
                product_variant.id AS variant_id,
                product_variant.size AS variant_size,
                product_variant.color_name AS variant_color_name,
                product_variant.color_hex AS variant_color_hex,
                product_variant.stock AS variant_stock
            FROM 
                product
            INNER JOIN 
                brand ON product.brand_id = brand.id
            INNER JOIN 
                category ON product.category_id = category.id
            INNER JOIN 
                product_variant ON product.id = product_variant.product_id
            WHERE product_id = ?;
            `, [productId]
            );
            
        const [ selectedProduct ] = results;

        const productData = ({
            id: selectedProduct.product_id,
            name: selectedProduct.product_name,
            slug: selectedProduct.product_slug,
            price: selectedProduct.product_price,
            description: selectedProduct.product_description,
            brand: {
                id: selectedProduct.brand_id,
                name: selectedProduct.brand_name,
            },
            category: {
                id: selectedProduct.category_id,
                name: selectedProduct.category_name,
            },
            variants: results.map(result => ({
                id: result.variant_id,
                size: result.variant_size,
                color_name: result.variant_color_name,
                color_hex: result.variant_color_hex,
                stock: result.variant_stock,
            })),
            images: [] // TODO: Implement images data
        });
        
        return productData;
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