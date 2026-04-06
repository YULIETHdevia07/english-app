import { useState } from "react";

const vocabularyData = {
  a1: {
    1: [
      { en: "Apple", es: "Manzana" },
      { en: "Book", es: "Libro" },
      { en: "House", es: "Casa" },
    ],
    2: [
      { en: "Dog", es: "Perro" },
      { en: "Water", es: "Agua" },
      { en: "Chair", es: "Silla" },
    ],
  },
  a2: {
    1: [
      { en: "Airport", es: "Aeropuerto" },
      { en: "Ticket", es: "Boleto" },
      { en: "Journey", es: "Viaje" },
    ],
    2: [
      { en: "Weather", es: "Clima" },
      { en: "Sunny", es: "Soleado" },
      { en: "Cloudy", es: "Nublado" },
    ],
  },
};

export function VocabularyPage() {
  const [level, setLevel] = useState("a1");
  const [week, setWeek] = useState(1);

  const weeks = Object.keys(vocabularyData[level] || {});
  const words = vocabularyData[level]?.[week] || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Vocabulary</h1>
      <p style={styles.subtitle}>Selecciona un nivel y una semana.</p>

      <div style={styles.controls}>
        <div style={styles.group}>
          <h3>Nivel</h3>
          <div style={styles.buttons}>
            <button
              style={level === "a1" ? styles.activeButton : styles.button}
              onClick={() => {
                setLevel("a1");
                setWeek(1);
              }}
            >
              A1
            </button>
            <button
              style={level === "a2" ? styles.activeButton : styles.button}
              onClick={() => {
                setLevel("a2");
                setWeek(1);
              }}
            >
              A2
            </button>
          </div>
        </div>

        <div style={styles.group}>
          <h3>Semana</h3>
          <div style={styles.buttons}>
            {weeks.map((w) => (
              <button
                key={w}
                style={week === Number(w) ? styles.activeButton : styles.button}
                onClick={() => setWeek(Number(w))}
              >
                Semana {w}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.grid}>
        {words.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3>{item.en}</h3>
            <p>{item.es}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
  },
  title: {
    marginBottom: "8px",
    color: "#0f172a",
  },
  subtitle: {
    color: "#64748b",
    marginBottom: "24px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "24px",
  },
  group: {},
  buttons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#cbd5e1",
    cursor: "pointer",
  },
  activeButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
};
