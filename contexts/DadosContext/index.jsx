"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import { ActionList, listReducer } from "@/util/listUtils";

export const DadosProviderContext = createContext({
  conversa: [],
  addConversa: (e) => {},
  removeConversa: (e) => {}
});

export function DadosProvider({ children }) {
  const [conversa, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    const storedConversa = JSON.parse(localStorage.getItem("conversa")) || [];
    storedConversa.forEach(item => dispatch({ type: ActionList.ADD_ITEM, item }));
  }, []);

  const addConversa = (item) => {
    dispatch({ type: ActionList.ADD_ITEM, item });
    localStorage.setItem("conversa", JSON.stringify([...conversa, item]));
  };

  const removeConversa = (item) => {
    dispatch({ type: ActionList.REMOVE_ITEM, item });
    localStorage.setItem("conversa", JSON.stringify(conversa.filter(i => i !== item)));
  };

  return (
    <DadosProviderContext.Provider
      value={{ conversa, addConversa: addConversa, removeConversa: removeConversa }}
    >
      {children}
    </DadosProviderContext.Provider>
  );
}

export const useDados = () => useContext(DadosProviderContext);
