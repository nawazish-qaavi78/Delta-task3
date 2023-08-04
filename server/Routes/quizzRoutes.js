import express from 'express';
import { compose, checkAnswers, getQuizz, getAllTitles } from '../Controllers/quizzControllers.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

// here root route is api/quizz
router.route('/:quizzId').get(getQuizz);
router.route('/:quizzOwnerId/titles').get(getAllTitles);
router.route('/compose').post(protect,compose);
router.route('/:quizzId/checkAnswers').post(checkAnswers);

export default router;

