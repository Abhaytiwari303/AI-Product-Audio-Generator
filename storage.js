import fs from "fs-extra";

const DATA_PATH = "./data/products.json";

export async function saveProducts(products) {
  await fs.ensureDir("./data");
  await fs.writeJson(DATA_PATH, products, { spaces: 2 });
}

export async function readProducts() {
  return fs.readJson(DATA_PATH);
}
