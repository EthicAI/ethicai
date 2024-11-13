"use client";

import { createContext, useContext, useReducer } from "react";
import { ActionList, listReducer } from "@/util/listUtils";

export const TIPO_CONVERSA = {
  PERGUNTA: "pergunta",
  RESPOSTA: "resposta",
}

export const DadosProviderContext = createContext({
  conversa: [],
  addConversa: (e) => { },
  removeConversa: (e) => { }
});

export function DadosProvider({ children }) {
  const [conversa, dispatch] = useReducer(listReducer, []);

  const addConversa = (item) => {
    dispatch({ type: ActionList.ADD_ITEM, item });
  };

  const removeConversa = (item) => {
    dispatch({ type: ActionList.REMOVE_ITEM, item });
  };

  return (
    <DadosProviderContext.Provider
      value={{ conversa: conversa, addConversa: addConversa, removeConversa: removeConversa }}
    >
      {children}
    </DadosProviderContext.Provider>
  );
}

export const useDados = () => useContext(DadosProviderContext);
