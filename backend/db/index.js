import { createPool } from 'mariadb';
import dotenv from 'dotenv';
// import express from 'express';

dotenv.config()
const pool = createPool({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DATABASE,
    connectionLimit: 5 // Increase the connection limit

});

const connectDB = async () => {
   
       let conn 
           try {
            conn = await pool.getConnection();
            console.log("Database connected ");

            return conn
           }catch (error) {
            if (conn) {
                conn.release();
            }
            console.error('Error while connecting DB:', error);
            throw new Error ("Failed to connect")
            // res.status(500).send('Failed to connect');
        }
}

export default connectDB ;