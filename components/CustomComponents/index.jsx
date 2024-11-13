"use client";
import React from "react";
import { marked } from "marked";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const MainContainer = ({ children }) => (
  <div className={cn("flex flex-col h-screen")}>{children}</div>
);

export const MessageBox = ({ message, tipo }) => {
  const html = marked(message);

  // classes += tipo == TIPO_CONVERSA.PERGUNTA ? " bg-[#3a3a1d] setaBalaoPergunta" : " bg-[#1D3A39] setaBalaoResposta";

  return (
    <Card
      className={cn("border rounded-xl p-4 mb-3 max-w-3xl mx-auto")}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const InputContainer = ({ children }) => (
  <div className={cn("sticky bottom-0 p-5 flex justify-center")}>
    {children}
  </div>
);
