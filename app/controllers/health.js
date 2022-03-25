"use strict";

import config from "../config.js";

class HealthController {
  async getAll(req, res, next) {
    try {
      const healthStatus = {
        environment: config.NODE_ENV,
        title: config.APP_TITLE,
        description: config.APP_DESCRIPTION,
        version: config.APP_VERSION,
      };
      res.status(200).json(healthStatus);
    } catch (err) {
      next(err);
    }
  }
}

export default new HealthController();
