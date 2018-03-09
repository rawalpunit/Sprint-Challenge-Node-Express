const express = require('express');
const router = express.Router();
const { getCurrentPrice, getPreviousPrice } = require('../models/modelCoin.js');

router.get('/compare', (req,res) => {
let pp = getPreviousPrice().then(res => res);
console.log(pp);


});


module.exports = router;