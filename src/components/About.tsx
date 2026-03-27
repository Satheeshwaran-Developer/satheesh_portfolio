import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SkillsGrid from "./SkillsGrid";
import aboutLogo from "../assets/aboutlogo.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 
      bg-white dark:bg-[#020617] 
      text-gray-900 dark:text-white overflow-hidden"

    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-[Poppins] font-bold mb-2"
          >
            About <span className="text-5xl" style={{color:"#a855f7"}}>M</span>e
          </motion.h2>

          <div className="w-16 h-1 bg-blue-500 mb-8 rounded-full"></div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Hello! I'm <span className="font-semibold">Satheeshwaran D</span>, 
            a React Developer with strong knowledge of JavaScript, React, HTML, CSS, and SQL.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I build dynamic applications with CRUD operations, APIs, and Redux. Passionate about{" "}
            <span className="text-blue-500">scalable UI solutions</span>.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-10">
            Over <span className="font-semibold">1.3+ years at Gigame</span>, 
            I built dashboards and production apps.
          </p>

          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-500" size={20} />
              <h3 className="font-semibold">EDUCATION</h3>
            </div>

            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl mb-4 border border-gray-200 dark:border-white/10">
              <p className="font-semibold">MBA – HR & Marketing</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Solamalai Engineering College · 2021 - 2023
              </p>
            </div>

            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
              <p className="font-semibold">B.Sc IT</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                American College · 2028 - 2021
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden 
          bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4">

            <img
              src={aboutLogo}
              className="rounded-xl"
            />

            {/* EXPERIENCE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 30px rgba(59,130,246,0.5)",
              }}
              className="absolute bottom-4 left-4 
              bg-white dark:bg-[#0f172a] 
              px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10"
            >
              <p className="text-xl font-bold text-blue-500">1.3+</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Years Experience
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* 🔥 SKILLS GRID */}
      <SkillsGrid />
    </section>
  );
}