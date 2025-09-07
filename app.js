import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY?.trim()});


async function main() {
    try {
    const completion= await groq.chat.completions.create({
     
        temperature: 0.1,
        max_tokens: 1000,

        model: 'llama-3.3-70b-versatile',
        messages: [
            { role: 'system', content: " hii" },
            { role: 'user', content: "hii " }
        ]
    });

    console.log("completion", completion.choices[0].message.content);} 





    catch (error) {
    console.error("Error creating chat completion:", error.messages);
}
}

main();