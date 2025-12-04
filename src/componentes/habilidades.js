function Habilidades({ habilidades }) {
  return (
    <div>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map((hab, i) => (
          <li key={i}>{hab}</li>
        ))}
      </ul>
    </div>
  );
}

export default Habilidades;
