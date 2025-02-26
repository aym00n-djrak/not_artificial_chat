import { Message } from "@/types/Message";

export const sendMessageToAPI = async (messages: Message[]) => {
    const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
    if (!apiKey) throw new Error("API key is missing!");

    const formattedMessages = messages.map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text
    }));

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "mistral-small-latest",
            temperature: 1.0,
            max_tokens: 1000,
            stream: false,
            messages: formattedMessages,
            response_format: { type: "text" }
        })
    });

    if (!response.ok) throw new Error("Failed to fetch response from API");
    return response.json();
};