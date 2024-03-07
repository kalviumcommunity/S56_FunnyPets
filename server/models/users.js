const mongoose = require("mongoose")

const FunnyPetsSchema = mongoose.Schema({
Title:String,
VideoSource: String,
Category:String,
Description: String,
URL:String,
Image:String,
DateUploaded:String
},versionKey=false);

const FunnyPet = mongoose.model("funnypet",FunnyPetsSchema);

module.exports = {
    FunnyPet
}