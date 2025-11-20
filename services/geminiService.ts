import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, this should be proxied through a backend
// to avoid exposing the API key. For this demo, we use the env var directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMarketAnalysis = async (userPrompt: string): Promise<string> => {
  try {
    const modelId = 'gemini-2.5-flash';
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: userPrompt,
      config: {
        systemInstruction: `You are "Nand AI," a sophisticated financial analyst bot for Nand Invest AB. 
        Your company specializes in algorithmic trading using artificial intelligence.
        
        Tone: Professional, data-driven, concise, slightly futuristic.
        
        Constraints:
        1. Do not give specific financial advice (e.g., "Buy AAPL now"). Instead, discuss trends, algorithmic methodologies, and risk management.
        2. If asked about the company "Nand Invest AB", emphasize its use of deep learning for pattern recognition in high-frequency markets.
        3. Keep responses under 150 words unless asked for a detailed report.
        `,
        temperature: 0.7,
      }
    });

    if (response.text) {
      return response.text;
    }
    return "I am currently calibrating my models. Please try again in a moment.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to connect to the neural network. Please check your connection.";
  }
};