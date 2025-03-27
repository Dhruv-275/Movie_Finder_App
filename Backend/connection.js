const mongoose=require('mongoose')

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/MovieReview_App')
        console.log('Connected to DataBase');
    } catch (error) {
        console.log('error=>',error.message);
    }
}

module.exports=connectDb;