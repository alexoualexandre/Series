import { createContext, useContext, useState } from "react";

const Context = createContext();

export function Retour({ children, Bdd }) {
  const [menu, setMenu] = useState(false);
  const [articles,setArticles] = useState(0);
  return (
    <Context.Provider value={{ Bdd, menu, setMenu, articles, setArticles }}>
      {children}
    </Context.Provider>
  );
}

export const Mycontext = () => useContext(Context);
