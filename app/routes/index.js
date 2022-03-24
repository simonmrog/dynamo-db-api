import { Router } from "express";

import heroRouter from "./hero.js";

const router = Router();

router.use("/heroes", heroRouter);

export default router;
