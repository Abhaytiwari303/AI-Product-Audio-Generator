import axios from "axios";
import fs from "fs-extra";


export async function generateAudio(summaries) {
  await fs.ensureDir("./audio");


  for (let i = 0; i < summaries.length; i++) {
    const { summary } = summaries[i];


    const response = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL",
      {
        text: summary,
        model_id: "eleven_monolingual_v1",
      },
      {
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );


    await fs.writeFile(`./audio/product${i + 1}.mp3`, response.data);
  }
}