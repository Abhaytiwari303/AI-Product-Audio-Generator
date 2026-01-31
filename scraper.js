import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeProducts() {
  const url = "https://books.toscrape.com/";
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const products = [];

  $(".product_pod").slice(0, 5).each((_, element) => {
    const name = $(element).find("h3 a").attr("title");
    const description =
      "A well-known book available for readers at an affordable price.";

    products.push({ name, description });
  });

  return products;
}
