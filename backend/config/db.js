const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected successfully');
    }catch(e){
        console.log('db failed',e.message);
    }
}

module.exports=connectDB;
