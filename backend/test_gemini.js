import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log("Testing with API Key:", apiKey ? "Present" : "Missing");

if (!apiKey) {
    console.error("Error: GEMINI_API_KEY is missing in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function test() {
    try {
        // Try gemini-1.0-pro
        const modelName = "gemini-2.0-flash";
        console.log(`Attempting to connect to model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        const prompt = "Hello";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("Success! API Response:", text);
    } catch (error) {
        console.error("API Test Failed Full Error:", error);
    }
}

test();
