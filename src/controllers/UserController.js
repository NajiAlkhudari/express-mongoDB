const UserModel =require('../models/User')

exports.getAllUsers = async (req , res) => {
    try{
        const users= await UserModel.find({})
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({message : error.message})

    }
};



exports.createUser = async (req, res) => {
    try {
      const user = await  UserModel.create(req.body)
      res.status(201).json(user)
    }
      catch (error)
      {
        res.status(500).json({message : error.message});

      }
  };


exports.getUserById = async (req, res) => {
    try{
      const {id} = req.params;
   const user= await   UserModel.findById({_id: id}) 
   res.status(200).json(user)
    }
 catch(error)
 {
  res.status(500).json({message : error.message});

 }
  };

  exports.updateUserById = async (req, res) => {
    try{
      const {id} = req.params;
     const user = await UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
      });
      const userupdate = await UserModel.findById(id);
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

  
  exports.deleteUserById = async (req, res) => {
    try{
      const {id} = req.params;
     const user = await UserModel.findByIdAndDelete({_id: id});
      if (!user) 
      {
        return res.status(404).json({message : "User Not Found"})
      }
      res.status(200).json({message : "User Deleted successfully"})

    }
    catch(error)
    {
     res.status(500).json({message : error.message});
   
    }
  };