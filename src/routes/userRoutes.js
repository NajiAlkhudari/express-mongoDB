const express =require("express");
const UserController = require('../controllers/UserController');

const router = express.Router();


router.get('/', UserController.getAllUsers)
router.post('/createuser' , UserController.createUser)
router.get("/getuser/:id" , UserController.getUserById)
router.put("/updateuser/:id" , UserController.updateUserById)
router.delete("/deleteuser/:'id" , UserController.deleteUserById)
module.exports = router;
