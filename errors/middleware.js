'use strict';

// error handling middlewear
function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const status = err.status || err.statusCode || err.code || 400;
  return res.status(status >= 100 && status < 600 ? status : 500).send({
    error: {
      type: err.name || err.type,
      message: err.message
    }
  });
}

module.exports = errorHandler;
