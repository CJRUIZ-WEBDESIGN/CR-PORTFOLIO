import NavBarMui from "./components/NavBar/NavBarMui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portafolio from "./components/pages/Portafolio/Portafolio";
import SobreMi from "./components/pages/SobreMi/SobreMi";
import Habilidades from "./components/pages/Habilidades/Habilidades";
import Inicio from "./components/pages/Inicio/Inicio";
import Contacto from "./components/pages/Contacto/Contacto";
import Servicios from "./components/pages/Servicios/Servicios";


import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />

      <NavBarMui />

      <Routes>
        <Route
          path="/inicio"
          element={
            <Inicio Inicio="Inicio" />
          }
        />
        <Route
          path="/Portafolio"
          element={
            <Portafolio Portafolio="Portafolio" />
          }
        />
        <Route
          path="/sobremi"
          element={
            <SobreMi SobreMi="SobreMi" />
          }
        />
        <Route
          path="/habilidades"
          element={
            <Habilidades Habilidades="Habilidades" />
          }
        />
        <Route
          path="/contacto"
          element={
            <Contacto Contacto="Contacto" />
          }
        />
        <Route
          path="/servicios"
          element={
            <Servicios Servicios="Servicios" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
