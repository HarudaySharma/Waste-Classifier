import askGemini from "./geminiText.js";
import generatePrompt from "./generatePrompt.js";
const createResponseObj = async ({ predictions, imageUrl }) => {
    const classes = predictions.map((obj) => {
        console.log(`${obj.class}: ${obj.score}`);
        return { class: obj.class, score: obj.score };
    });
    const { class: wasteType, score } = predictions.reduce((prev, curr) => {
        return prev.score < curr.score ? curr : prev;
    });
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
    };
};
export default createResponseObj;
