const express = require('express');
const mongoose = require('mongoose');
const connection = require('./config/db');
const route = require('./route');
require("dotenv").config()
const app = express();
const port = 3000; 

app.get('/', (req, res) => {
  res.json({
    message: 'o_O',
    database: isConnected() ? 'connected' : 'disconnected'
  })
});
app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});
app.use(route)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${4}`);
});


const connectToDB = async () => {
  try {
    await mongoose.connect(connection.mongoURI)
    console.log('📦 connected to mongoDB');
  } catch (err) {
    console.error('❌ error connecting to mongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('📦 disconnected from mongoDB');
  } catch (err) {
    console.error('❌ error disconnecting from mongoDB:', err.message);
  }
};
