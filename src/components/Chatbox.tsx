import {Box, Container, TextArea} from "@radix-ui/themes";

const ChatBox = () => {
    return (
        <Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
            <Container size="1">
                    <Box py="9" />
                <TextArea color="red" variant="soft" placeholder="Chat with me..."/>
            </Container>
        </Box>
    );
};

export default ChatBox;