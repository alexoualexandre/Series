import { createContext, useContext, useState } from "react";

const Context = createContext();

export function Retour({ children, Bdd }) {
  const [menu, setMenu] = useState(true);
  return (
    <Context.Provider value={{ Bdd, menu, setMenu }}>
      {children}
    </Context.Provider>
  );
}

export const Mycontext = () => useContext(Context);
