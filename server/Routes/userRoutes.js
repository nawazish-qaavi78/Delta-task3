import express from 'express';
import { registerUser, authUser, logoutUser, updateUserProfile, getUserProfile } from '../Controllers/userController.js';
import protect from '../middleware/authMiddleware.js';


const router = express.Router();

// here '/' = './api/users' 
router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(logoutUser);
router.route('/profile').put(protect,updateUserProfile).get(protect,getUserProfile);

export default router;