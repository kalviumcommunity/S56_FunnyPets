const mongoose = require("mongoose")

const funnyPetsSchema = new mongoose.Schema({
Title:String,
VideoSource: String,
Category:String,
Description: String,
URL:String,
Image:String,
DateUploaded:String
});

let FunnyPet = mongoose.model("funnypet",funnyPetsSchema)

module.exports = {FunnyPet}