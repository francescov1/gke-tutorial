'use strict';
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res, next) => {
  return res.status(200).send('hello world');
});

module.exports = router;
