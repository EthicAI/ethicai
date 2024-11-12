"use client";
import { MessageBox } from "../CustomComponents";
import { useDados } from "@/contexts/DadosContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MessageSquarePlus } from "lucide-react";

export default function MessagesContainer() {
  const { conversa: messages } = useDados();

  return (
    <div className="flex-grow p-5 overflow-y-auto relative">
      {messages.map((message, index) => (
        <MessageBox key={index} message={message} />
      ))}

      {messages.length === 0 && (
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
      )}
    </div>
  );
}
