import { Prediction } from "@sashido/teachablemachine-node";
import { askGemini } from "./gemini.js";
import { generatePrompt } from "./generatePrompt.js";
import { RESPONSEOBJ } from "../types/types.js";


type CreateResponseObjFunParams = {
    predictions: Prediction[],
    imageUrl: string,
}


const createResponseObj = async ({ predictions, imageUrl }: CreateResponseObjFunParams): Promise<RESPONSEOBJ> => {
    const classes = predictions.map((obj: Prediction) => {
        console.log(`${obj.class}: ${obj.score}`);
        return { class: obj.class, score: obj.score };
    });

    const { class: wasteType, score } = predictions.reduce((prev, curr) => {
        return prev.score < curr.score ? curr : prev;
    })

    console.log("wasteType: " + wasteType + " Score:" + score);

    let about = "";
    try {
        // geting waste info form gemini
        about = await askGemini(generatePrompt(wasteType));
    }
    catch (err) {
        console.log('error getting data from GEMINI API');
        console.log(err);
    }

    return {
        imageUrl,
        classes,
        highestRank: {
            class: wasteType,
            score: score,
            about,
        },
    }
}
export default createResponseObj;
