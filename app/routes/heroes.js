import { Router } from "express";

import heroController from "../controllers/heroes.js";

const router = Router();

router.get("", heroController.getAll);
router.get("/:id", heroController.getById);
router.post("", heroController.create);
router.patch("/:id", heroController.update);
router.delete("/:id", heroController.delete);

export default router;
