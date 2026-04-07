import { Card } from "../components/Card";
import { FaBook, FaGamepad, FaSpellCheck } from "react-icons/fa";

export function Main() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome</h1>
      <p style={styles.subtitle}>
        Selecciona una opción para comenzar a estudiar.
      </p>

      <div style={styles.grid}>
        <Card
          title="Vocabulary"
          subtitle="Aprende vocabulario por niveles y semanas"
          icon={<FaBook />}
          to="/vocabulary"
        />

        <Card
          title="Grammar"
          subtitle="Estudia gramática por niveles y semanas"
          icon={<FaSpellCheck />}
          to="/grammar"
        />

        <Card
          title="Games"
          subtitle="Aprende inglés con juegos"
          icon={<FaGamepad />}
          to="/games"
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    background: "var(--color-bg)",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "8px",
    color: "var(--color-primary)",
  },
  subtitle: {
    color: "var(--color-muted)",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
};