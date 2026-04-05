import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./pages/Main";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar open={open} />

        <div style={{ flex: 1 }}>
          <Header open={open} setOpen={setOpen} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/principiante" element={<div>Principiante</div>} />
            <Route path="/a1" element={<div>A1</div>} />
            <Route path="/a2" element={<div>A2</div>} />
            <Route path="/grammar" element={<div>Grammar</div>} />
            <Route path="/games" element={<div>Games</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
