import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiTypescript,
  SiBootstrap,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { Zap } from "lucide-react";

export default function PremiumLoader() {
  const [exit, setExit] = useState(false);

  // ⏱ Proper cinematic timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 8000); // enough time for full animation

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { icon: <SiReact className="text-cyan-400"/>, name: "React" },
    { icon: <SiJavascript className="text-yellow-400"/>, name: "JavaScript" },
    { icon: <SiHtml5 className="text-orange-500"/>, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-400"/>, name: "CSS" },
    { icon: <SiRedux className="text-purple-400"/>, name: "Redux" },
    { icon: <SiTypescript className="text-blue-500"/>, name: "TypeScript" },
    { icon: <SiBootstrap className="text-pink-400"/>, name: "Bootstrap" },
    { icon: <SiMysql className="text-gray-300"/>, name: "MySQL" },
     { name: "N8N", icon: <Zap className="text-yellow-400" /> },
    { icon: <SiGit className="text-orange-400"/>, name: "Git" },
  ];

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020617]"
        >
          {/* 🌌 AURORA BACKGROUND */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, #0ea5e9 0%, #020617 60%)",
                "radial-gradient(circle at 80% 30%, #a855f7 0%, #020617 60%)",
                "radial-gradient(circle at 50% 80%, #22c55e 0%, #020617 60%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* ✨ FLOATING PARTICLES */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -400],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
            />
          ))}

          {/* 🧠 CENTER CORE */}
          {/* ⚡ LIGHTNING CORE */}
<motion.div
  initial={{ scale: 0 }}
  animate={{
    scale: exit ? 6 : [1, 1.15, 1],
  }}
  transition={{
    scale: { duration: 1 },
  }}
  className="relative w-28 h-28 flex items-center justify-center"
>
  {/* ⚡ OUTER ELECTRIC RING */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    className="absolute w-full h-full rounded-full border border-cyan-400/40"
  />

  {/* ⚡ GLOW RING */}
  <motion.div
    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute w-full h-full rounded-full bg-cyan-400/20 blur-xl"
  />

  {/* ⚡ INNER CORE */}
  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.9)]">
    
    {/* ⚡ LIGHTNING SVG */}
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </motion.svg>
  </div>
</motion.div>

          {/* 💠 SKILL CARDS */}
          {skills.map((skill, i) => {
            const angle = (i / skills.length) * 2 * Math.PI;
            const radius = 180;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: Math.cos(angle) * radius,
                  y: Math.sin(angle) * radius,
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1, // stagger entry
                }}
                className="absolute flex flex-col items-center justify-center
                w-20 h-20 rounded-xl
                bg-white/10 backdrop-blur-lg
                border border-white/10
                text-white text-lg shadow-lg"
              >
                {skill.icon}
                <span className="text-[10px] mt-1 opacity-70">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}

          {/* 🧾 TEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-16 text-gray-300 text-sm tracking-widest"
          >
            Crafting Experience...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}