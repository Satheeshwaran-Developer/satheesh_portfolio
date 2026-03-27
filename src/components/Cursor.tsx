import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [color, setColor] = useState("blue");

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const down = () => setClick(true);
    const up = () => setClick(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    // 🔥 HOVER DETECTION
    const elements = document.querySelectorAll("a, button");

    const handleEnter = () => setHover(true);
    const handleLeave = () => setHover(false);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // 🔥 SECTION COLOR CHANGE
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            if (id === "home") setColor("blue");
            else if (id === "skills") setColor("purple");
            else if (id === "projects") setColor("cyan");
            else if (id === "contact") setColor("pink");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // 🎨 COLOR MAP
  const colorMap: any = {
    blue: "from-blue-400 to-blue-600",
    purple: "from-purple-400 to-purple-600",
    cyan: "from-cyan-400 to-cyan-600",
    pink: "from-pink-400 to-pink-600",
  };

  return (
    <>
      {/* 🔦 SPOTLIGHT */}
      <motion.div
        animate={{
          x: pos.x - 100,
          y: pos.y - 100,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className={`
          fixed z-[9997]
          w-48 h-48 rounded-full
          pointer-events-none
          opacity-20 blur-2xl
          bg-gradient-to-r ${colorMap[color]}
        `}
      />

      {/* 🔥 GLOW TRAIL */}
      <motion.div
        animate={{
          x: pos.x - 40,
          y: pos.y - 40,
          scale: hover ? 1.8 : 1.2,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className={`
          fixed z-[9998]
          w-20 h-20 rounded-full
          pointer-events-none
          opacity-20 blur-xl
          bg-gradient-to-r ${colorMap[color]}
        `}
      />

      {/* 🔥 OUTER RING */}
      <motion.div
        animate={{
          x: pos.x - 15,
          y: pos.y - 15,
          scale: click ? 0.7 : hover ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="
          fixed z-[9999]
          w-8 h-8 rounded-full
          border
          border-gray-800 dark:border-white/60
          shadow-[0_0_8px_rgba(0,0,0,0.2)]
          dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]
          pointer-events-none
        "
      />

      {/* 🔥 INNER DOT */}
      <motion.div
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          scale: click ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="
          fixed z-[9999]
          w-2 h-2 rounded-full
          bg-gray-900 dark:bg-white
          pointer-events-none
        "
      />

      {/* 🔥 CLICK RIPPLE */}
      {click && (
        <motion.div
          initial={{
            x: pos.x - 20,
            y: pos.y - 20,
            scale: 0,
            opacity: 0.6,
          }}
          animate={{
            scale: 2,
            opacity: 0,
          }}
          transition={{ duration: 0.4 }}
          className="
            fixed z-[9999]
            w-10 h-10 rounded-full
            border
            border-gray-800 dark:border-white
            pointer-events-none
          "
        />
      )}
    </>
  );
}