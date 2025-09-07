import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY?.trim()});


async function main() {
    try {
    const completion= await groq.chat.completions.create({
     
        temperature: 0.1,
        top_p: 0.1,
        stop: ["11"],
        max_completion_tokens: 512,
        max_tokens: 4096,
        parallel_tool_calls: true,

        model: 'llama-3.3-70b-versatile',
        messages: [
            { role: 'system', content: " hii" },
            { role: 'user', content: "ya i have a qestion  " }
        ]
    });

    console.log("completion", completion.choices[0].message.content);} 
    console.log(completion.choices[0].message.content());





    catch (error) {
    console.error("Error creating chat completion:", error.messages);
}
}

main();