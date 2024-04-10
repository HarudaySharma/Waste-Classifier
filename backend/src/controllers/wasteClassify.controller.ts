import { Request, Response } from "express"

import { getModel } from "../utils/lgModel.js";
import createResponseObj from "../utils/createResponseObj.js";
import { RESPONSEOBJ } from "../types/types.js";

export const classifyWasteImg = async (req: Request, res: Response) => {
    const { imageUrl } = req.body;
    if (!imageUrl)
        return;
    console.log("classifying waste image...");
    try {
        let model = getModel();
        // classify the image
        try {
            // input model for prediction
            const predictions = await model.classify({
                imageUrl,
            });
            if (!Array.isArray(predictions)) {
                throw predictions.error;
            }
            const resObj: RESPONSEOBJ = await createResponseObj({ predictions, imageUrl });
            res.status(200).json(resObj);
        }
        catch (err) {
            console.log(err);
        }
    }
    catch (err) {
        console.log("error in controller");
        console.log(err);
        res.status(501).json({message: "INTERNAL SERVER ERROR"}); 
    }
};
