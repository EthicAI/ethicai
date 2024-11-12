"use client";

import { useDados } from "@/contexts/DadosContext";
import { enviarPergunta } from "@/util/requests/UtilTransformers";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InputChat() {
  const { addConversa } = useDados();
  const [pergunta, setPergunta] = useState("");

  const buscarResposta = () => {
    addConversa(pergunta);

    enviarPergunta(pergunta, (resposta) => {
      addConversa(resposta);
    });

    setPergunta("");
  };

  return (
    <Card className="flex items-center p-2 w-full max-w-3xl border">
      <Input
        type="text"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Coloque aqui a sua pergunta"
        className="flex-grow"
      />
      <Button
        onClick={buscarResposta}
        className="ml-3 flex items-center justify-center"
      >
        <span className="mr-1">Enviar</span>
        <ArrowUpIcon />
      </Button>
    </Card>
  );
}
