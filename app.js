const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const userRoutes =require("./src/routes/userRoutes")
const RoomReservationRoutes =require("./src/routes/roomResevationRoutes")
// import express from "express"
// import mongoose from "mongoose";
// import cors from 'cors'
const app =express();
const port =3000;

// cors origin share
app.use(cors());
// to utilize with json file data
app.use(express.json());
app.use(userRoutes , RoomReservationRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/booking");



app.listen(port , ()=>{
    console.log("server is running on" , port );
})