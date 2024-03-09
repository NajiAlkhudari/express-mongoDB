const mongoose =require("mongoose")



const RoomReservationSchema = new mongoose.Schema ({

    reservationDate : {
        type : Date,
        required : true,
    },

    numberOfRoom :{
        type : Number , 
        required : true , 
    },

    reservationUser :{
        type: mongoose.Types.ObjectId,
        ref : "users"
    }
})

const RoomReservationModel = mongoose.model("roomreservation", RoomReservationSchema);

module.exports=RoomReservationModel;