const express =require("express");
const RoomsReservationController = require('../controllers/RoomsReservationController');

const router = express.Router();



router.get('/getallroomreservation', RoomsReservationController.getAllRoomReservation)

router.post('/createroom' , RoomsReservationController.createReservation)

router.get("/getreservation/:id" , RoomsReservationController.getReservationById)
router.put("/updatereservation/:id" , RoomsReservationController.updateReservationById)

router.delete("/deletereservation/:id" , RoomsReservationController.deleteReservationById)


module.exports = router;
