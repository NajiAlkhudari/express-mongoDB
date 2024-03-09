const mongoose =require("mongoose")


const UserSchema = new mongoose.Schema({

    firstName :{
        type : String,
        required : true,

    },
    secoundName :{
        type : String , 
        required : true,
    },
dateBirth : {
        type : Date , 
        required : true,
    },
    gender :{
        type : String ,
        enum :"Male" ||"Femal" ,
        required : true,

    } , 
    country :{
       type: String,
       required : true,
    },
    city : {
        type : String,
        required : true,
    },

    address:{
        type : String,
        required : true,
    } , 
    postcode : {
        type : String,
        required : true,
    },
    passportNumber :{
        type: String,
    required: true,
    unique: true
    },
},

{
    timestamps : true
}
)

const UserModel = mongoose.model("users", UserSchema);


module.exports=UserModel;