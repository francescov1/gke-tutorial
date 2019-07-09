'use strict';
Promise = require('bluebird');
const config = require('./config');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require("morgan");

const routes = require('./routes');
const errors = require('./errors/middleware');

const app = express();

// basic middleware
app.use(helmet());
app.use(logger(config.node_env === "production" ? "combined" : "dev"));
app.use(bodyParser.json());

// api routes
app.use('/api', routes)

// error middleware
app.use(errors)

app.all("*", (req, res) => res.status(200).send("My Node.js API"));

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`)
});
