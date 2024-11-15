const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Db connected"))

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:6,
        maxLength:50,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:15
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxLength:15
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
})

const accountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    balance:{
        type:Number,
        required:true
    }
})



const User = mongoose.model('user',userSchema);
const Account = mongoose.model('account',accountSchema)

module.exports = {
    User,
    Account
}
