"use client";

import { useEffect, useRef } from "react";
import { MessageBox } from "../CustomComponents";
import { useDados } from "@/contexts/DadosContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MessageSquarePlus } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

export default function MessagesContainer() {
  const { conversa: messages } = useDados();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scroll({
      top: messagesEndRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="flex-grow p-5 overflow-y-auto relative"
      ref={messagesEndRef}
    >
      {messages.length === 0 ? (
        <Card className="w-full max-w-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CardHeader className="text-center">
            <CardTitle>Sem mensagens ainda...</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <MessageSquarePlus className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">
              Comece uma conversa!
            </p>
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="max-w-3xl mx-auto pr-4 h-full">
          {messages.map((message, index) => (
            <MessageBox key={index} message={message.msg} tipo={message.tipo} />
          ))}
        </ScrollArea>
      )}
    </div>
  );
}
