import * as googleTTS from 'google-tts-api'
import * as soundPlay from 'sound-play'
import * as fs from "fs";
import * as os from "os";
import * as Path from "path";

export async function play(text: string): Promise<void> {
    const url = await googleTTS.getAudioBase64(text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
    });
    const tempPath = Path.join(os.tmpdir(), `${Math.random().toString().slice(2)}-temp.mp3`)
    fs.writeFileSync(tempPath, Buffer.from(url, 'base64'))
    await soundPlay.play(tempPath)
    fs.rmSync(tempPath)
}
