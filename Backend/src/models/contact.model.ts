import mongoose, { Schema} from "mongoose";

const Contact = new Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    });
 const contact= mongoose.model('Contact',Contact);
export default contact;