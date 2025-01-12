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

// Route to set todos for a specific user, deletes all previous todos
app.post('/users/:id/todos', async (req, res) => {
    const userId = req.params.id;
    const todos = req.body;

    if (!Array.isArray(todos) || todos.length === 0) {
        return res.status(400).json({ error: 'A non-empty array of todos is required.' });
    }

    try {

        // Delete all todos for the user
        const delteResult = await pool.query('DELETE FROM todos WHERE user_id = $1', [userId]);
        console.log(`Deleted ${delteResult.rowCount} todos for user ${userId}.`)

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

        // Execute the query
        const result = await pool.query(query, values);

        // Return the inserted todos
        res.status(201).json(result.rows);
    } catch (error) {
        console.error('Error creating todos:', error);
        res.status(500).json({ error: 'An error occurred while creating todos.' });
    }
});
