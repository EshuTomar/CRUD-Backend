const mongoose = require('mongoose');
require('dotenv').config();


const connectDb = async()=> {
const conn = await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,    
    useUnifiedTopology: true,

}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

}


module.exports =connectDb;