import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function localSummary(product) {
  return `${product.name}${product.description
    .split(" ")
    .slice(0, 12)
    .join(" ")}...`;
}

export async function summarizeProducts(products) {
  const summaries = [];

  for (const product of products) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Summarize in 1–2 short sentences:\n${product.name} - ${product.description}`,
          },
        ],
      });

      summaries.push({
        name: product.name,
        summary: response.choices[0].message.content.trim(),
        source: "openai",
      });
    } catch (err) {
      console.log("⚠️ OpenAI failed → using local fallback summary");

      summaries.push({
        name: product.name,
        summary: localSummary(product),
        source: "fallback",
      });
    }
  }

  return summaries;
}
