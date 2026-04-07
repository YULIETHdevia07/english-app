import { useNavigate } from "react-router-dom";

export function Card({ title, subtitle, icon, to }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card} onClick={() => navigate(to)}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.subtitle}>{subtitle}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "var(--color-surface)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "0.2s",
    border: "1px solid var(--color-accent)"
  },
  icon: {
    fontSize: "32px",
    marginBottom: "12px",
    color: "var(--color-secondary)"
  },
  title: {
    margin: 0,
    color: "var(--color-primary)"
  },
  subtitle: {
    marginTop: "8px",
    color: "var(--color-muted)"
  }
};