const mongoose=require('mongoose')

const userTokenSchema=new mongoose.Schema({
    user_id:{type:mongoose.Schema.ObjectId,required:true},
    otp:{type:String}
},{timestamps:true})

const userTokenModel= mongoose.model('token',userTokenSchema)

module.exports=userTokenModel;