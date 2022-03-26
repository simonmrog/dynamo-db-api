"use strict";

import { healthCheck } from "./routes/healthCheck.js";
import {
  getHeroes,
  createHero,
  getHeroById,
  updateHero,
  deleteHero,
} from "./routes/heroes.js";
import { getXlsxReportFile, getPdfReportFile } from "./routes/reports.js";

export default {
  paths: {
    "/api/status": {
      ...healthCheck,
    },
    "/api/heroes": {
      ...getHeroes,
      ...createHero,
    },
    "/api/heroes/{id}": {
      ...getHeroById,
      ...updateHero,
      ...deleteHero,
    },
    "/api/reports/xlsx": {
      ...getXlsxReportFile,
    },
    "/api/reports/pdf": {
      ...getPdfReportFile,
    },
  },
};
