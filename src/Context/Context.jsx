import { createContext, useContext, useState } from "react";

const Context = createContext();

export function Retour({ children,Bdd }) {
  
  return (
    <Context.Provider value={{ Bdd }}>
      {children}
    </Context.Provider>
  );
}

export const Mycontext = () => useContext(Context);
