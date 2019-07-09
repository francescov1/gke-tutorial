'use strict';
const express = require('express');
const exampleRoutes = require('./examples');

// mount routes on to api router
const apiRouter = express.Router();
apiRouter.use('/examples', exampleRoutes);

module.exports = apiRouter;
