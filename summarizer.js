import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function summarizeProducts(products) {
  const summaries = [];

  for (const product of products) {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Summarize this product in 1-2 sentences:\n${product.name} - ${product.description}`
        }
      ]
    });

    summaries.push({
      name: product.name,
      summary: response.choices[0].message.content
    });
  }

  return summaries;
}
