function StackTecnologias({ tecnologias }) {
  return (
    <div>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
    </div>
  );
}

export default StackTecnologias;
