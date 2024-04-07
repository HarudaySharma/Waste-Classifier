import { Request, Response } from "express"

import { Model, RESPONSEOBJ } from "../types"

import { getModel } from "../utils/lgModel.js";
import createResponseObj from "../utils/createResponseObj.js";

export const initialController = async (req: Request, res: Response) => {
    const { imageUrl } = req.body;
    if (!imageUrl)
        return;
    console.log("route hit");
    try {
        const model: Model = getModel();
        console.log(await model.checkModel("model is loaded"));
        // classify the image
        const predictions = await model.classify({
            imageUrl,
        });
        const resObj: RESPONSEOBJ = await createResponseObj({ predictions, imageUrl });
        res.status(200).json(resObj);
    }
    catch (err) {
        console.log("error in controller");
        console.log(err);
        res.status(500).json(err);
    }
};
