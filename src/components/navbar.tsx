import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 Detect scroll (shrink effect)
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    setActive(id);
    setIsOpen(false); // ✅ close sidebar
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
          fixed top-0 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300
          ${scrolled ? "py-3" : "py-4"}
        `}
      >
        {/* 🔥 GLASS BACKGROUND */}
        <div
          className={`
            absolute inset-0 -z-10 backdrop-blur-xl transition-all duration-300
            ${
              scrolled
                ? "bg-white/80 dark:bg-[#0b1629]/80 shadow-lg border-b border-gray-200 dark:border-white/10"
                : "bg-white/60 dark:bg-white/5 border-b border-transparent"
            }
          `}
        />

        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* LOGO */}
          <Logo />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium relative">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative group"
              >
                <span
                  className={`
                    transition duration-300
                    ${
                      active === item
                        ? "text-blue-500"
                        : "text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white"
                    }
                  `}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-blue-400 to-purple-500
                    transition-all duration-300 group-hover:w-full
                  "
                />
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* THEME */}
            <ThemeToggle />

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 📱 MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="
                fixed top-0 right-0 h-full w-[75%] max-w-sm
                bg-white dark:bg-[#0b1629]
                z-50 p-6 shadow-lg
              "
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-6">
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-6 text-lg">
                {menu.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="
                      text-left
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500
                      transition
                    "
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}