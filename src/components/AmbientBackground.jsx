export default function AmbientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Deep base */}
      <div style={{ position: "absolute", inset: 0, background: "#050508" }} />

      {/* Noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.35,
        }}
      />

      {/* Orange orb - top left */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 70%)",
          animation: "float1 8s ease-in-out infinite",
        }}
      />

      {/* Purple orb - top right */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          right: "-15%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(167,139,250,0.16) 0%, transparent 70%)",
          animation: "float2 11s ease-in-out infinite",
        }}
      />

      {/* Teal orb - bottom center */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "30%",
          width: "700px",
          height: "500px",
          background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
          animation: "float3 14s ease-in-out infinite",
        }}
      />

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.97); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-35px, 25px) scale(1.04); }
          70% { transform: translate(15px, -30px) scale(0.98); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, -35px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}