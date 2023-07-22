import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Quizz from './quizz.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name not entered"]
    },
    email:{
        type: String,
        unique: true,
        required: [true, "email not entered"]
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    quizzes: {
        type: [Quizz.Schema],
        default: []
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;