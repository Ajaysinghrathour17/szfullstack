import express from 'express';
import  {getUsers} from '../controllers/getUsers.js';
import  loginController from '../controllers/LoginController.js';

const router = express.Router();

// router.route("/users").get(getUsers);
router.get('/users', getUsers);
router.post('/login', loginController);


export default router;