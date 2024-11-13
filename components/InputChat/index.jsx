"use client";

import { TIPO_CONVERSA, useDados } from "@/contexts/DadosContext";
import { enviarPergunta } from "@/util/requests/UtilTransformers";
import { ArrowUpIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function InputChat() {
  const { addConversa, removeConversa, conversa } = useDados();
  const [pergunta, setPergunta] = useState("");
  const [gerouResposta, setGerouResposta] = useState(false);

  const buscarResposta = event => {
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
    let perguntas = conversa.filter(i => i.tipo == TIPO_CONVERSA.PERGUNTA);
    enviarPergunta(`${perguntas[perguntas.length - 1].msg}`, (resposta) => {
      addConversa({ tipo: TIPO_CONVERSA.RESPOSTA, msg: resposta });
      setGerouResposta(true);
    });

    setPergunta("");
  };

  return (
    <form onSubmit={buscarResposta} className="flex items-center p-2 bg-[#654525b3] rounded-full w-full max-w-3xl border border-[#F5A524]">
      <input
        type="text"
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        placeholder="Coloque aqui a sua pergunta"
        className="flex-grow p-3 bg-[#3a3a1d] text-[#e1a917] placeholder-[#e1a917] rounded-full border-none focus:outline-none"
      />
      <button
        type="submit"
        className="ml-3 px-4 py-2 bg-[#e1a917] text-[#3a3a1d] rounded-full hover:bg-[#c89b0f] flex items-center justify-center transition-colors shadow-md"
      >
        <span className="mr-1">Enviar</span>
        <ArrowUpIcon />
      </button>
      {
        gerouResposta &&
        <button
          onClick={regerarResposta}
          className="ml-3 px-2 py-2 bg-[#e1a917] text-[#3a3a1d] rounded-full hover:bg-[#c89b0f] flex items-center justify-center transition-colors shadow-md"
        >
          <ReloadIcon />
        </button>
      }
    </form>
  );
}
