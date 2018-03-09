const config = require('../config.js');
const express = require('express');
const app = express();
const PORT = config.port;
const controllerCoin = require('../controllers/controllerCoin');

app.use(controllerCoin);


app.listen(PORT, err => {
  console.log("server listening on PORT: ", PORT);
});