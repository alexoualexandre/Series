import axios from "axios";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header.jsx";
import { Retour } from "./Context/Context.jsx";

function App() {
  const [initApi, setInitApi] = useState(0);
  const [Bdd, setBdd] = useState();
 
  if (initApi < 1) {
    axios
      .get("https://alexoualexandre.github.io/Bdd/Bdd.json", {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data); // Les données au format JSON
        setBdd(response.data);
        setInitApi(1);
      });
  }

  return (
    <>
      {Bdd && (
        <>
          <Retour Bdd={Bdd} >
            <Header />

            <Outlet />
          </Retour>
        </>
      )}
    </>
  );
}

export default App;
