
import express from 'express';
// import { createPool } from 'mariadb';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/index.js';  // need to give complete path for not getting error

dotenv.config({
    path: './.env'
})
const app = express();
const port = 3000;


const corsOptions = {
  
    origin: process.env.CORS_ORIGIN, 
    credentials: true,
    optionSuccessStatus: 200
}


// Create a pool of database connections
// const pool = createPool({
//     host: process.env.DB_HOST, 
//     port: process.env.DB_PORT,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD, 
//     database: process.env.DATABASE,
//     connectionLimit: 5 // Increase the connection limit

// });
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async (req, res) => {
    let conn;
    try { 
        conn = await  connectDB();
        const rows = await conn.query('SELECT * FROM signup'); 
        res.json(rows);
        // console.log(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server q' });
    } finally {
        if (conn) conn.release(); 
    }

});

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;
    let conn;
    try {
        // Get a connection from the pool
        conn = await  connectDB();
        // Insert form data into MariaDB
        const result = await conn.query("INSERT INTO signup (name, email, message) VALUES (?, ?, ?)", [name, email, message]);
        console.log('Form data inserted');
        // console.log(result)
        // Release the connection back to the pool
        conn.release();

        res.send('Form data submitted successfully');
    } catch (error) {
        if (conn) {
            conn.release();
        }
        console.error('Error submitting form:', error);
        res.status(500).send('Failed to submit form');
    }
});
// Start the server

app.listen( port, () => {
    console.log(`Server is running on http://localhost:${port}/users`);
    console.log(`Server is running on http://localhost:${port}/submit`);
});
   



