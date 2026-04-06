import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./pages/Main";
import { VocabularyPage } from "./pages/VocabularyPage";
import { GrammarPage } from "./pages/GrammarPage";
import { GamesPage } from "./pages/GamesPage";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <div style={styles.app}>
        <Sidebar open={open} />
        <div style={styles.content}>
          <Header open={open} setOpen={setOpen} />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/vocabulary" element={<VocabularyPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
  },
  content: {
    flex: 1,
  },
};

export default App;
