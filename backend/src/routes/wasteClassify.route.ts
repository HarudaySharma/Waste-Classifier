import { Router } from "express";
import { classifyWasteImg } from "../controllers/wasteClassify.controller.js"
import checkTeachableModel from "../services/teachableMachine.service.js";
import { useGeminiVision } from "../controllers/classifyGemini.controller.js";

const router = Router();

router.post('/', checkTeachableModel, classifyWasteImg);
router.post('/useGemini', useGeminiVision);

export default router;
