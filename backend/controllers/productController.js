// controllers/productController.js
const client = require('../db/db'); 

exports.getAllProducts = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM products');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    console.log('Request to create product:', req.body);

    const { name, description, price, quantity, category } = req.body;

    try {
        const result = await client.query(
            `INSERT INTO products (name, description, price, quantity, cat_id) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [name, description, price, quantity, category]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating product:', error.stack || error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
