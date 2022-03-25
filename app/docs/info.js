"use strict";

import config from "../config.js";

export default {
  openapi: "3.0.3",
  info: {
    title: config.APP_TITLE,
    description: config.APP_DESCRIPTION,
    version: config.APP_VERSION,
  },
};
