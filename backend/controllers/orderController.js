const client = require('../db/db');

exports.getAllOrders = async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM orders');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createOrder = async (req, res) => {
    const { user_id, product, quantity } = req.body;
    try {
        const result = await client.query(
            `INSERT INTO orders (user_id, product, quantity) VALUES ($1, $2, $3) RETURNING *`,
            [user_id, product, quantity]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('SELECT * FROM orders WHERE id = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Order not found' });
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateOrderById = async (req, res) => {
    const { id } = req.params;
    const { user_id, product, quantity } = req.body;
    try {
        const result = await client.query(
            `UPDATE orders SET user_id = $1, product = $2, quantity = $3 WHERE id = $4 RETURNING *`,
            [user_id, product, quantity, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ message: 'Order not found' });
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query(
            'DELETE FROM orders WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
