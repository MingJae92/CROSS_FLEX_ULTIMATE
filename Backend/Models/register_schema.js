import mongoose from "mongoose"

const registerSchema = new mongoose.Schema({
    fistname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    email:{
        type:String,
        requied: true
    },
    password:{
        type:String,
        required: true
    },
    confirmpassword:{
        type:String,
        required: true
    }

})

const register_schema = mongoose.model("Register", registerSchema)
export default register_schema

