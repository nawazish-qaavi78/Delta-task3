import asyncHandler from 'express-async-handler';
import Quizz from '../models/quizz.js';
import User from '../models/user.js';
import _ from 'lodash';


// route   POST /api/quizz/:quizzOwnerId/compose
// access  Private
const compose = asyncHandler(async (req, res) => {
    const { title, questionnaire } = req.body;
    const userid = req.params.quizzOwnerId;
    const quizzExisits = await Quizz.findOne({ title });
    if (quizzExisits) {
        res.status(400);
        throw new Error('Quizz with given title already exists');
    }
    const quizz = await Quizz.create({
        title,
        questionnaire
    });
    if (quizz) {
        User.findByIdAndUpdate(userid, {
            $push: {
                quizzes: quizz
            }
        });
    } else {
        res.status(400);
        throw new Error("Failed to create a quiz");
    }
});


// route   GET api/quizz/:quizzOwnerId/:quizzId
// access  Public
const getQuizz = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.quizzOwnerId);
    const quizzId = req.params.quizzId;
    for(let i =0; i<user.quizzes.length; i++){
        const someQuizz = user.quizzes[i];
        const requiredQuizz = await someQuizz.findById(quizzId);
        if(requiredQuizz){
            res.json({requiredQuizz});
        }
    }
    if(!requiredQuizz){
        res.status(404);
        throw new Error('No such quizz found');
    }
});

// route   GET api/quizz/:quizzOwnerId/titles
// access  Public
const getAllTitles = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.quizzOwnerId);
    const allTitles = user.quizzes.map((quizz)=>quizz.title);
    res.json({allTitles});
})

// route   POST api/quizz/:quizzId/checkAnswers
// access  public
const checkAnswers = asyncHandler(async (req, res) => {
    const quizzUser = await User.findById(req.params.quizzId); 
    const inputAnswers = req.body.answers;
    let score = 0;
    for (let i = 1; i < quizzUser.questionnaire.length; i++) {
        const rightAnswer = quizzUser.questionnaire[i].answer;
        if (_.isEqual(inputAnswers[i], rightAnswer)) score++;
    }
    res.json({ score });
})

export { compose, checkAnswers, getQuizz, getAllTitles };