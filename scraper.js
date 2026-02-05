import axios from "axios";
import * as cheerio from "cheerio";

const URL = "https://www.snapdeal.com/products/computers-laptops";


function cleanText(text) {
  if (!text) return "";

  return text
    .replace(/Rs\.[\s\d,]+/gi, "") // remove prices
    .replace(/\d+% Off/gi, "") // remove discount
    .replace(/\(\d+\)/g, "")// remove rating count
    .replace(/\(.*?\)/g, "") 
    .replace(/\s+/g, " ") // normalize whitespace
    .trim();
}


function cleanProductName(name) {
  if (!name) return "";

  const cleaned = cleanText(name)
    .replace(/[-,]/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  // keep first meaningful 4 words
  return cleaned.split(" ").slice(0, 4).join(" ");
}


export async function scrapeProducts() {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
      timeout: 30000,
    });

    const $ = cheerio.load(data);
    const products = [];

    $(".product-tuple-listing")
      .slice(0, 5)
      .each((_, el) => {
        const rawName = $(el).find(".product-title").text();
        const rawDesc = $(el).find(".product-desc-rating").text();

        const name = cleanProductName(rawName);
        const description = cleanText(rawDesc);

        if (name && description) {
          products.push({ name, description });
        }
      });

    if (products.length !== 5) {
      throw new Error(
        `Extraction failed. Found ${products.length} products instead of 5.`
      );
    }

    console.log("✅ Scraped REAL product data from website");
    return products;
  } catch (err) {
    console.error("❌ Scraping failed:", err.message);
    throw err;
  }
}
