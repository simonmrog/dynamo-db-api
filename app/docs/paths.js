"use strict";

import { healthCheck } from "./routes/healthCheck.js";
import {
  getHeroes,
  createHero,
  getHeroById,
  updateHero,
  deleteHero,
} from "./routes/heroes.js";

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
  },
};
