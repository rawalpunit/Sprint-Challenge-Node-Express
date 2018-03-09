const express = require('express');
const router = express.Router();
const { getCurrentPrice, getPreviousPrice } = require('../models/modelCoin.js');

router.get('/compare', (req,res) => {
getCurrentPrice()
.then(res => res.send(res))



});


module.exports = router;