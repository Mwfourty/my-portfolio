import { useState, useEffect } from "react";
import { Github, ExternalLink, X, ChevronRight, Layers } from "lucide-react";
import * as Icons from "lucide-react";
import GlassCard from "../components/GlassCard";
import { projects } from "../data/portfolio";

// Resolve icon name string → component, with safe fallback
function getIcon(name) {
  return Icons[name] || Icons.Code2;
}

function ProjectModal({ project, onClose }) {
  const IconComponent = getIcon(project.icon);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        animation: "fadeIn 0.2s ease",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          width: "100%", maxWidth: "640px",
          background: "rgba(16,16,28,0.96)",
          border: `1px solid ${project.color}40`,
          borderRadius: "20px", overflow: "hidden",
          animation: "slideUp 0.3s cubic-bezier(0.23,1,0.32,1)",
          boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 60px ${project.color}18`,
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.8rem 2rem 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          }}
        >
          <div>
            <div
              style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: `${project.color}18`, border: `1px solid ${project.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              <IconComponent size={26} color={project.color} />
            </div>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "white", margin: "0 0 8px" }}>
              {project.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {project.tech.map((t) => (
                <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", padding: "3px 10px", borderRadius: "100px", background: `${project.color}18`, border: `1px solid ${project.color}35`, color: project.color, letterSpacing: "0.05em" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            data-cursor-hover onClick={onClose}
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "10px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "none", color: "rgba(255,255,255,0.6)", flexShrink: 0, transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(249,115,22,0.15)"; e.currentTarget.style.color = "#f97316"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: "1.5rem 2rem 2rem" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: "1.8rem" }}>
            {project.description}
          </p>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", color: project.color, textTransform: "uppercase", marginBottom: "1rem" }}>
              Key Features
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {project.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>
                  <ChevronRight size={13} color={project.color} style={{ flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a
              href={project.github} target="_blank" rel="noopener noreferrer" data-cursor-hover
              style={{ display: "flex", alignItems: "center", gap: "7px", padding: "10px 22px", borderRadius: "100px", background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`, color: "white", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", fontWeight: 700, textDecoration: "none", cursor: "none", letterSpacing: "0.05em", boxShadow: `0 0 24px ${project.color}40` }}
            >
              <Github size={15} /> View on GitHub
            </a>
            {project.preview && project.preview !== project.github && (
              <a
                href={project.preview} target="_blank" rel="noopener noreferrer" data-cursor-hover
                style={{ display: "flex", alignItems: "center", gap: "7px", padding: "10px 22px", borderRadius: "100px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", textDecoration: "none", cursor: "none", letterSpacing: "0.05em" }}
              >
                <ExternalLink size={15} /> Live Preview
              </a>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "100px 2rem 5rem", maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
      {/* Header */}
      <div style={{ marginBottom: "4rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.6s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
          <Layers size={16} color="#f97316" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.15em", color: "#f97316", textTransform: "uppercase" }}>
            Built &amp; Shipped
          </span>
        </div>
        <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", margin: "0 0 1rem" }}>
          My{" "}
          <span style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Projects
          </span>
        </h2>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", maxWidth: "480px", lineHeight: 1.7 }}>
          Click any project card to preview details, features, and source code.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {projects.map((project, i) => {
          const IconComponent = getIcon(project.icon);
          return (
            <GlassCard
              key={project.id}
              hoverGlow={project.color}
              onClick={() => setSelected(project)}
              style={{
                padding: "2rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${0.1 + i * 0.07}s`,
              }}
            >
              {/* Icon + tags */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: `${project.color}18`, border: `1px solid ${project.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}
                >
                  <IconComponent size={26} color={project.color} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "flex-end", maxWidth: "60%" }}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", padding: "3px 8px", borderRadius: "100px", background: `${project.color}12`, border: `1px solid ${project.color}28`, color: project.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "white", margin: "0 0 0.75rem" }}>
                {project.title}
              </h3>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.76rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, margin: "0 0 1.5rem" }}>
                {project.description.slice(0, 120)}...
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: project.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                View Details <ChevronRight size={13} />
              </div>

              <div style={{ position: "absolute", bottom: 0, left: "2rem", right: "2rem", height: "1px", background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }} />
            </GlassCard>
          );
        })}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}