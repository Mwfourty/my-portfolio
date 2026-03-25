import { useEffect, useState } from "react";

export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let animFrame;
    let currentTrail = { x: -100, y: -100 };
    let currentPos = { x: -100, y: -100 };

    const onMove = (e) => {
      currentPos = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      currentTrail.x = lerp(currentTrail.x, currentPos.x, 0.12);
      currentTrail.y = lerp(currentTrail.y, currentPos.y, 0.12);
      setTrail({ x: currentTrail.x, y: currentTrail.y });
      animFrame = requestAnimationFrame(animate);
    };

    const checkHover = (e) => {
      const el = e.target;
      const hoverable = el.closest("a, button, [data-cursor-hover]");
      setIsHovering(!!hoverable);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return { pos, trail, isHovering, isClicking };
}