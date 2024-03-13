const express = require ('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
router.use(express.json());
const{ FunnyPet, validatePets }= require("./models/users.js");


router.get('/get',(req,res)=>{
    res.send("It is a get request")
})
router.post("/addform", (req,res)=> {
  const validation = validatePets(req.body)
    if (validation.error){
      return res.status(400).json({error:validation.error.details[0].message})
    }
    try {
      console.log(req.body)
      FunnyPet.create(req.body).then((el)=>{
        res.send(el)
      });
    } catch (error) {
      res.send(error);
    }
  })
  
  router.put("/update/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(req.body)

    try{
      FunnyPet.findByIdAndUpdate({_id:id},req.body)
      .then((res)=>{
        console.log("Video updated successfully",res)
      })
      .catch((err)=>{
        console.error(err)
      })}
      catch(err){
        console.error(err)
      }
  })
  router.post("/auth",(req,res)=>{
    const username = req.body.username
    const user = {name: username}
    const accesstoken = jwt.sign(user,process.env.Access_Token)
    res.json({accessToken: accesstoken})
  })
  
router.delete('/deleteuser/:id',(req,res)=>{
  const id = req.params.id;
  FunnyPet.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

module.exports = {router}