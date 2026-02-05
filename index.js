import dotenv from "dotenv";
dotenv.config();


import { scrapeProducts } from "./scraper.js";
import { saveProducts, readProducts } from "./storage.js";
import { summarizeProducts } from "./summarizer.js";
import { generateAudio } from "./tts.js";


async function main() {
  console.log("🔍 Scraping products from real website...");
  const products = await scrapeProducts();


  console.log("💾 Saving products locally...");
  await saveProducts(products);


  console.log("📂 Reading stored products...");
  const storedProducts = await readProducts();


  console.log("🧠 Generating AI summaries...");
  const summaries = await summarizeProducts(storedProducts);


  console.log("🔊 Generating audio files using ElevenLabs...");
  await generateAudio(summaries);


  console.log("✅ Done! 5 audio files created in /audio folder.");
}


main().catch(console.error);