import { getModel, loadModel } from "../utils/lgModel.js";
const checkTeachableModel = async (req, res, next) => {
    let model = getModel();
    try {
        if (!Boolean(model)) {
            console.log('model is not loaded!!');
            model = await loadModel();
        }
        console.log("model is loaded!!");
        next();
    }
    catch (err) {
        console.log("ERROR LOADING ML MODEL");
        console.error(err);
        res.status(501).json({ message: "INTERNAL SERVER ERROR" });
    }
};
export default checkTeachableModel;
