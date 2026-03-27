import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

export default function SocialLinks() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/Satheeshwaran-Developer",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/satheeshwaran-d-52a49222a/",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-10">
      <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-6">
        CONNECT WITH ME
      </p>

      <div className="flex gap-6">
        {socials.map((item, i) => (
          <MagneticIcon
            key={i}
            item={item}
            index={i}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}

function MagneticIcon({ item, index, hovered, setHovered }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        reset();
        setHovered(null);
      }}
      onMouseEnter={() => setHovered(index)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150 }}
      whileTap={{ scale: 0.85 }}
      className="relative"
    >

      {/* 🔥 OUTER GLOW (BEHIND ICON) */}
      <motion.div
        animate={{
          opacity: hovered === index ? 0.9 : 0,
          scale: hovered === index ? 1.6 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          blur-xl
          -z-10
        "
      />

      {/* 🔥 ICON CONTAINER */}
      <div
        className="
          w-14 h-14 flex items-center justify-center rounded-full
          relative z-10

          bg-gray-200 text-gray-700
          dark:bg-white/5 dark:text-white

          border border-gray-300 dark:border-white/10

          transition duration-300

          hover:border-transparent
          hover:ring-2 hover:ring-blue-400/60
        "
      >
        <span className="text-xl">
          {item.icon}
        </span>
      </div>

      {/* 🔥 TOOLTIP */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={
          hovered === index
            ? { opacity: 1, y: -10 }
            : { opacity: 0, y: 10 }
        }
        className="
          absolute left-1/2 -translate-x-1/2 bottom-[-35px]
          text-xs px-3 py-1 rounded-md
          bg-black text-white dark:bg-white dark:text-black
          pointer-events-none
        "
      >
        {item.name}
      </motion.div>
    </motion.a>
  );
}