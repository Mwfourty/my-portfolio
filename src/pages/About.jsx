import { useState, useEffect } from "react";
import { Download, GraduationCap, User, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { personal, education } from "../data/portfolio";
import cv from "../assets/images/Musawenkosi Mndau CV.pdf";

export default function About() {
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
          <User size={16} color="#f97316" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.15em", color: "#f97316", textTransform: "uppercase" }}>
            The Person Behind the Code
          </span>
        </div>
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "white",
            margin: 0,
          }}
        >
          About{" "}
          <span style={{ background: "linear-gradient(135deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Me
          </span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "1.5rem",
        }}
        className="about-grid"
      >
        {/* Bio card */}
        <GlassCard
          hoverGlow="#f97316"
          style={{
            padding: "2rem",
            gridColumn: "1 / 2",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.2rem" }}>
            <User size={14} color="#f97316" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", color: "#f97316", textTransform: "uppercase" }}>
              Profile
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            {personal.summary}
          </p>
        </GlassCard>

        {/* Contact card */}
        <GlassCard
          hoverGlow="#a78bfa"
          style={{
            padding: "2rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
            <Mail size={14} color="#a78bfa" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", color: "#a78bfa", textTransform: "uppercase" }}>
              Contact
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <Mail size={14} />, value: personal.email, href: `mailto:${personal.email}` },
              { icon: <Phone size={14} />, value: personal.phone, href: `tel:${personal.phone}` },
              { icon: <MapPin size={14} />, value: personal.location, href: null },
              { icon: <Github size={14} />, value: "github.com/Mwfourty", href: personal.github },
              { icon: <Linkedin size={14} />, value: "LinkedIn Profile", href: personal.linkedin },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#a78bfa", flexShrink: 0 }}>{c.icon}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-cursor-hover
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.65)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)" }}>
                    {c.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Education */}
      <GlassCard
        hoverGlow="#34d399"
        style={{
          padding: "2rem",
          marginBottom: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease 0.3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
          <GraduationCap size={14} color="#34d399" />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.14em", color: "#34d399", textTransform: "uppercase" }}>
            Education
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="edu-inner-grid"
        >
          <div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "white",
                margin: "0 0 6px",
              }}
            >
              {education.degree}
            </h3>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: "#34d399", margin: "0 0 4px" }}>
              {education.institution}
            </p>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.74rem", color: "rgba(255,255,255,0.4)", margin: "0 0 1.2rem" }}>
              {education.location}
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#34d399" }}>{education.average}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Avg Grade</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#34d399" }}>{education.credits}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Credits</div>
              </div>
            </div>
          </div>

          {/* Top results */}
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Top Results
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {education.topResults.map((r) => (
                <div key={r.subject}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>{r.subject}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "#34d399", fontWeight: 700 }}>{r.grade}%</span>
                  </div>
                  <div style={{ height: "3px", background: "rgba(255,255,255,0.07)", borderRadius: "3px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${r.grade}%`,
                        background: `linear-gradient(90deg, #34d399, #34d39988)`,
                        borderRadius: "3px",
                        transition: "width 1.2s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Download CV */}
      <GlassCard
        hoverGlow="#fbbf24"
        style={{
          padding: "2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease 0.4s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.3rem",
                fontWeight: 800,
                color: "white",
                margin: "0 0 6px",
              }}
            >
              Download My CV
            </h3>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>
              Full CV with experience, skills, and references available on request.
            </p>
          </div>
          <a
            href={cv}
            download="Musawenkosi_Mndau_CV.pdf"
            data-cursor-hover
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 28px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #fbbf24, #f97316)",
              color: "#0a0a14",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.78rem",
              fontWeight: 700,
              textDecoration: "none",
              cursor: "none",
              letterSpacing: "0.06em",
              flexShrink: 0,
              boxShadow: "0 0 30px rgba(251,191,36,0.35)",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 45px rgba(251,191,36,0.55)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(251,191,36,0.35)"}
          >
            <Download size={15} /> Download CV
          </a>
        </div>
      </GlassCard>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .edu-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}