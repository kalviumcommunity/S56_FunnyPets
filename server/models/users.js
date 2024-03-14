const mongoose = require("mongoose")
const joi = require("joi")

const funnyPetsSchema = new mongoose.Schema({
Title:{type: String,
    required: true,
},
VideoSource: {type: String,
    required: true,
},
Category:{type: String,
    required: true,
},
Description: {type: String,
    required: true,
},
URL:{type: String,
    required: true,
},
Image:{type: String,
    required: true,
},
DateUploaded:{type: String,
    required: true,
},
CreatedBy:{type: String

}});

const UserSchema = new mongoose.Schema({
    CreatedBy:{type: String
    }
})
const validatePets = (pets) => {
    const schema = joi.object({
        Title: joi.string().required(),
        VideoSource: joi.string().required(),
        Category: joi.string().required(),
        Description: joi.string().required(),
        URL: joi.string().required(),
        Image: joi.string().required(),
        DateUploaded: joi.string().required(),
        CreatedBy: joi.string().required(), 
    });
  
    return schema.validate(pets);
  };
  
  

let FunnyPet = mongoose.model("funnypet",funnyPetsSchema)
let User = mongoose.model("usernames",UserSchema)

module.exports = {FunnyPet, validatePets,User}
