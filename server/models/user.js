const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Name not entered"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    quizzes: {
        type: Array,
        default: []
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User