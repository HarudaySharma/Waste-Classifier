import { getModel } from "../utils/lgModel.js";
import createResponseObj from "../utils/createResponseObj.js";
export const initialController = async (req, res) => {
    const { imageUrl } = req.body;
    if (!imageUrl)
        return;
    console.log("route hit");
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
        }
        catch (err) {
            console.log(err);
        }
    }
    catch (err) {
        console.log("error in controller");
        console.log(err);
        res.status(500).json(err);
    }
};
