import {Request, Response} from "express"

import { Prediction } from "../types/MLModelTypes.js";
import { getModel } from "../utils/lgModel.js";
import askGemini from "../utils/geminiText.js";
import generatePrompt from "../utils/generatePrompt.js";

export const initialController = async (req: Request, res: Response) => {
    try {
        const model = getModel();
        console.log(await model.checkModel("model is loaded"));
        const predictions = await model.classify({
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/discusssion-app.appspot.com/o/bottle.jpeg?alt=media&token=2ef3ad8f-73ce-4cb0-b1f1-5d31e0092909",
        });
        predictions.forEach((obj: Prediction) => {
            console.log(`${obj.class}: ${obj.score * 100}`);
        });

        const highestScore = predictions.reduce((prev, curr) => {
            return prev.score < curr.score ? curr : prev;
        })
        console.log(highestScore);
        const message = await askGemini(generatePrompt(highestScore.class));
        res.status(200).json(message);
    }
    catch (err) {
        console.log("error in controller");
        console.log(err);
        res.status(500).json(err);
    }
};
