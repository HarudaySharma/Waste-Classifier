import { Router } from "express";
import { initialController } from "../controllers/initial.controller.js";

const router = Router();

router.use('/', initialController);

export default router;
