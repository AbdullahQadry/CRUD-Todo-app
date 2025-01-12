import express from "express";
import pg from "pg";

// database
const Pool = pg.Pool
const pool = new Pool() // configured via .env

// webserver
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Listening on PORT: ${PORT}`);
});

// Route to get all users
app.get('/users', async (req, res) => {
    try {
        // Query the database to fetch all users
        const result = await pool.query('SELECT * FROM users');

        // Send the list of users as the response
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Route to get todos for a specific user
app.get('/users/:id/todos', async (req, res) => {
    const userId = req.params.id;

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

app.post('/users/:id/todos', async (req, res) => {
    const userId = req.params.id;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Todo content is required.' });
    }

    try {
        // Insert the new todo into the database
        const result = await pool.query(
            'INSERT INTO todos (user_id, content) VALUES ($1, $2) RETURNING *',
            [userId, content]
        );

        // Return the newly created todo
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating todo:', error);
        res.status(500).json({ error: 'An error occurred while creating the todo.' });
    }
});
