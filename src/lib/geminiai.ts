import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
);

/**
 * Generates content using Google's Gemini AI model
 * @param systemPrompt Instructions for the AI model
 * @param userPrompt User data or query
 * @param options Optional configuration settings
 * @returns The generated text response
 */

export async function generateContent(
  systemPrompt: string,
  userPrompt: string,
  options = {
    model: "gemini-2.0-flash",
    temperature: 0.7,
    maxOutputTokens: 1024,
  },
): Promise<string> {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({
      model: options.model,
    });

    // Generate content using Gemini
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt }, { text: userPrompt }],
        },
      ],
      generationConfig: {
        temperature: options.temperature,
        maxOutputTokens: options.maxOutputTokens,
      },
    });

    // Extract the response
    const aiResponse = result.response.text();

    if (!aiResponse) {
      throw new Error("Empty response from Gemini AI");
    }

    return aiResponse;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    throw new Error(
      `Failed to generate content with Gemini AI: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Checks if the Gemini API is properly configured
 * @returns Boolean indicating if the API is ready to use
 */

export function isGeminiConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
}
