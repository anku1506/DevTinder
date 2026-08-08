const express = require("express");
const connectDB=require("./config/database");  // needs to call the  db 
const app = express();
const User=require("./models/user")

//creating a post api
app.post("/signup", async (req, res) => {
  
//creating a new instance of a user model
    const user = new User({
        firstName: "Satyam",
        lastName: "kumar",
        emailId: "satyam@gmail.com",
        password:"sat@123"
        
    });
    //save is a function which return promise
    try {
         await user.save();
    res.send("user added successfully");
        
    } catch(err) {
        res.status(400).send("Error saving user" + err.message);
    }
   
    
})

//First connect to Db then listen to server
connectDB().then(() => {
    console.log("Database connection successful");

    //listening on port 3000
    app.listen(3000, () => {
    console.log("Successfully listiening on port :: 3000")
});  
    
}).catch(err => {
    console.log("DB can't be connected ",err)    
})





