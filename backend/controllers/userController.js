const client = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

// Signup Controller
exports.signup = async (req, res) => {
    console.log('Signup request received');
    const { email, name, address, phone, password } = req.body;

    try {
        // Check if the email already exists
        const emailCheck = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (emailCheck.rows.length > 0) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const result = await client.query(
            'INSERT INTO users (email, name, address, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [email, name, address, phone, hashedPassword]
        );

        // Generate a JWT token
        const token = jwt.sign({ id: result.rows[0].user_id }, secret, { expiresIn: '1h' });

        // Respond with the token and user info (excluding the password)
        res.status(201).json({ token, user: { email, name, address, phone } });
    } catch (error) {
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
};

// Login Controller
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};
