import asyncHandler from 'express-async-handler';
import Quizz from '../models/quizz.js';
import User from '../models/user.js';
import _ from 'lodash';


// route   POST /api/quizz/compose
const compose = asyncHandler(async (req, res)=>{
    const {title, questionnaire} = req.body;
    const quizzExisits = await Quizz.findOne({title});
    if(quizzExisits){
        res.status(400);
        throw new Error('Quizz with given title already exists');
    }
    const quizz = await Quizz.create({
        title,
        questionnaire
    });
    if(quizz){
        // add this to the respective user quizzes
    } else{
        res.status(400);
        throw new Error("Failed to create a quiz");
    }
});


// route   POST api/quizz/checkAnswers
// access  public
const checkAnswers = asyncHandler(async(req, res)=>{
    const quizzUser = await User.findById(req._id); // _id is used remember
    const inputAnswers = req.answers;
    let score = 0;
    for(let i=1 ;i<=quizzUser.questionnaire.length; i++){
        const rightAnswer = quizzUser.questionnaire[i].answer;
        if(_.isEqual(inputAnswers[i],rightAnswer)) score++;
    }
    res.send(score);
})

export {compose, checkAnswers};