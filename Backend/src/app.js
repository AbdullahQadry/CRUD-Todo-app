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
