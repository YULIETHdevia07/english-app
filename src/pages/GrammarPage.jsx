import { useState } from "react";

const grammarData = {
  a1: {
    1: [
      { topic: "Verb to be", desc: "I am, You are, He is" },
      { topic: "Pronouns", desc: "I, You, He, She, It, We, They" },
      { topic: "Greetings", desc: "Hello, Hi, Good morning" }
    ],
    2: [
      { topic: "Articles", desc: "A / An" },
      { topic: "Plural nouns", desc: "cat / cats, dog / dogs" },
      { topic: "Possessive adjectives", desc: "my, your, his, her" }
    ]
  },
  a2: {
    1: [
      { topic: "Present Simple", desc: "I work every day" },
      { topic: "Adverbs of frequency", desc: "always, usually, never" },
      { topic: "Daily routines", desc: "wake up, go to work, study" }
    ],
    2: [
      { topic: "Past Simple", desc: "I visited my grandma" },
      { topic: "Questions", desc: "Did you go?" },
      { topic: "Regular verbs", desc: "play / played, work / worked" }
    ]
  }
};

export function GrammarPage() {
  const [level, setLevel] = useState("a1");
  const [week, setWeek] = useState(1);

  const weeks = Object.keys(grammarData[level] || {});
  const topics = grammarData[level]?.[week] || [];

  return (
    <div style={styles.container}>
      <div style={styles.headerBox}>
        <h1 style={styles.title}>Grammar</h1>
        <p style={styles.subtitle}>
          Selecciona un nivel y una semana para estudiar gramática.
        </p>
      </div>

      <div style={styles.controls}>
        <div style={styles.group}>
          <h3 style={styles.groupTitle}>Nivel</h3>
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
          <h3 style={styles.groupTitle}>Semana</h3>
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

      <div style={styles.contentBox}>
        <div style={styles.weekHeader}>
          <h2 style={styles.weekTitle}>Semana {week}</h2>
          <span style={styles.badge}>{topics.length} temas</span>
        </div>

        <div style={styles.grid}>
          {topics.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.topic}</h3>
              <p style={styles.cardText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    minHeight: "100vh",
    background: "#f8fafc"
  },

  headerBox: {
    marginBottom: "24px"
  },

  title: {
    margin: 0,
    fontSize: "32px",
    color: "#0f172a"
  },

  subtitle: {
    marginTop: "8px",
    color: "#64748b",
    fontSize: "16px"
  },

  controls: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "24px"
  },

  group: {
    background: "#ffffff",
    padding: "18px",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.06)"
  },

  groupTitle: {
    marginTop: 0,
    marginBottom: "12px",
    color: "#1e293b"
  },

  buttons: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#cbd5e1",
    color: "#0f172a",
    cursor: "pointer",
    fontWeight: "600"
  },

  activeButton: {
    padding: "10px 16px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "#ffffff",
    cursor: "pointer",
    fontWeight: "600"
  },

  contentBox: {
    background: "#f1f5f9",
    borderRadius: "20px",
    padding: "20px"
  },

  weekHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "10px"
  },

  weekTitle: {
    margin: 0,
    color: "#1e293b"
  },

  badge: {
    background: "#dbeafe",
    color: "#1d4ed8",
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "14px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px"
  },

  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0"
  },

  cardTitle: {
    margin: 0,
    marginBottom: "10px",
    color: "#0f172a",
    fontSize: "20px"
  },

  cardText: {
    margin: 0,
    color: "#475569",
    lineHeight: "1.5"
  }
};