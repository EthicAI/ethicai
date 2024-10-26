"use client";

import { createContext, useContext, useReducer } from "react";
import { ActionList, listReducer } from "@/util/listUtils";


export const DadosProviderContext = createContext({
  conversa: [],
  addConversa: (e) => { },
  removeConversa: (e) => { }
});

export function DadosProvider({ children }) {
  const [conversa, dispatch] = useReducer(listReducer, [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Another message here for the chat history example."
  ]);

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
