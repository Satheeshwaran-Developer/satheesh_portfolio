import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <footer
      className="
        relative overflow-hidden
        px-6 py-20 
        bg-white text-gray-900
        dark:bg-[#0b1629] dark:text-white
        transition-colors duration-500
      "
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🔥 GRID WITH STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-12"
        >

          {/* LEFT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -60 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="
                  w-10 h-10 flex items-center justify-center rounded-full
                  bg-gradient-to-r from-blue-500 to-purple-500
                "
              >
                <span className="text-white text-sm">&lt;/&gt;</span>
              </motion.div>

              <h2 className="font-semibold text-lg">
                Satheesh.dev
              </h2>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
             Front End Developer crafting modern, scalable, and exceptional web experiences from Madurai, Tamil Nadu, India.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>

            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <motion.a
                    whileHover={{ x: 6 }}
                    href={`#${link.toLowerCase()}`}
                    className="
                      group relative inline-block text-sm font-medium
                      text-gray-500 dark:text-gray-400
                      transition-all duration-300
                    "
                  >
                    <span
                      className="
                        transition-all duration-300
                        group-hover:text-transparent
                        group-hover:bg-gradient-to-r
                        group-hover:from-blue-500
                        group-hover:via-purple-500
                        group-hover:to-pink-500
                        group-hover:bg-clip-text
                      "
                    >
                      {link}
                    </span>

                    <span
                      className="
                        absolute left-0 -bottom-1 h-[2px] w-0
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-semibold mb-4">CONNECT</h3>

            <div className="flex flex-wrap gap-3">

              {[
                { icon: <FaGithub />, label: "GitHub", link: "https://github.com/Satheeshwaran-Developer" },
                { icon: <FaLinkedinIn />, label: "LinkedIn", link: "https://www.linkedin.com/in/satheeshwaran-d-52a49222a/" },
                { icon: <FaInstagram />, label: "Instagram", link: "https://www.instagram.com/sat_heesh.official?igsh=YzF2amFscW1lbm1v" },
                { icon: <Mail size={16} />, label: "Email", link: "mailto:satheeshwaran95@gmail.com" },
                { icon: <Phone size={16} />, label: "Phone", link: "tel:+919080161772" },
              ].map((item, i) =>  (
                <motion.a
                  key={i}
                   href={item.label === "Email"   ? "https://mail.google.com/mail/?view=cm&fs=1&to=satheeshwaran95@gmail.com": item.link }
                  target={item.label === "Email" ? "_self" : "_blank"}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.9 }}  
                  className="
                    group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm
                    bg-white/10 dark:bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    overflow-hidden
                  "
                >
                  <span className="
                    absolute inset-0
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    opacity-0 group-hover:opacity-20
                    transition
                  " />

                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                </motion.a>
              
              ))}

            </div>
          </motion.div>

        </motion.div>

        {/* 🔥 LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="origin-left border-t border-gray-200 dark:border-white/10 my-12"
        />

        {/* 🔥 BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >

          <p className="text-sm text-gray-500 dark:text-gray-400">
               Designed & Developed by Satheeshwaran D . Madurai India . {new Date().getFullYear()}.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="
              w-12 h-12 flex items-center justify-center rounded-full
              bg-gradient-to-r from-blue-500 to-purple-500
              text-white shadow-lg
            "
          >
            <ArrowUp size={18} />
          </motion.button>

        </motion.div>

      </div>
    </footer>
  );
}