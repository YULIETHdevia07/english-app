import { FaHome, FaBook, FaGamepad, FaSpellCheck } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar({ open }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/vocabulary", label: "Vocabulary", icon: <FaBook /> },
    { path: "/grammar", label: "Grammar", icon: <FaSpellCheck /> },
    { path: "/games", label: "Games", icon: <FaGamepad /> }
  ];

  return (
    <div
      style={{
        ...styles.sidebar,
        ...(open ? styles.sidebarOpen : styles.sidebarClosed)
      }}
    >

      <ul style={styles.list}>
        {menuItems.map((item) => (
          <li
            key={item.path}
            style={{
              ...styles.item,
              ...(location.pathname === item.path ? styles.active : {})
            }}
            onClick={() => navigate(item.path)}
          >
            <span style={styles.icon}>{item.icon}</span>
            {open && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    background: "var(--color-primary)",
    color: "var(--color-surface)",
    minHeight: "100vh",
    padding: "15px",
    transition: "0.3s"
  },
  sidebarOpen: {
    width: "220px"
  },
  sidebarClosed: {
    width: "70px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: "12px",
    borderRadius: "10px",
    transition: "0.2s",
    marginBottom: "8px",
    color: "var(--color-surface)"
  },
  icon: {
    fontSize: "18px",
    color: "var(--color-surface)"
  },
  active: {
    background: "#334155"
  }
};