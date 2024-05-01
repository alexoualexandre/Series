import { createContext, useContext, useState } from "react";

const Context = createContext();

export function Retour({ children, Bdd }) {
  const [menu, setMenu] = useState(false);
  const [articles, setArticles] = useState(0);
  const [favorie, setFavorie] = useState([
    localStorage.getItem("monTableau") ? localStorage.getItem("monTableau"):""// la valeur par defaut de useState est localStorage si il existe
  ]);
   localStorage.clear();
   favorie.length > 0 && // si la page se recharge sa remet favorie vide donc localStorage ne se met a jour que si cette condition est vérifié
   localStorage.setItem("monTableau", JSON.stringify(favorie)); // la condition ci dessus est vérifié localStorage se met a jour
 const fix = localStorage.getItem("monTableau"); // et cette constante va lire la valeur ci dessus
 // console.log(fix);

  return (
    <Context.Provider
      value={{
        Bdd,
        menu,
        setMenu,
        articles,
        setArticles,
        favorie,
        setFavorie,
        fix,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const Mycontext = () => useContext(Context);
