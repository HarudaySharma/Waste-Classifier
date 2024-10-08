import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { imageUrlToGenerativePart } from "./fileToGenerativePart.js";

config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function askGemini (prompt: string) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL as string});
  try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
  }
  catch(err) {
      throw err;
  }
}


export async function askGeminiVision (prompt: string, imageUrl: string) {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: process.env.GEMINI_VISION_MODEL as string});
    try {
        const imagePart = await imageUrlToGenerativePart(imageUrl);
        const result = await model.generateContent([prompt,  imagePart]);
        const response = result.response;
        return response.text();
    }
    catch(err) {
        throw err;
    }
}
