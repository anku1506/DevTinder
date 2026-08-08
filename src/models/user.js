//createing schema,export model 
const mongoose = require('mongoose');
//creating user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type:String,
    },
    emailId: {
        type:String,
    },
    age: {
        type:Number,
    },
    gender: {
        type:String
    }

})

// const UserModel = mongoose.model("User", userSchema);
// module.exports = UserModel;

module.exports=mongoose.model("User", userSchema);