"use client";
import { MessageBox } from "../CustomComponents";
import { useDados } from "@/contexts/DadosContext";

export default function MessagesContainer() {
  const { conversa: messages } = useDados();

  return (
    <div className="flex-grow p-5 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox key={index} message={message.msg} tipo={message.tipo} />
      ))}
    </div>
  );
}
