"use client";

import { InputContainer, MainContainer } from "@/components/CustomComponents";
import InputChat from "@/components/InputChat";
import MessagesContainer from "@/components/MessagesContainer";
import { DadosProvider, useDados } from "@/context/DadosContext";
import { useState } from "react";

export default function Home() {

  const { conversa } = useDados();

  return (
    <>
      <MainContainer>
        <MessagesContainer messages={conversa} />
        <InputContainer>
          <InputChat />
        </InputContainer>
      </MainContainer>
    </>
  );
}
