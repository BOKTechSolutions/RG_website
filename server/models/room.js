

import mongoose from "mongoose";

const roomSchema =new mongoose.Schema({
    name:{type: String,required:true},
    address:{type: String,required:true},
    contact:{type: String,required:true},
    owner:{type: String,required:true,ref:"User"},
},{timestamps:true});

const Room = mongoose.model('room',roomSchema);

export default Room;
