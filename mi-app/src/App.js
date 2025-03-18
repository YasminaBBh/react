import React from "react";
import Header from "./components/Header";
import Contacto from "./components/Contacto";
import Perfil from "./components/Perfil";
import Formacion from "./components/Formacion";
import Experiencia from "./components/Experiencia";
import Cualidades from "./components/Cualidades";
import Habilidades from "./components/Habilidades";
import "./styles.css";  

function App() {
  return (
    <div>
      <Header />
      <Contacto />
      <Perfil />
      <Formacion />
      <Experiencia />
      <Cualidades />
      <Habilidades />
    </div>
  );
}

export default App;
