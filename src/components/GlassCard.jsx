import { useState } from "react";

export default function GlassCard({
  children,
  style = {},
  hoverGlow = "#f97316",
  className = "",
  onClick,
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      className={className}
      data-cursor-hover
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMouseMove}
      style={{
        position: "relative",
        background: hovered
          ? "rgba(255,255,255,0.075)"
          : "rgba(255,255,255,0.045)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered
          ? `1px solid rgba(249,115,22,0.35)`
          : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "background 0.3s, border 0.3s, transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${hoverGlow}22, inset 0 1px 0 rgba(255,255,255,0.1)`
          : "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)",
        cursor: onClick ? "none" : "default",
        ...style,
      }}
    >
      {/* Radial mouse-follow highlight */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${hoverGlow}18 0%, transparent 60%)`,
            zIndex: 0,
            borderRadius: "16px",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}