import React from "react";

function ToggleHabilidades({ mostrar, setMostrar }) {
  return (
    <div>
      <button 
        onClick={() => setMostrar(!mostrar)} 
        style={{
          padding: "10px",
          backgroundColor: "#333",
          color: "white",
          borderRadius: "5px",
          margin: "10px 0"
        }}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
    </div>
  );
}

export default ToggleHabilidades;
