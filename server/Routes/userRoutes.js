import express from 'express';
import { registerUser, authUser, logoutUser, updateUserProfile, getUserProfile, getUserData } from '../Controllers/userController.js';
import protect from '../middleware/authMiddleware.js';


const router = express.Router();

// here '/' = './api/users' 
router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(logoutUser);
router.route('/:userId/profile').put(protect,updateUserProfile).get(getUserProfile);
router.route('/getUserData').get(getUserData);

export default router;
