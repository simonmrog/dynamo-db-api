"use strict";

import "dotenv/config";

export default {
  NODE_ENV: process.env.NODE_ENV,
  APP_TITLE: process.env.APP_TITLE,
  APP_DESCRIPTION: process.env.APP_DESCRIPTION,
  APP_VERSION: process.env.APP_VERSION,
  PORT: process.env.PORT || 80,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || null,
  AWS_ACCESS_KEY_SECRET: process.env.AWS_ACCESS_KEY_SECRET || null,
  AWS_REGION: process.env.AWS_REGION || null,
  AWS_URL: process.env.AWS_URL || null,
};
