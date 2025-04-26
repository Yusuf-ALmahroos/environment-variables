require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
  console.log(process.env.SECRET_PASSWORD);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

