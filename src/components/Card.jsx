import { useNavigate } from "react-router-dom";

export function Card({ title, subtitle, icon, to }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(to)}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>     
      <p>{subtitle}</p>
    </div>
  );
}