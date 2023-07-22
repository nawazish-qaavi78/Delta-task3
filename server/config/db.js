import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGOOSE_STRING);
        console.log('Connected to database');
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
