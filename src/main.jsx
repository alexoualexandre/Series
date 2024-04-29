import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionSiFi from "./Components/SectionSiFi.jsx";
import Voirtout from "./Components/Voirtout.jsx";
import SectionFamille from "./Components/SectionFamille.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <SectionSiFi />
            <SectionFamille />
          </>
        ),
      },
      {
        path: "/voirtout/:id_section",
        element: (
          <>
            <Voirtout />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
