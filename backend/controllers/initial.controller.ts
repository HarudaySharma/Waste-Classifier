import {Request, Response} from "express"

import { Prediction } from "../types/MLModelTypes.js";
import { getModel } from "../utils/lgModel.js";
import askGemini from "../utils/geminiText.js";
import generatePrompt from "../utils/generatePrompt.js";
import createResponseObj from "../utils/createResponseObj.js";

export const initialController = async (req: Request, res: Response) => {
    const {imageURL} = req.body;
    try {
        const model = getModel();
        console.log(await model.checkModel("model is loaded"));
        const predictions = await model.classify({
            imageUrl: imageURL,
        });
        predictions.forEach((obj: Prediction) => {
            console.log(`${obj.class}: ${obj.score * 100}`);
        });

        const highestScore = predictions.reduce((prev, curr) => {
            return prev.score < curr.score ? curr : prev;
        })
        console.log(highestScore);
        const message = await askGemini(generatePrompt(highestScore.class));
        res.status(200).json(createResponseObj(highestScore.class, imageURL, message));
    }
    catch (err) {
        console.log("error in controller");
        console.log(err);
        res.status(500).json(err);
    }
};
