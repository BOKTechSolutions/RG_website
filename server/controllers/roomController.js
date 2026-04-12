

import Room from "../models/room.js";
import user from "../models/user.js"

export const registerRoom = async(req,res)=>{
    try {
        const {name,address,contact,city}= req.body;
        const owner =req.user._id

        //check if user already registered
        const hotel = await Room.findOne({owner})
        if(room){
            return res.json({success:false,message:"Room Already Registered"})
        }
        await Room.create({name,address,contact,city,owner});

        await user.findByIdAndUpdate(owner,{role:"roomOwner"});
        res.jon ({success:true,message:"Room Registered Successfully"})
    } catch (error) {
        res.json({success:false, message: error.message})
        
    }
}