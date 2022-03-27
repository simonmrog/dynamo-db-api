import { Router } from "express";

import reportsController from "../controllers/reports.js";

const router = Router();

router.get("/xlsx", reportsController.getXlsxReportFile);
router.get("/html", reportsController.getHTMLReportFile);

export default router;
