'use strict';
Promise = require('bluebird');
const config = require('./config/main');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const router = require('./router.js');

const app = express();

app.use(helmet());
app.use(bodyParser.json());

router(app);

app.listen(config.port, () => {
  console.log(`server listening on port ${config.port}...`)
});
