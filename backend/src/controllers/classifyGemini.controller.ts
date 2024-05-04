import { Request, Response } from "express"

import { generatePromptForGeminiVision } from "../utils/generatePrompt.js";
import { askGeminiVision } from "../utils/gemini.js";

export const useGeminiVision = async (req: Request, res: Response) => {
    const { imageUrl } = req.body;
    if (!imageUrl)
        return;
    console.log("classifying waste image...");
    try {
        const prompt = generatePromptForGeminiVision();
        const out = await askGeminiVision(prompt, imageUrl);
        console.log("image classification successfull");
        console.log("response send");
        res.status(200).json({
            imageUrl: imageUrl,
            information: out
        });
    }
    catch (err) {
        console.log("image classification unsuccessfull");
        console.log("error in controller ____useGeminiVision____");
        console.log(err);
        res.status(501).json({ message: "INTERNAL SERVER ERROR" });
    }
};
