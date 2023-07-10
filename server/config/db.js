const mongoose = require('mongoose');

const connectDB =async () =>{
const conect = await mongoose.connect(process.env.MONGO_URI)

console.log(`MongoDB connected: ${conect.connection.host}` .cyan.underline.bold);
} 

module.exports = connectDB;