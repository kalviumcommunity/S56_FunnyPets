const express = require('express');
const mongoose = require('mongoose');
const {router} = require('./route');
const { connected } = require('./config/db');
require("dotenv").config()
const app = express();
const cors = require('cors');
app.use(cors())
app.use(router)
const FunnyPet = require("./models/users.js");

app.get('/getusers',async(req, res) => {
  let answer = await FunnyPet.find();
  res.send(answer)
})
app.get('/', async (req, res) => {
  try {
      res.send('Connected to mongoDB');
  } 
  catch (err) {
    res.status(500).send('Failed to connect to mongoDB!');
  }
});


app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

app.use(router)
app.listen(process.env.PUBLIC_PORT || 3000, () => {
  connected()
  console.log(`Server is running..!!!`);
});




