"use strict";

import log from "../../logger.js";

class ErrorHandler {
  boomErrorHandler(err, req, res, next) {
    if (!err.isBoom) next(err);
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }

  handleError(err, req, res, next) {
    log.error(err.stack);

    // DB Connection timed out
    if (err.message.includes("Server selection")) {
      err.statusCode = 500;
      err.message = "Cannot connect to db. Connection timeout";
    }

    // Timeout from mongoose stopped execution
    if (err.message.includes("interrupted at shutdown")) {
      err.statusCode = 500;
      err.message = "Cannot connect to db. Connection timeout";
    }

    // Verify if is mongoose validation
    if (err.message.includes("validation")) err.statusCode = 422;

    // Unknown error or internal server error
    if (!err.statusCode) {
      err.statusCode = 500;
      err.message = err.message ? err.message : "Internal Server Error";
    }

    const errResponse = {
      statusCode: err.statusCode,
      message: err.message,
    };

    if (res) res.status(err.statusCode).json(errResponse);
  }
}

export default new ErrorHandler();
