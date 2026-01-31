import dotenv from "dotenv";
dotenv.config();


import { scrapeProducts } from "./scraper.js";
import { saveProducts, readProducts } from "./storage.js";
import { summarizeProducts } from "./summarizer.js";
import { generateAudio } from "./tts.js";

async function main() {
  console.log("🔍 Scraping products...");
  const products = await scrapeProducts();

  console.log("💾 Saving products...");
  await saveProducts(products);

  console.log("🧠 Generating summaries...");
  const summaries = await summarizeProducts(products);

  console.log("🔊 Generating audio files...");
  await generateAudio(summaries);

  console.log("✅ All done! Audio files generated.");
}

main().catch(console.error);
