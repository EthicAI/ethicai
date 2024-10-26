"use client";

import { InputContainer, MainContainer } from "@/components/CustomComponents";
import InputChat from "@/components/InputChat";
import MessagesContainer from "@/components/MessagesContainer";
import { useState } from "react";

export default function Home() {

  const [messages, setMessages] = useState([
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Another message here for the chat history example.",
    "Here's a longer example message to show the layout in a more realistic way.",
    "Another message here for the chat history example.",
    "Here's a longer example message to show the layout in a more realistic way.",
    "Another message here for the chat history example.",
    "Here's a longer example message to show the layout in a more realistic way.",
    "Another message here for the chat history example.",
    "Here's a longer example message to show the layout in a more realistic way.",
    "Another message here for the chat history example.",
    "Here's a longer example message to show the layout in a more realistic way.",
  ]);

  return (
    <>
      <MainContainer>
        <MessagesContainer messages={messages} />
        <InputContainer>
          <InputChat />
        </InputContainer>
      </MainContainer>
    </>
  );
}
