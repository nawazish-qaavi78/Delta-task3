const mongoose  = require('mongoose');

const quizzSchema = mongoose.Schema({
    question:{
        type: String,
        required: [true, "question is missing"]
    },
    answer: {
        type: String,
        required: [true, "answer is missing"]
    }
});

const Quizz = mongoose.model("Quizz", userSchema);

module.exports = Quizz;
