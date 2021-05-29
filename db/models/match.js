var mongoose=require("mongoose"),
passportLocal=require("passport-local-mongoose");


var matchSchema=new mongoose.Schema({
    name: {
        type:String,
    },
	username:{
        type:String,
        unique:true
    },
    score:{
        type:Number
    },
    feeling:{
        type:Number
    }
});
module.exports=mongoose.model("Match",matchSchema);