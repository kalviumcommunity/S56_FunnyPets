const express = require ('express')
const router = express.Router()
router.use(express.json());
const{ FunnyPet }= require("./models/users.js");


router.get('/get',(req,res)=>{
    res.send("It is a get request")
})
router.post("/addform", (req,res)=> {
    try {
      console.log(req.body)
      FunnyPet.create(req.body).then((el)=>{
        res.send(el)
      });
      // res.send(user);
    } catch (error) {
      res.send(error);
    }
  })
  
router.patch('/patch',(req,res)=>{
    res.send("It is a patch request")
})
router.delete('/delete',(req,res)=>{
    res.send("It is a delete request")
})

module.exports = {router}