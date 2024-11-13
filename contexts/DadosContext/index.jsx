"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import { ActionList, listReducer } from "@/util/listUtils";

export const TIPO_CONVERSA = {
  PERGUNTA: "pergunta",
  RESPOSTA: "resposta",
};

export const DadosProviderContext = createContext({
  conversa: [],
  addConversa: (e) => {},
  removeConversa: (e) => {},
});

const localStorageKey = "__ethicAiHistory";

export function DadosProvider({ children }) {
  const [conversa, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    const storedConversa = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    storedConversa.forEach((item) => dispatch({ type: ActionList.ADD_ITEM, item }));
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(conversa));
  }, [conversa]);

  const addConversa = (item) => {
    dispatch({ type: ActionList.ADD_ITEM, item });
  };

  const removeConversa = (item) => {
    dispatch({ type: ActionList.REMOVE_ITEM, item });
  };

  return (
    <DadosProviderContext.Provider
      value={{ conversa, addConversa, removeConversa }}
    >
      {children}
    </DadosProviderContext.Provider>
  );
}

export const useDados = () => useContext(DadosProviderContext);
