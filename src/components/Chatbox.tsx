"use client"

import { Box, Button, Container, TextArea } from "@radix-ui/themes";
import { useState } from "react";

interface Message {
    sender: string;
    text: string;
}

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { sender: "user", text: message }]);
            setMessage("");
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "server", text: "Hey" },
                ]);
            }, 500);
        }
    };

    return (
        <Box>
            <Container>
                <Box>
                    {messages.map((msg, index) => (
                        <Box
                            key={index}
                            style={{
                                textAlign: msg.sender === "user" ? "left" : "right",
                                marginBottom: "10px",
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    backgroundColor: msg.sender === "user" ? "#cce5ff" : "#d4edda",
                                }}
                            >
                                {msg.text}
                            </span>
                        </Box>
                    ))}
                </Box>
                <TextArea
                    placeholder="Parle avec le chat..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                    style={{
                        width: "100%",
                        marginTop: "10px",
                    }}
                    onClick={handleSendMessage}
                >
                    Envoyer
                </Button>
            </Container>
        </Box>
    );
};

export default ChatBox;