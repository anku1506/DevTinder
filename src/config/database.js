const mongoose = require('mongoose');

const dns = require("dns");
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
//connecting to mongoose cluster 
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kumaranku946:anku1996@cluster0.rzisnif.mongodb.net/devtinder?appName=Cluster0');
}


module.exports = connectDB;

