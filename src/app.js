const express = require("express");
const app = express();

// app.use((req,res) => {
//     res.send("Hello from server");
// }) - here it will be visible to all route


// app.use("/",(req,res) => {
//     res.send("from home ");
// })

app.use("/test",(req,res) => {
    res.send("Hello from test2 new test");
})

app.use("/hello",(req,res) => {
    res.send("Hello from server");
})




//listening on port 3000
app.listen(3000, () => {
    console.log("Successfully listiening on port 3000 ")
});  
