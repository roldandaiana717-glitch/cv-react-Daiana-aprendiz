import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {

  const [input, setInput] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();     // evita recargar la página
    if (input.trim() === "") return;

    agregarTecnologia(input);
    setInput(""); // limpiar
  };

  return (
    <form onSubmit={manejarSubmit} style={{ marginTop: "20px" }}>
      <h3>Agregar nueva tecnología</h3>

      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe la tecnología"
        style={{ padding: "8px", width: "200px" }}
      />

      <button 
        type="submit"
        style={{ marginLeft: "10px", padding: "8px" }}>
        Agregar
      </button>
    </form>
  );
}

export default FormularioTecnologia;
