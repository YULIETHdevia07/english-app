import { FaBook, FaGamepad } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar({ open }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        ...styles.sidebar,
        ...(open ? styles.sidebarOpen : styles.sidebarClosed)
      }}
    >
      <ul style={styles.list}>
        
        <li
          style={{
            ...styles.item,
            ...(location.pathname === "/grammar" && styles.active)
          }}
          onClick={() => navigate("/grammar")}
        >
          <FaBook />
          {open && <span>Grammar</span>}
        </li>

        <li
          style={{
            ...styles.item,
            ...(location.pathname === "/" && styles.active)
          }}
          onClick={() => navigate("/")}
        >
          <MdMenuBook />
          {open && <span>Vocabulary</span>}
        </li>

        <li
          style={{
            ...styles.item,
            ...(location.pathname === "/games" && styles.active)
          }}
          onClick={() => navigate("/games")}
        >
          <FaGamepad />
          {open && <span>Games</span>}
        </li>

      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    background: "#1e293b",
    color: "white",
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
    padding: 0
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "0px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "8px",
    transition: "0.2s"
  },

  active: {
    background: "#334155"
  }
};