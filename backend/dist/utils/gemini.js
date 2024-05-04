import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { imageUrlToGenerativePart } from "./fileToGenerativePart.js";
config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export async function askGemini(prompt) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
    }
    catch (err) {
        throw err;
    }
}
export async function askGeminiVision(prompt, imageUrl) {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    try {
        const imagePart = await imageUrlToGenerativePart(imageUrl);
        const result = await model.generateContent([prompt, imagePart]);
        const response = result.response;
        return response.text();
    }
    catch (err) {
        throw err;
    }
}
