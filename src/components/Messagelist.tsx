import { Message } from "@/types/Message";

interface MessageListProps {
    messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
    return (
        <div>
            {messages.map((msg: Message, index: number) => (
                <div key={index} style={{ textAlign: msg.sender === "user" ? "left" : "right" }}>
                    <span style={{
                        display: "inline-block",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: msg.sender === "user" ? "#cce5ff" : "#d4edda"
                    }}>
                        {msg.text}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default MessageList;