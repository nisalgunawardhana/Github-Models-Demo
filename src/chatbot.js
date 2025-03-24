import 'dotenv/config';
import OpenAI from "openai";
import readline from 'readline';

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "o3-mini";

export async function main() {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    console.log("You can start chatting with the assistant. Type 'exit' to quit.");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let messages = [{ role: "system", content: "You are a helpful assistant." }];

    const chat = async () => {
        rl.question("You: ", async (userInput) => {
            if (userInput.toLowerCase() === "exit") {
                console.log("Goodbye!");
                rl.close();
                return;
            }

            messages.push({ role: "user", content: userInput });

            try {
                const response = await client.chat.completions.create({
                    messages: messages,
                    model: modelName
                });

                const assistantMessage = response.choices[0].message.content;
                console.log(`Assistant: ${assistantMessage}`);
                messages.push({ role: "assistant", content: assistantMessage });
            } catch (err) {
                console.error("Error:", err);
            }

            chat();
        });
    };

    chat();
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});