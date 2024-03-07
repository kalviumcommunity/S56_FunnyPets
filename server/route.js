const express = require ('express')
const router = express.Router()
router.use(express.json());

router.get('/get',(req,res)=>{
    res.send("It is a get request")
})
router.post("/addform", async(req,res)=> {
    try {
      console.log(req.body)
      const user = FunnyPet.create(req.body);
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  
router.patch('/patch',(req,res)=>{
    res.send("It is a patch request")
})
router.delete('/delete',(req,res)=>{
    res.send("It is a delete request")
})

module.exports = {router}