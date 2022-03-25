import { Router } from "express";

import healthRouter from "./health.js";
import heroRouter from "./hero.js";

const router = Router();

router.use("/status", healthRouter);
router.use("/heroes", heroRouter);

export default router;
