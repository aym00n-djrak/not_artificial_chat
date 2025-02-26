"use client";
import { useState } from "react";
import { TextArea, Button } from "@radix-ui/themes";
import { sendMessageToAPI } from "@/services/api";
import MessageList from "@/components/Messagelist";
import { Message } from "@/types/Message";

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = async () => {
        if (message.trim()) {
            const newMessages = [...messages, { sender: "user", text: message }];
            setMessages(newMessages);
            setMessage("");
            try {
                console.log("Sending message to API...");
                console.log(newMessages);
                const data = await sendMessageToAPI(newMessages);
                setMessages(prev => [...prev, { sender: "server", text: data.choices[0].message.content }]);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <div>
            <MessageList messages={messages} />
            <TextArea
                style={{ width: "100%", marginTop: "10px" }}
                placeholder="Parle avec le chat..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button style={{ width: "100%", marginTop: "10px" }} onClick={handleSendMessage}>
                Envoyer
            </Button>
        </div>
    );
};
export default ChatBox;