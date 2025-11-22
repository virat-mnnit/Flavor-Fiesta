import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided" });
        }

       
        const imageBase64 = req.file.buffer.toString('base64');
        const mimeType = req.file.mimetype;

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = "Identify the ingredients in this food image. Return ONLY a comma-separated list of ingredients (e.g. 'rice, chicken, peas'). Do not include any other text, explanations, or markdown formatting. If it's not food, return 'not food'.";

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: mimeType
                }
            }
        ]);

        const response = await result.response;
        const text = response.text().trim();

        if (text.toLowerCase() === 'not food') {
            return res.status(400).json({ error: "Image does not appear to be food" });
        }

    
        const ingredients = text.split(',').map(i => i.trim().toLowerCase()).filter(i => i.length > 0);

        res.json({ ingredients });

    } catch (error) {
        console.error("Gemini Analysis Error:", error);
        res.status(500).json({ error: "Failed to analyze image" });
    }
};
