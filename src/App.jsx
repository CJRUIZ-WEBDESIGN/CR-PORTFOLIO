import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarMui from "./components/NavBar/NavBarMui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Contacto from "./components/pages/Contacto/Contacto";
import AcercaDeMi from "./components/pages/AcercaDeMi/AcercaDeMi";
import Plans from "./components/utils/Plans";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />

      <NavBarMui />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer bienvenido="Bienvenidos a mi PortFolio" />
          }
        />
        <Route path="/acercademi" element={<AcercaDeMi />} />
        <Route
          path="/Contacto"
          element={
            <Contacto Contacto="Bienvenidos a la Seccion de Contacto." />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
