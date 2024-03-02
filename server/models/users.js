const mongoose = require("mongoose")

const FunnyPetsSchema = mongoose.Schema({
title:String,
videosource: String,
category:String,
description: String,
url:String,
image:String,
dateuploaded:String
});

const FunnyPet = mongoose.model("funnypet",FunnyPetsSchema);

module.exports = {
    FunnyPet
}