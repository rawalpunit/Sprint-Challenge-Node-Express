const config = require('./config.js');
const express = require('express');
const app = express();
const PORT = config.port;

app.use(controllerCoin);


app.listen(PORT, err => {
  console.log("server listening on PORT: ", PORT);
});