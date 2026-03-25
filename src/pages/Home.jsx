import { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin, Download, Mail, MapPin } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { personal } from "../data/portfolio";
import cv from "../assets/images/Musawenkosi Mndau CV.pdf";
import portrait from "../assets/images/SelfPotrait.jpg";

const TITLES = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Problem Solver",
  "IT Student",
];

export default function Home({ onNav }) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const interval = setInterval(() => {
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 2rem 4rem",
        position: "relative",
        zIndex: 1,
      }}
    >




      {/* Name */}
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "clamp(2.8rem, 8vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          textAlign: "center",
          margin: "0 0 1rem",
          color: "white",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease 0.25s",
        }}
      >
        Musawenkosi
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mndau
        </span>
      </h1>

      {/* Animated title */}
      <div
        style={{
          height: "2.2rem",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.38s",
        }}
      >
        <p
          key={titleIdx}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            letterSpacing: "0.08em",
            margin: 0,
            animation: "fadeSlideUp 0.5s ease forwards",
          }}
        >
          — {TITLES[titleIdx]} —
        </p>
      </div>

      {/* Location & contact */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.48s",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", fontFamily: "'Space Mono', monospace" }}>
          <MapPin size={13} color="#f97316" /> {personal.location}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", fontFamily: "'Space Mono', monospace" }}>
          <Mail size={13} color="#f97316" /> {personal.email}
        </span>
      </div>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "3.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.58s",
        }}
      >
        <button
          data-cursor-hover
          onClick={() => onNav("Projects")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #f97316, #ea580c)",
            border: "none",
            borderRadius: "100px",
            padding: "12px 28px",
            color: "white",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            cursor: "none",
            boxShadow: "0 0 30px rgba(249,115,22,0.35)",
            transition: "box-shadow 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 45px rgba(249,115,22,0.55)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(249,115,22,0.35)"}
        >
          View Projects <ArrowRight size={15} />
        </button>

        <a
          href={cv}
          download="Musawenkosi_Mndau_CV.pdf"
          data-cursor-hover
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "12px 28px",
            color: "rgba(255,255,255,0.85)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            cursor: "none",
            textDecoration: "none",
            backdropFilter: "blur(10px)",
            transition: "border-color 0.2s, background 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; e.currentTarget.style.background = "rgba(249,115,22,0.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
        >
          <Download size={15} /> Download CV
        </a>
      </div>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          width: "100%",
          maxWidth: "420px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease 0.68s",
        }}
        className="stats-grid"
      >
        {[
          { value: "70.8%", label: "Avg Grade", color: "#f97316" },
          { value: "12", label: "Projects", color: "#34d399" },
        ].map((stat) => (
          <GlassCard key={stat.label} hoverGlow={stat.color} style={{ padding: "1.4rem 1rem", textAlign: "center" }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, color: stat.color, marginBottom: "4px" }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {stat.label}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Social links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.5rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease 0.78s",
        }}
      >
        {[
          { icon: <Github size={18} />, href: personal.github, label: "GitHub" },
          { icon: <Linkedin size={18} />, href: personal.linkedin, label: "LinkedIn" },
          { icon: <Mail size={18} />, href: `mailto:${personal.email}`, label: "Email" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            title={s.label}
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "#f97316"; e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; e.currentTarget.style.background = "rgba(249,115,22,0.1)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #34d399; }
          50% { opacity: 0.5; box-shadow: 0 0 14px #34d399; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-ring {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; max-width: 240px !important; }
        }
      `}</style>
    </div>
  );
}