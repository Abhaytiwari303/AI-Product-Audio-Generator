# AI Product Audio Generator

A Node.js script that scrapes product data, generates AI summaries using OpenAI, and converts them to audio files using ElevenLabs TTS.

---

## 📋 Assessment Overview

This project fulfills the Backend AI Assessment requirements by implementing a fully automated pipeline that:
1. Scrapes product data from a website
2. Stores data locally in JSON format
3. Generates concise summaries using OpenAI LLM
4. Converts summaries to speech using ElevenLabs
5. Outputs 5 separate audio files

**Complete execution in a single command** — no manual intervention required.

---

## 🌐 Website Scraped

**https://books.toscrape.com**

This demo website provides:
- Simple, structured product listings
- Clean product names and descriptions
- Reliable HTML structure for scraping

**Products scraped:** Exactly 5 books with names and descriptions

---

## 📁 Project Structure

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
│   └── products.json      # Scraped product data
│
├── index.js               # Main execution orchestrator
├── scraper.js             # Web scraping logic
├── storage.js             # Local JSON storage operations
├── summarizer.js          # OpenAI LLM integration
├── tts.js                 # ElevenLabs TTS integration
│
├── .env                   # API keys (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Technologies Used

- **Node.js** — Runtime environment (JavaScript ES Modules)
- **Axios** — HTTP requests for web scraping
- **Cheerio** — HTML parsing and data extraction
- **OpenAI API** — LLM-based text summarization
- **ElevenLabs API** — Text-to-Speech conversion
- **dotenv** — Environment variable management

---

## 🚀 How to Run

### Prerequisites

- Node.js (v14 or higher)
- npm
- OpenAI API key
- ElevenLabs API key

### Installation & Execution

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-product-audio-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API keys**
   
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ```

4. **Run the script**
   ```bash
   node index.js
   ```

**That's it!** The script will automatically:
- Scrape 5 products from books.toscrape.com
- Save data to `data/products.json`
- Generate AI summaries using OpenAI
- Create 5 audio files in the `audio/` directory

---

## 📤 Output

After execution, you will find **5 audio files** in the `audio/` directory:

```
audio/
├── product1.mp3
├── product2.mp3
├── product3.mp3
├── product4.mp3
└── product5.mp3
```

Each file contains the AI-generated summary for one product, converted to speech.

---

## 🔄 Execution Flow

```
Step 1: Scrape Products (books.toscrape.com)
   ↓
Step 2: Store Locally (data/products.json)
   ↓
Step 3: Generate Summaries (OpenAI LLM)
   ↓
Step 4: Convert to Speech (ElevenLabs TTS)
   ↓
Step 5: Save Audio Files (audio/*.mp3)
```

**Single execution flow** — all steps run sequentially without manual intervention.

---

## 🧠 Design Decisions

### 1. **Modular Architecture**
Separated concerns into individual modules (`scraper.js`, `storage.js`, `summarizer.js`, `tts.js`) for:
- Code clarity and maintainability
- Easy testing and debugging
- Single Responsibility Principle

### 2. **Local JSON Storage**
Used simple JSON file storage as specified in requirements:
- Lightweight and sufficient for 5 products
- Easy to inspect and debug
- No database overhead needed

### 3. **Clean Text Extraction**
Stripped HTML tags before passing to OpenAI:
- Ensures LLM receives clean, readable text
- Prevents token waste on markup
- Improves summary quality

### 4. **Sequential Execution**
Implemented synchronous flow in `index.js`:
- Guarantees proper step ordering
- Simplifies error handling
- Matches assessment requirement for single-command execution

### 5. **Responsible API Usage**
- Scraped exactly 5 products (no excessive calls)
- Generated one summary per product
- Created one audio file per summary
- Minimized API token consumption

### 6. **Error Handling**
Basic try-catch blocks for:
- Network failures during scraping
- API errors (OpenAI, ElevenLabs)
- File system operations
- Graceful failure messages

---

## ✅ Requirements Checklist

- ✅ Scrapes data from **one website** (books.toscrape.com)
- ✅ Scrapes **exactly 5 products**
- ✅ Extracts Product Name and Product Description
- ✅ No image scraping
- ✅ Stores data locally (JSON format)
- ✅ Uses OpenAI LLM for summarization (1-2 sentences)
- ✅ Does not pass raw HTML to LLM
- ✅ Uses ElevenLabs for Text-to-Speech
- ✅ Generates **5 separate audio files**
- ✅ Single command execution (`node index.js`)
- ✅ Implemented in **Node.js and JavaScript**
- ✅ Backend/script only (no frontend)
- ✅ Runnable locally

---

## 🔧 Dependencies

```json
{
  "dependencies": {
    "axios": "^1.6.0",
    "cheerio": "^1.0.0-rc.12",
    "openai": "^4.20.0",
    "dotenv": "^16.3.1"
  }
}
```

All dependencies are production-ready and widely used libraries.

---

## 📝 API Usage Notes

- **OpenAI:** Used for generating concise product summaries
- **ElevenLabs:** Used for Text-to-Speech conversion
- API keys are stored securely in `.env` (not committed to repository)
- Usage kept minimal and responsible as per assessment guidelines

---

## 🐛 Troubleshooting

**Issue:** API key errors  
**Solution:** Verify `.env` file exists with valid keys

**Issue:** Scraping fails  
**Solution:** Check internet connection and website availability

**Issue:** Audio files not generated  
**Solution:** Ensure `audio/` directory exists and has write permissions

**Issue:** Module not found errors  
**Solution:** Run `npm install` to install all dependencies

---

## 👤 Author

**Abhay Tiwari**

Submitted as part of the Backend AI Assessment.

---

## 📄 License

This project is created for assessment purposes.

---

