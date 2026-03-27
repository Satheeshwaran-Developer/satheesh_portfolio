import { motion } from "framer-motion";
import { MapPin, Download,Rocket } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import AnimatedText from "../Common/AnimatedText";
import TypewriterText from "../Common/TypeWriter";
import Resume from"../assets/Satheeshwaran D - Junior Developer - Resume .pdf (3).pdf"

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export default function Hero() {
  const [downloading, setDownloading] = useState(false);
  const [scanY, setScanY] = useState(0);
  const [launching, setLaunching] = useState(false);
 console.log(downloading)

  useEffect(() => {
    let pos = 0;
    const interval = setInterval(() => {
      pos += 3;
      if (pos > window.innerHeight) pos = 0;
      setScanY(pos);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const bgIcons = useMemo(() => {
    const icons = [
      SiReact,
      SiJavascript,
      SiHtml5,
      FaCss3Alt,
      SiRedux,
      SiTypescript,
      SiBootstrap,
    ];

    return Array.from({ length: 18 }).map((_, i) => ({
      Icon: icons[i % icons.length],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 18 + Math.random() * 30,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
    }));
  }, []);

  const techNodes = [
    { x: 250, y: 150, icon: <SiReact /> },
    { x: 180, y: 220, icon: <SiJavascript /> },
    { x: 320, y: 220, icon: <SiHtml5 /> },
    { x: 170, y: 280, icon: <FaCss3Alt /> },
    { x: 330, y: 280, icon: <SiRedux /> },
    { x: 200, y: 340, icon: <SiTypescript /> },
    { x: 300, y: 340, icon: <SiBootstrap /> },
  ];

  return (
   <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
>
  {/* 🌌 BACKGROUND */}
  <div className="absolute inset-0 -z-10 bg-gray-100 dark:bg-[#020617]" />

  {/* 💡 BACKGROUND ICONS */}
  <div className="absolute inset-0 pointer-events-none">
    {bgIcons.map((item, i) => {
      const Icon = item.Icon;
      return (
        <motion.div
          key={i}
          className="absolute text-green-600/20 dark:text-green-400/20"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.size,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          <Icon />
        </motion.div>
      );
    })}
  </div>

  {/* 🌿 RIGHT SIDE LEAF */}
  <motion.div
    className="
      absolute 
      right-0 sm:right-[3%] lg:right-[6%] 
      top-1/2 -translate-y-1/2 
      pointer-events-none 
      scale-[0.6] sm:scale-[0.8] lg:scale-100
    "
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 0.3, x: 0 }}
    transition={{ duration: 1 }}
  >
    <svg viewBox="0 0 500 500" className="w-[320px] sm:w-[420px] lg:w-[520px] h-auto">

      <motion.path
        d="M250 80 C 120 200, 120 350, 250 420 C 380 350, 380 200, 250 80 Z"
        stroke="rgba(34,197,94,0.4)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.path
        d="M250 100 L250 400"
        className="stroke-green-600 dark:stroke-green-400"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />

      {[
        "M250 160 L190 210",
        "M250 160 L310 210",
        "M250 220 L180 270",
        "M250 220 L320 270",
        "M250 280 L200 330",
        "M250 280 L300 330",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          className="stroke-green-600 dark:stroke-green-400"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.8 + i * 0.2,
            duration: 1.2,
          }}
        />
      ))}
    </svg>

    {/* ⚡ TECH NODES */}
    {techNodes.map((node, i) => (
      <motion.div
        key={i}
        className="absolute text-green-600 dark:text-green-400 text-sm sm:text-base lg:text-lg"
        style={{
          left: `${node.x}px`,
          top: `${node.y}px`,
          opacity: scanY > node.y ? 1 : 0,
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      >
        {node.icon}
      </motion.div>
    ))}
  </motion.div>

  {/* 🔍 SCAN LINE */}
  <motion.div
    className="absolute w-full h-[2px] bg-green-600/30 dark:bg-green-400/30 blur-sm"
    style={{ top: scanY }}
  />

  {/* 🌟 GLOW */}
  <div className="absolute right-[0%] sm:right-[4%] lg:right-[6%] w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-green-600/10 dark:bg-green-400/10 blur-[120px] sm:blur-[150px] lg:blur-[180px] rounded-full" />

  {/* 🔥 CONTENT */}
  <div className="relative z-10 max-w-3xl text-center">

    <motion.h1 className="text-3xl sm:text-5xl lg:text-[85px] leading-tight">

      <motion.span className="block text-gray-700 dark:text-gray-400 tracking-[2px]">
        Hi, I'm
      </motion.span>

      <motion.span
        className="
          block mt-3 font-extrabold
          bg-gradient-to-r 
          from-green-600 via-emerald-500 to-teal-500
          dark:from-green-400 dark:via-emerald-400 dark:to-teal-400
          text-transparent bg-clip-text
        "
      >
        Satheeshwaran D
      </motion.span>

      <motion.p className="mt-4 sm:mt-6 text-base sm:text-lg text-green-600 dark:text-green-300">
        <TypewriterText
          texts={["React Developer", "Frontend Engineer", "UI Specialist"]}
        />
      </motion.p>

    </motion.h1>

    <motion.p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
      <AnimatedText texts={["React Developer"]} /> crafting modern UI experiences.
    </motion.p>

    <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-500">
      <MapPin size={14} />
      <span>Madurai, India</span>
    </div>

    {/* 🔘 BUTTONS */}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center">

      <a className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-green-600 dark:bg-green-500 text-white" href="#projects">
        View Projects →
      </a>

      <a className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-white"href="#contact">
        Contact  Me
      </a>

    <div className="relative">

  {/* 🚀 ROCKET */}
  {launching && (
    <motion.div
      initial={{ x: 0, y: 0, scale: 0.8, opacity: 1 }}
      animate={{
        x: 300,
        y: 200,
        scale: 0.4,
        opacity: 0,
        rotate: 25,
      }}
      transition={{ duration: 1 }}
      className="absolute left-1/2 top-1/2 text-green-500 z-50"
    >
      <Rocket size={28} />
    </motion.div>
  )}

  {/* ✨ TRAIL (PUT IT HERE — SAME LEVEL AS ROCKET) */}
  {launching && (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0.6 }}
      animate={{ x: 280, y: 180, opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute left-1/2 top-1/2 w-16 h-1 bg-green-400 blur-md"
    />
  )}

  {/* 📥 BUTTON */}
  <a
    href={Resume}
    download
    onClick={() => {
      setLaunching(true);
      setDownloading(true);

      setTimeout(() => {
        setLaunching(false);
        setDownloading(false);
      }, 1200);
    }}
    className="px-5 py-3 rounded-lg border border-green-600 text-green-600 flex items-center gap-2"
  >
    {launching ? <Rocket size={16} /> : <Download size={16} />}
    {launching ? "Launching...🚀" : "Download Resume"}
  </a>

</div>

    </div>
  </div>
</section>
  );
}