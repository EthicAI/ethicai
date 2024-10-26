"use client";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function InputChat() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Mensagem enviada:", message);
    setMessage("");
  };

  return (
    <div className="flex items-center p-2 bg-[#654525b3] rounded-full w-full max-w-3xl border border-[#F5A524]">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Lorem Ipsum is simply dummy text of the printing..."
        className="flex-grow p-3 bg-[#3a3a1d] text-[#e1a917] placeholder-[#e1a917] rounded-full border-none focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="ml-3 px-4 py-2 bg-[#e1a917] text-[#3a3a1d] rounded-full hover:bg-[#c89b0f] flex items-center justify-center transition-colors shadow-md"
      >
        <span className="mr-1">Enviar</span>
        <ArrowUpIcon />
      </button>
    </div>
  );
}
