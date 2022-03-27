"use strict";

import log from "./logger.js";
import config from "./config.js";
import app from "./app.js";

function start() {
  try {
    app.listen(config.PORT, () => {
      log.info(`Server running on port ${config.PORT}`);
    });
  } catch (err) {
    log.error(err.message);
  }
}

start();
