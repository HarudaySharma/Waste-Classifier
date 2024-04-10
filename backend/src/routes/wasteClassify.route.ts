import { Router } from "express";
import { classifyWasteImg } from "../controllers/wasteClassify.controller.js"
import checkTeachableModel from "../services/teachableMachine.service.js";

const router = Router();

router.post('/', checkTeachableModel, classifyWasteImg);

export default router;
