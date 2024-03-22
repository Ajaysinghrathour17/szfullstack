// import connectDB from './db/index.js';

import connectDB from "../db/index.js";

export const getUsersFromDB = async () => {
    let conn;
    try { 
        conn = await connectDB();
        const rows = await conn.query('SELECT * FROM signup '); 
        return rows;
    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    } finally {
        if (conn) conn.release(); 
    }
};
