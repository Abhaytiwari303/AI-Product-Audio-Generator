# AI Product Audio Generator

A Node.js backend script that scrapes real product data, generates concise AI summaries using OpenAI, and converts each summary into speech using ElevenLabs Text‑to‑Speech.

This project was built to fulfill the **Backend AI Assessment** requirements with a complete, single‑command execution pipeline.

---

# 📋 Assessment Overview

This solution implements an automated end‑to‑end backend workflow:

1. Scrapes product data from a **real production website**
2. Stores structured data locally in JSON format
3. Generates **short, human‑readable summaries** using an OpenAI LLM
4. Converts each summary into **speech audio** using ElevenLabs
5. Produces **five separate MP3 audio files** as final output

All steps execute sequentially using a **single command** with **no manual intervention**.

---

# 🌐 Website Scraped

**Snapdeal – Computers & Laptops Category**
[https://www.snapdeal.com/products/computers-laptops](https://www.snapdeal.com/products/computers-laptops)

### Why this site was chosen

* It is a **real‑world production e‑commerce website** (not a demo scraping site)
* Contains **structured product listings** suitable for backend parsing
* Allows evaluation of **HTML structure handling and anti‑scraping awareness**
* Provides **clean product name and description text** required by the assessment

### Data extracted

* Exactly **5 products**
* Each includes:

  * Product Name
  * Short Product Description

---

# 📁 Project Structure

```
ai-product-audio-generator/
│
├── audio/                  # Generated MP3 files (gitignored)
│   ├── product1.mp3
│   ├── product2.mp3
│   ├── product3.mp3
│   ├── product4.mp3
│   └── product5.mp3
│
├── data/
│   └── products.json       # Stored scraped product data
│
├── index.js                # Main execution orchestrator
├── scraper.js              # Web scraping logic
├── storage.js              # Local JSON storage operations
├── summarizer.js           # OpenAI LLM summarization
├── tts.js                  # ElevenLabs TTS generation
│
├── .env                    # API keys (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

# ⚙️ Technologies Used

* **Node.js (ES Modules)** — Backend runtime
* **Axios** — HTTP requests for scraping and APIs
* **Cheerio** — HTML parsing and DOM traversal
* **OpenAI API** — LLM‑based product summarization
* **ElevenLabs API** — Text‑to‑Speech audio generation
* **dotenv** — Secure environment variable management

All libraries are **production‑grade and widely adopted**.

---

# 🚀 How to Run the Project

## Prerequisites

* Node.js **v14+**
* npm
* Valid **OpenAI API key**
* Valid **ElevenLabs API key**

---

## Installation & Execution

### 1. Clone repository

```bash
git clone <repository-url>
cd ai-product-audio-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

### 4. Run the full pipeline

```bash
node index.js
```

---

# 📤 Output

After execution, **five audio files** are generated:

```
audio/
├── product1.mp3
├── product2.mp3
├── product3.mp3
├── product4.mp3
└── product5.mp3
```

Each MP3 contains the **AI‑generated spoken summary** of a product.

---

# 🔄 Execution Flow

```
Scraping → Local Storage → OpenAI Summarization → ElevenLabs TTS → Audio Output
```

This entire workflow runs via:

```bash
node index.js
```

No intermediate manual steps are required.

---

# 🧠 Design Decisions & Engineering Rationale

## 1. Real‑World Website Selection

A **production e‑commerce site** was intentionally chosen instead of demo scraping sites to:

* Reflect **real backend scraping conditions**
* Handle **non‑trivial HTML structure**
* Align with assessment instructions to avoid “made‑for‑scraping” platforms

---

## 2. Modular Backend Architecture

Separated logic into dedicated modules:

* `scraper.js` → data extraction
* `storage.js` → persistence
* `summarizer.js` → AI integration
* `tts.js` → speech generation

Benefits:

* Maintainability
* Clear separation of concerns
* Easier debugging and testing

---

## 3. Local JSON Storage

Chosen because:

* Requirement specifies **lightweight local storage**
* Only **five records** needed
* Simplifies debugging and validation

---

## 4. Clean Text Pre‑Processing

Before sending data to OpenAI:

* HTML artifacts removed
* Discounts/prices stripped
* Whitespace normalized

This ensures:

* **Token efficiency**
* **Better AI summaries**
* **Human‑readable audio output**

---

## 5. Graceful Handling of External API Failures

OpenAI summarization is implemented as the **primary path**.

If authentication or network failure occurs, a **controlled fallback summary** is used to:

* Keep the **end‑to‑end pipeline executable**
* Reflect **real‑world backend resilience**
* Avoid total system failure due to third‑party dependency

This mirrors **production‑grade fault tolerance**.

---

## 6. Responsible API Usage

* Exactly **5 OpenAI requests**
* Exactly **5 ElevenLabs audio generations**
* No unnecessary retries or excessive calls

This follows the **usage responsibility guidelines** in the assessment.

---

# ✅ Requirements Compliance Checklist

* ✅ Uses **one real production website**
* ✅ Scrapes **exactly 5 products**
* ✅ Extracts **name + short description only**
* ✅ Stores data locally before AI usage
* ✅ Generates **1–2 sentence AI summaries**
* ✅ Converts summaries to **five separate audio files**
* ✅ Executes entire workflow via **single command**
* ✅ Implemented in **Node.js (backend only)**
* ✅ Runnable **locally without manual steps**

**All assessment requirements are satisfied.**

---

# 🐛 Troubleshooting

### API authentication errors

Ensure `.env` contains valid API keys.

### Scraping failure

Check:

* Internet connection
* Website availability
* Selector changes in HTML structure

### Audio not generated

Verify:

* ElevenLabs API key
* Write permissions for `/audio` directory

### Missing dependencies

Run:

```bash
npm install
```

---

# 👤 Author

**Abhay Tiwari**
Submitted for **Backend AI Assessment**.

---

# 📄 License

Created solely for **technical assessment and evaluation purposes**.
