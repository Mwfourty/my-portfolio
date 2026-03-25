import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = ["Home", "Skills", "Projects", "About"];

export default function Navbar({ active, onNav }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(10,10,20,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(249,115,22,0.12)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => onNav("Home")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          cursor: "none",
          color: "white",
          fontFamily: "'Space Mono', monospace",
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        <Code2 size={22} color="#f97316" />
        <span style={{ color: "#f97316" }}>M.</span>Portfolio
      </button>

      {/* Desktop links */}
      <div
        className="desktop-nav"
        style={{ display: "flex", gap: "2.5rem" }}
      >
        {links.map((l) => (
          <button
            key={l}
            onClick={() => onNav(l)}
            style={{
              background: "none",
              border: "none",
              cursor: "none",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: active === l ? "#f97316" : "rgba(255,255,255,0.65)",
              transition: "color 0.2s",
              position: "relative",
              padding: "4px 0",
            }}
          >
            {l}
            {active === l && (
              <span
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #f97316, #fbbf24)",
                  borderRadius: "2px",
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "none",
          color: "white",
        }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="mobile-dropdown"
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,10,20,0.97)",
            backdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(249,115,22,0.2)",
            padding: "1rem 0",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => { onNav(l); setOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "none",
                padding: "0.85rem 2rem",
                textAlign: "left",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active === l ? "#f97316" : "rgba(255,255,255,0.7)",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}