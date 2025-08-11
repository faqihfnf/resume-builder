"use server";

import { generateContent } from "@/lib/geminiai";
import { GenerateSummaryInput, generateSummarySchema } from "@/lib/validation";

export async function generateSummary(input: GenerateSummaryInput) {
  // Validate the input using the schema
  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  // Define the system prompt (instructions for the model)
  const systemPrompt = `
    You are a job resume generator AI. Your task is to write a professional introduction summary for a resume given the user's provided data.
    Only return the summary and do not include any other information in the response. Keep it concise and professional.
  `;

  // Prepare the user's data for the prompt
  const userPrompt = `
    Please generate a professional resume summary from this data:

    Job title: ${jobTitle || "N/A"}

    Work experience:
    ${workExperiences
      ?.map(
        (exp) => `
        Position: ${exp.position || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}

        Description:
        ${exp.description || "N/A"}
        `,
      )
      .join("\n\n")}

      Education:
    ${educations
      ?.map(
        (edu) => `
        Degree: ${edu.degree || "N/A"} at ${edu.school || "N/A"} from ${edu.startDate || "N/A"} to ${edu.endDate || "N/A"}
        `,
      )
      .join("\n\n")}

      Skills:
      ${skills}
  `;

  // console.log("systemPrompt", systemPrompt);
  // console.log("userPrompt", userPrompt);

  try {
    // Generate content using the Gemini AI utility
    const aiResponse = await generateContent(systemPrompt, userPrompt);

    if (!aiResponse) {
      throw new Error("Failed to generate AI response");
    }

    return aiResponse;
  } catch (error) {
    console.error("Error generating resume summary:", error);
    throw new Error("Failed to generate resume summary");
  }
}
