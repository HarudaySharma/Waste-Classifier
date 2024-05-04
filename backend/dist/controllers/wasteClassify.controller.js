import { getModel } from "../utils/lgModel.js";
import createResponseObj from "../utils/createResponseObj.js";
export const classifyWasteImg = async (req, res) => {
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
            const resObj = await createResponseObj({ predictions, imageUrl });
            res.status(200).json(resObj);
            console.log("image classification successfull");
            console.log("response send");
        }
        catch (err) {
            console.log("image classification unsuccessfull");
            console.log(err);
        }
    }
    catch (err) {
        console.log("image classification unsuccessfull");
        console.log("error in controller ____classifyWasteImg____");
        console.log(err);
        res.status(501).json({ message: "INTERNAL SERVER ERROR" });
    }
};
