import mongoose from 'mongoose';

const questionary = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true,
    }
})

const quizzSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "question is missing"], 
        unique: true,
    },
    questionnaire:{
        type: [questionary],
        default: []
    }
});

const Quizz = mongoose.model("Quizz", quizzSchema);

export default Quizz;
