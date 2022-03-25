import { Router } from "express";

import healthRouter from "./health.js";
import heroesRouter from "./heroes.js";
import reportsRouter from "./reports.js";

const router = Router();

router.use("/status", healthRouter);
router.use("/heroes", heroesRouter);
router.use("/reports", reportsRouter);

export default router;
