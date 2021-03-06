var mongoose=require("mongoose"),
	passportLocal=require("passport-local-mongoose");
var userSchema=new mongoose.Schema({
    name: {
        type:String,
    },
	username:{
        type:String,
        unique:true
    },
	password:{
        type:String
        //required:true
    },
    score:{
        type:Number
    }
});
userSchema.plugin(passportLocal);
module.exports=mongoose.model("User",userSchema);
