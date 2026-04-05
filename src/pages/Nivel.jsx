import { useParams, useNavigate } from "react-router-dom";

function Nivel() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Volver</button>

      <h1>Nivel {id}</h1>

      {[1,2,3,4,5,6].map((semana) => (
        <div key={semana}>
          Semana {semana}
        </div>
      ))}
    </div>
  );
}

export default Nivel;