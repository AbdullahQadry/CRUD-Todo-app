import express from "express";
import pg from "pg";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// database, configured via environment variables
const pool = new pg.Pool({ "user": "quickstart-postgres-user" })

// webserver
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const JWT_KEY = process.env.JWT_KEY

// Register a new user
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user into the database
        const result = await pool.query(
            'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email',
            [email, hashedPassword]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'An error occurred during registration.' });
    }
});

// Login a user and return a JWT
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // Check if the user exists
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Verify the password
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Generate a JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_KEY, { expiresIn: '1h' });
        res.json({ token, user_id: user.id });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'An error occurred during login.' });
    }
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("req.headers: ", req.headers)

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Forbidden' });
            }
            req.user = user; // Attach the user payload to the request
            next();
        });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Route to get todos for a specific user
app.get('/users/:id/todos', authenticateJWT, async (req, res) => {
    const userId = req.params.id;

    if (req.user.id !== parseInt(userId, 10)) {
        return res.status(403).json({ error: 'Permission denied' });
    }

    try {
        // Query the database for todos of the given user
        const result = await pool.query(
            'SELECT * FROM todos WHERE user_id = $1',
            [userId]
        );

        // Send the todos as the response
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'An error occurred while fetching todos.' });
    }
});

// Route to set todos for a specific user, deletes all previous todos
app.post('/users/:id/todos', authenticateJWT, async (req, res) => {
    const userId = req.params.id;
    const todos = req.body;
    console.log(todos)

    if (req.user.id !== parseInt(userId, 10)) {
        return res.status(403).json({ error: 'Permission denied' });
    }

    if (!Array.isArray(todos)) {
        return res.status(401).json({ error: 'An array of todos is required.' });
    }

    try {

        // Delete all todos for the user
        const delteResult = await pool.query('DELETE FROM todos WHERE user_id = $1', [userId]);
        console.log(`Deleted ${delteResult.rowCount} todos for user ${userId}.`)

        if (todos.length === 0) {
            res.status(201).json([]);
            return;
        }

        // Create query placeholders for bulk insert
        const values = [];
        const placeholders = todos.map((content, index) => {
            values.push(userId, content);
            return `($${index * 2 + 1}, $${index * 2 + 2})`;
        });

        // Construct the query
        const query = `
        INSERT INTO todos (user_id, content)
        VALUES ${placeholders.join(', ')}
        RETURNING *;
      `;
        console.log(query)
        console.log(values)
        // Execute the query
        const result = await pool.query(query, values);

        // Return the inserted todos
        res.status(201).json(result.rows);
    } catch (error) {
        console.error('Error creating todos:', error);
        res.status(500).json({ error: 'An error occurred while creating todos.' });
    }
});

// Get the user_id for a token
app.get('/auth/verify', authenticateJWT, async (req, res) => {
    try {
        res.json({ userId: req.user.id });
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'An error occurred while fetching todos.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});
