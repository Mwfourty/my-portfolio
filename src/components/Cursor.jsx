import { useCursor } from "../hooks/useCursor";

export default function Cursor() {
  const { pos, trail, isHovering, isClicking } = useCursor();

  return (
    <>
      {/* Dot cursor */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: isClicking ? "6px" : "8px",
          height: isClicking ? "6px" : "8px",
          background: "#f97316",
          borderRadius: "30%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.1s, height 0.1s",
          boxShadow: "0 0 12px #f97316, 0 0 24px #f97316aa",
          mixBlendMode: "normal",
        }}
      />
      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "44px" : isClicking ? "28px" : "36px",
          height: isHovering ? "44px" : isClicking ? "28px" : "36px",
          border: `1.5px solid ${isHovering ? "#f97316" : "rgba(249,115,22,0.4)"}`,
          borderRadius: "30%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.25s cubic-bezier(0.23,1,0.32,1), height 0.25s cubic-bezier(0.23,1,0.32,1), border-color 0.2s",
          background: isHovering ? "rgba(249,115,22,0.07)" : "transparent",
        }}
      />
    </>
  );
}