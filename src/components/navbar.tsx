import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll (shrink effect)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const menu = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <>
      {/* 🔥 SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="
          fixed top-0 left-0 right-0 h-[3px]
          origin-left z-[60]
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          shadow-[0_0_12px_rgba(59,130,246,0.6)]
        "
      />

      {/* 🔥 NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
          fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        {/* 🔥 GLASS BACKGROUND */}
        <div className={`
          absolute inset-0 -z-10
          backdrop-blur-xl
          transition-all duration-300

          ${scrolled
            ? "bg-white/80 dark:bg-[#0b1629]/80 shadow-lg border-b border-gray-200 dark:border-white/10"
            : "bg-white/60 dark:bg-white/5 border-b border-transparent"
          }
        `} />

        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* LOGO */}
          <Logo />

          {/* 🔥 MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium relative">

            {menu.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative group"
              >
                {/* TEXT */}
                <span className={`
                  transition duration-300
                  ${active === item
                    ? "text-blue-500"
                    : "text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
                  }
                `}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                {/* 🔥 UNDERLINE HOVER */}
                <span className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-gradient-to-r from-blue-400 to-purple-500
                  transition-all duration-300
                  group-hover:w-full
                " />

                {/* 🔥 ACTIVE INDICATOR */}
                {/* {active === item && (
                  <motion.span
                    layoutId="navIndicator"
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-full
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    "
                  />
                )} */}
              </button>
            ))}

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
}