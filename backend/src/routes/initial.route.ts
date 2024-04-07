import { Router } from "express";
import { initialController } from "../controllers/initial.controller.js";

const router = Router();

router.post('/', initialController);

export default router;
