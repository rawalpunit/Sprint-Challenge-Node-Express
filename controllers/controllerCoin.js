const express = require('express');
const router = express.Router();
const { getCurrentPrice, getPreviousPrice } = require('../models/modelCoin.js');

router.get('/compare', (req,res) => {
  let cp = 0;
  let pp = 0;
getCurrentPrice()
.then(res => (cp = res))
.then(getPreviousPrice)
.then(res => (pp = res))
.then(diff => res.send( {"diff is: ": (cp-pp)} ))



});


module.exports = router;