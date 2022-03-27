"use strict";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";

import docs from "./docs/index.js";
import { initDB } from "./database.js";
import routes from "./routes/index.js";
import errorHandler from "./utils/middlewares/error.js";

function initApplication() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Morgan logger for development
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms"),
  );

  // DB Connection
  initDB();

  // API Routes
  app.use("/api", routes);

  // Swagger documentation
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));

  // Error handler
  app.use(errorHandler.boomErrorHandler);
  app.use(errorHandler.handleError);
  return app;
}

export default initApplication();
