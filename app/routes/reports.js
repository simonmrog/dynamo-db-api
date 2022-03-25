import { Router } from "express";

import reportsController from "../controllers/reports.js";

const router = Router();

router.get("", reportsController.getReportFile);

export default router;
