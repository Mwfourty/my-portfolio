import { useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import AmbientBackground from "./components/AmbientBackground";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";

export default function App() {
  const [page, setPage] = useState("Home");

  const pages = {
    Home: <Home onNav={setPage} />,
    Skills: <Skills />,
    Projects: <Projects />,
    About: <About />,
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", cursor: "none" }}>
      <Cursor />
      <AmbientBackground />
      <Navbar active={page} onNav={setPage} />
      <main key={page} style={{ animation: "pageIn 0.4s cubic-bezier(0.23,1,0.32,1)" }}>
        {pages[page]}
      </main>
      <style>{`
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}