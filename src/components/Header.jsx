import { FaBars, FaUserCircle } from "react-icons/fa";

export function Header({ open, setOpen }) {
  return (
    <div className="header">
    
      <div className="header-left">
        <FaBars
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="header-right">
        <FaUserCircle size={28} />
      </div>

    </div>
  );
}