const RoomReservationModel =require("../models/RoomReservation")


exports.getAllRoomReservation = async (req, res) => {
    try {
   const posts=  await RoomReservationModel.find({}).populate('reservationUser', {name : 1})
     res.status(200).json(posts)
    }
     catch (error) {
  res.status(500).json({message : error.message});
     }
    };
  

exports.createReservation = async (req, res) => {
    try {
      const post = await  RoomReservationModel.create(req.body)
      res.status(201).json(post)
    }
      catch (error)
      {
        res.status(500).json({message : error.message});

      }
  };


  
exports.getReservationById = async (req, res) => {
  try{
    const {id} = req.params;
 const room= await   RoomReservationModel.findById({_id: id}) 
 res.status(200).json(room)
  }
catch(error)
{
res.status(500).json({message : error.message});

}
};

exports.updateReservationById = async (req, res) => {
  try{
    const {id} = req.params;
   const user = await RoomReservationModel.findByIdAndUpdate({_id: id}, {
    reservationDate: req.body.reservationDate,
    numberOfRoom: req.body.numberOfRoom,
    });
    const userupdate = await RoomReservationModel.findById(id);
res.status(200).json(userupdate)
    if (!user) 
    {
      return res.status(404).json({message : "User Not Found"})
    }

  }
  catch(error)
  {
   res.status(500).json({message : error.message});
 
  }
};


exports.deleteReservationById = async (req, res) => {
  try{
    const {id} = req.params;
   const room = await RoomReservationModel.findByIdAndDelete({_id: id});
    if (!room) 
    {
      return res.status(404).json({message : "Resrevation Not Found"})
    }
    res.status(200).json({message : "Resrevation Deleted successfully"})

  }
  catch(error)
  {
   res.status(500).json({message : error.message});
 
  }
};