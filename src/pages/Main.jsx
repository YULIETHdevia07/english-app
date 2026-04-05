import { Card } from "../components/Card";
import { FaBook, FaGamepad, FaLayerGroup } from "react-icons/fa";

export function Main() {
  return (
    <div className="main">
      <h1>EXPERT ENGLISH</h1>

      <div className="cards">
        <Card
          title="Principiante"
          subtitle="Nivel básico"
          icon={<FaBook />}
          to="/principiante"
        />

        <Card
          title="A1"
          subtitle="Nivel inicial"
          icon={<FaLayerGroup />}
          to="/a1"
        />

        <Card
          title="A2"
          subtitle="Pre intermedio"
          icon={<FaLayerGroup />}
          to="/a2"
        />

        <Card
          title="Games"
          subtitle="Aprende jugando"
          icon={<FaGamepad />}
          to="/games"
        />
      </div>
    </div>
  );
}
