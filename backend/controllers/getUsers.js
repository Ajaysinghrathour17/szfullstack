import { getUsersFromDB } from '../models/getUserDB.js';

export const getUsers = async (req, res) => {
    try {
        const users = await getUsersFromDB();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
