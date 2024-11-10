"use client";
import React from 'react';
import { marked } from 'marked';
import { TIPO_CONVERSA } from '@/contexts/DadosContext';


export const CustomButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="ml-2 px-4 py-2 bg-yellow-500 text-[#3a3a1d] rounded-lg hover:bg-[#c89b0f] transition-colors"
  >
    {children}
  </button>
);

export const CustomTextField = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex-grow p-3 bg-[#3a3a1d] text-yellow-300 placeholder-yellow-500 rounded-lg border border-[#F5A524] focus:outline-none focus:border-[#F5A524] hover:border-[#F5A524] transition-colors"
  />
);


export const MainContainer = ({ children }) => (
  <div className="flex flex-col h-screen">
    {children}
  </div>
);

export const MessageBox = ({ message, tipo }) => {
  const html = marked(message);
  let classes = ` border border-[#F5A524] rounded-xl p-4 text-[#e1a917] mb-3 max-w-3xl mx-auto`;
  classes += tipo == TIPO_CONVERSA.PERGUNTA ? " bg-[#3a3a1d] setaBalaoPergunta" : " bg-[#1D3A39] setaBalaoResposta";
  return (
    <div className={classes}
      dangerouslySetInnerHTML={{ __html: html }} />
);
};

export const InputContainer = ({ children }) => (
  <div className="sticky bottom-0 p-5 flex justify-center">
    {children}
  </div>
);


