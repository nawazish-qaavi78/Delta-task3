import express from 'express';
import { compose, checkAnswers, getQuizzTitles } from '../Controllers/quizzControllers.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// here root route is api/quizz
router.route('/').get(getQuizzTitles);
router.route('/compose').post(protect,compose);
router.route('/checkAnswers').post(checkAnswers);

export default router;

