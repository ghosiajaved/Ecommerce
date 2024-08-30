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


// Get product by name
exports.getProductByName = async (req, res) => {
    const { name } = req.params;

    try {
        const result = await client.query('SELECT * FROM products WHERE name = $1', [name]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



exports.updateProductByName = async (req, res) => {
    const { name } = req.params;
    const { description, price, quantity, category } = req.body;

    // Log received data
    console.log('Updating product with name:', name);
    console.log('Received data:', { description, price, quantity, category });

    try {
        // Check if name is null or undefined
        if (!name) {
            return res.status(400).json({ message: 'Product name is required' });
        }

        const result = await client.query(
            `UPDATE products
             SET description = $1, price = $2, quantity = $3, cat_id = $4
             WHERE name = $5
             RETURNING *`,
            [description, price, quantity, category, name]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};