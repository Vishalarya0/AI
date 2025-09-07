import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY?.trim()});


async function main() {
    try {
    const completion= await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            { role: "user", content: "Hello, world!" }
        ]
    });

    console.log("completion", completion);} 




    
    catch (error) {
    console.error("Error creating chat completion:", error.messages);
}
}

main();