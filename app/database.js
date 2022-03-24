import dynamoose from "dynamoose";

import config from "./config.js";

export function initDB() {
  dynamoose.aws.sdk.config.update({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_ACCESS_KEY_SECRET,
    region: config.AWS_REGION,
  });
  if (config.NODE_ENV == "dev") dynamoose.aws.ddb.local(config.AWS_URL);
}
