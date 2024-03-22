import { getLoginFromDB } from "../models/getLoginDB.js";

const loginController = async (req, res) => {
  const { username, password, user_type } = req.body;

  try {
    // Retrieve user from the database
    const user = await getLoginFromDB(username, user_type, password);

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare passwords (assuming passwords are stored in plain text)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If username and password are correct, return success 
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'An error occurred. Please try again later.' });
  }
};

export default loginController;
