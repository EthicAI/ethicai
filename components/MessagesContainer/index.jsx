"use client";

import { useEffect, useRef } from "react";
import { MessageBox } from "../CustomComponents";
import { useDados } from "@/contexts/DadosContext";

export default function MessagesContainer() {
  const { conversa: messages } = useDados();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scroll({ top: messagesEndRef.current.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-grow p-5 overflow-y-auto" ref={messagesEndRef}>
      {messages.map((message, index) => (
        <MessageBox key={index} message={message.msg} tipo={message.tipo} />
      ))}
    </div>
  );
}
