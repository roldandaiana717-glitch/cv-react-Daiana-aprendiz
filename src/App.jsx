import { useState } from "react";
import { tecnologiasIniciales, habilidades } from "./cvData";

import cabeceraCV from "./componentes/cabecera CV";
import perfil from "./componentes/perfil";
import educacion from "./componentes/educacion";
import experiencia from "./componentes/experiencia";
import StackTecnologias from "./componentes/stacktecnologias";
import Proyectos from "./componentes/proyectos";
import Habilidades from "./componentes/habilidades";
import ToggleHabilidades from "./componentes/ToggleHabilidades";
import FormularioTecnologia from "./componentes/formularioTecnologia";



function App() {

  // Estado de tecnologías (dinámico)
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // Estado para mostrar u ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  // Función para agregar una tecnología
  const agregarTecnologia = (tecNueva) => {
    setTecnologias(prev => [...prev, tecNueva]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
      <Proyectos />

      {/* BOTÓN PARA MOSTRAR U OCULTAR */}
      <ToggleHabilidades 
        mostrar={mostrarHabilidades} 
        setMostrar={setMostrarHabilidades}
      />

      {/* RENDERIZADO CONDICIONAL */}
      {mostrarHabilidades && (
        <Habilidades habilidades={habilidades} />
      )}

      {/* FORMULARIO PARA AÑADIR NUEVAS TECNOLOGÍAS */}
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      {/* MOSTRAR LISTA DINÁMICA */}
      <StackTecnologias tecnologias={tecnologias} />

    </div>
  );
}

import { useState } from "react";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  return (
    <>
      <ToggleHabilidades
        mostrar={mostrarHabilidades}
        setMostrar={setMostrarHabilidades}
      />

      {mostrarHabilidades && <Habilidades />}
    </>
  );
}

export default App;

