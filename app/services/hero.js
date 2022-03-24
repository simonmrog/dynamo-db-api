"use strict";

import BaseService from "./base.js";
import HeroModel from "../models/hero.js";

class HeroService extends BaseService {}

export default new HeroService(HeroModel);
