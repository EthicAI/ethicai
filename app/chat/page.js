"use client";

import { InputContainer, MainContainer } from "@/components/CustomComponents";
import InputChat from "@/components/InputChat";
import MessagesContainer from "@/components/MessagesContainer";
import { DadosProvider } from "@/contexts/DadosContext";

export default function Home() {
  return (
    <DadosProvider>
      <MainContainer>
        <MessagesContainer />
        
        <InputContainer>
          <InputChat />
        </InputContainer>
      </MainContainer>
    </DadosProvider>
  );
}
