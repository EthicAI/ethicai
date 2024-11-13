"use client";

import { TIPO_CONVERSA, useDados } from "@/contexts/DadosContext";
import { enviarPergunta } from "@/util/requests/UtilTransformers";
import { ArrowUpIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InputChat() {
  const { addConversa, conversa } = useDados();
  const [pergunta, setPergunta] = useState("");
  const [gerouResposta, setGerouResposta] = useState(false);

  const buscarResposta = (event) => {
    event.preventDefault();
    addConversa({ tipo: TIPO_CONVERSA.PERGUNTA, msg: pergunta });
    setGerouResposta(false);
    enviarPergunta(pergunta, (resposta) => {
      addConversa({ tipo: TIPO_CONVERSA.RESPOSTA, msg: resposta });
      setGerouResposta(true);
    });

    setPergunta("");
  };

  const regerarResposta = () => {
    setGerouResposta(false);
    let perguntas = conversa.filter((i) => i.tipo == TIPO_CONVERSA.PERGUNTA);
    enviarPergunta(`${perguntas[perguntas.length - 1].msg}`, (resposta) => {
      addConversa({ tipo: TIPO_CONVERSA.RESPOSTA, msg: resposta });
      setGerouResposta(true);
    });

    setPergunta("");
  };

  return (
    <form
      onSubmit={buscarResposta}
      className="flex w-full items-center max-w-3xl"
    >
      <Card className="flex items-center p-2 w-full">
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
          type="submit"
        >
          <span className="mr-1">Enviar</span>
          <ArrowUpIcon />
        </Button>
        {gerouResposta && (
          <Button
            onClick={regerarResposta}
            className={"ml-3"}
            variant="outline"
          >
            <ReloadIcon />
          </Button>
        )}
      </Card>
    </form>
  );
}
