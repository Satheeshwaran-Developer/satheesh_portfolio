import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">

      {/* 🌿 LOGO CORE */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        className="relative w-12 h-12 flex items-center justify-center"
      >

        {/* 🔄 ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="
            absolute inset-0 rounded-full
            border
            border-green-500/40 dark:border-green-400/40
          "
        />

        {/* ✨ GLOW (THEME BASED) */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            absolute w-full h-full rounded-full
            bg-green-500/20 dark:bg-green-400/20
            blur-xl
          "
        />

        {/* 🔥 INNER CORE */}
        <div className="
          relative w-8 h-8 rounded-full
          bg-gradient-to-br 
          from-green-500 via-emerald-500 to-teal-500
          dark:from-green-400 dark:via-emerald-500 dark:to-teal-400
          flex items-center justify-center
          shadow-[0_0_12px_rgba(34,197,94,0.5)]
          dark:shadow-[0_0_20px_rgba(34,197,94,0.7)]
        ">
          <span className="text-white text-[12px] font-bold">
            SD
          </span>
        </div>
      </motion.a>

      {/* 🧠 TEXT */}
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="
          text-[18px] font-semibold tracking-tight
          text-gray-900 dark:text-white
          transition duration-300
        "
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        <span className="
          group-hover:text-transparent
          group-hover:bg-clip-text
          group-hover:bg-gradient-to-r
          group-hover:from-green-500
          group-hover:via-emerald-400
          group-hover:to-teal-400
          dark:group-hover:from-green-400
        ">
          Satheesh.dev
        </span>

        {/* ✨ UNDERLINE */}
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          className="
            h-[2px] mt-1
            bg-gradient-to-r
            from-green-500 to-teal-500
            dark:from-green-400 dark:to-teal-400
          "
        />
      </motion.h1>

    </div>
  );
}