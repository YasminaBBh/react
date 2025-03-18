import React, { useState } from "react"; 
import "../styles.css";
import foto from "./mia.jpg";

const Header = () => {
  
  const [bgColor, setBgColor] = useState("#f4f4f4"); 
  const [textColor, setTextColor] = useState("black"); 

  const changeBackgroundColor = () => {
   
    const colors = ["#f4f4f4", "#e0e0e0", "#ffeb3b", "#e91e63", "#2196f3"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);  

   
    const isLightColor = (hexColor) => {
      const rgb = parseInt(hexColor.replace("#", ""), 16); 
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >>  8) & 0xff;
      const b = (rgb >>  0) & 0xff;
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return brightness > 150;  
    };

    setTextColor(isLightColor(randomColor) ? "black" : "white");
  };

  return (
    <div className="cabecera" style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: textColor }}>YASMINA BAHLAQUI BEHLAQUI</h1>
      <img src={foto} alt="Foto de Yasmina" style={{ display: "block", margin: "0 auto", width: "150px", borderRadius: "50%" }} />
      <p className="center" style={{ color: textColor }}>
        <strong>Programadora | Desarrollo Web | Diseño</strong>
      </p>
      <button onClick={changeBackgroundColor} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Cambiar Color de Fondo
      </button>
    </div>
  );
};

export default Header;

