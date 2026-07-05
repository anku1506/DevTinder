const express = require("express");
const app = express();
const { adminAuth,userAuth } =require("./middlewares/auth")


// app.use((req,res) => {
//     res.send("Hello from server");
// }) - here it will be visible to all route




// app.use("/test",(req,res) => {
//     res.send("Hello from test2 new test");
// })

// app.use("/hello",(req,res) => {
//     res.send("Hello from server");
// })


// its wildcard route
// app.use("/",(req,res) => {
//     res.send("from home ");
// })


// app.get("/user", (req, res, next) => {
//      console.log("first")
//     res.send("Data Getting....... from 1");
   
//     next();
// }, (req, res) => {
//     console.log("from2")
//     res.send("from 2");
// }

// )

//creating middleware for all type of method get,post,put .......etc
//checking admin auth
app.use("/admin", adminAuth)  //adminauth middleware is written in middleare/auth.js
// app.use("/user",userAuth) // we can use for user auth but if single then also directly put there 


app.get("/check", (req, res, next) => {       //here authorization is not checked bcz middleware is only for (/user ) 
    res.send("Data Getting....... ");  
  
})


app.get("/user", userAuth,(req, res, next) => {   // here userauth called directly
    console.log("user called")
    res.send("Data Getting....... ");  
    
  
})



app.get("/admin/getalldata", (req, res) => {      
    res.send("Data Getting....... ");  
  
})



app.post("/admin/test", (req,res) => {
    res.send("Created");
})









//listening on port 3000
app.listen(3000, () => {
    console.log("Successfully listiening on port 3000 ")
});  
