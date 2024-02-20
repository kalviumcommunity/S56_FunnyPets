const express = require('express');
require("dotenv").config()
const app = express();
const port = 3000; 

app.get('/ping', (req, res) => {
  res.status(200).send('Pong!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
