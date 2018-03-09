const express = require('express');
const router = express.Router();
const { getCurrentPrice, getPreviousPrice } = require('../models/modelCoin.js');

router.get('/compare', (req,res) => {
  res.send({ difference: getPrice() })
  
});