const mongoose = require('mongoose');
const mongoURL= "mongodb+srv://adhikariraju38:adhikariraju38@cluster0.dd9ymgd.mongodb.net/nepaliharvest?retryWrites=true&w=majority"

const connectToMongo =()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to Mongo successfully");
    })
}

module.exports=connectToMongo;