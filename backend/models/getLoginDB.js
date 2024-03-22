import connectDB from "../db/index.js";

export const getLoginFromDB = async (username, user_type, password ) => {
    let conn;
    try {
        conn = await connectDB();
        const rows = await conn.query('SELECT * FROM userdetails WHERE username = ? AND user_type = ?', [username ,user_type]);
        // console.log(rows);
        // Check if user exists
        if (rows.length === 0) {
            return null; // User not found
        }
        return rows[0]; // Return the first user found
    } catch (err) {
        console.error(err);
        throw new Error('Internal server error');
    } finally {
        if (conn) conn.release();
    }
};
