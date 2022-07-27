import mongoose from "mongoose";


const tokenSchma = mongoose.Schema({
    token:{
        type:String,
        required:true
    }
});

const token = mongoose.model('token',tokenSchma);

export default token;