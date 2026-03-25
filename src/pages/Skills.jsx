import { useState, useEffect } from "react";
import GlassCard from "../components/GlassCard";
import { skills, competencies } from "../data/portfolio";
import { Zap, CheckCircle2 } from "lucide-react";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 2rem 5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div
        style={{
          marginBottom: "4rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
          <Zap size={16} color="#f97316" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.15em", color: "#f97316", textTransform: "uppercase" }}>
            Technical Capabilities
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "white",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Skills &{" "}
          <span style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Technologies
          </span>
        </h2>
      </div>

      {/* Skill category cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.2rem",
          marginBottom: "4rem",
        }}
      >
        {skills.map((cat, i) => (
          <GlassCard
            key={cat.category}
            hoverGlow={cat.color}
            style={{
              padding: "1.8rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${0.1 + i * 0.08}s`,
            }}
          >
            {/* Category header */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: cat.color,
                  boxShadow: `0 0 12px ${cat.color}`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: cat.color,
                }}
              >
                {cat.category}
              </span>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {cat.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.78rem",
                    padding: "5px 12px",
                    borderRadius: "100px",
                    background: `${cat.color}14`,
                    border: `1px solid ${cat.color}30`,
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Competencies */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease 0.6s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
          <CheckCircle2 size={16} color="#34d399" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.15em", color: "#34d399", textTransform: "uppercase" }}>
            Core Competencies
          </span>
        </div>
        <GlassCard hoverGlow="#34d399" style={{ padding: "2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {competencies.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.78rem",
                }}
              >
                <span style={{ color: "#34d399", flexShrink: 0 }}>→</span>
                {c}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}