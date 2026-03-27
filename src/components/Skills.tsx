import { motion } from "framer-motion";
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
import { TbApi } from "react-icons/tb";
import { Bug, Monitor, Zap } from "lucide-react";
import { FaCss3Alt } from "react-icons/fa";
import Section from "./Section";
import StatCard from "./StatCard";


export default function SkillsSection() {

  const techStack = [
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React Bootstrap", icon: <SiBootstrap className="text-pink-400" /> },
    { name: "SQL", icon: <SiMysql className="text-gray-300" /> },
    { name: "Git", icon: <SiGit className="text-orange-400" /> },
    { name: "REST API", icon: <TbApi className="text-blue-400" /> },
    { name: "Responsive Design", icon: <Monitor className="text-cyan-400" /> },
    { name: "Debugging", icon: <Bug className="text-green-400" /> },
    { name: "N8N", icon: <Zap className="text-yellow-400" /> },
  ];

  const frontend = [
    { name: "React.js", value: 90, icon: <SiReact className="text-cyan-400"/> },
    { name: "JavaScript", value: 88, icon: <SiJavascript className="text-yellow-400"/> },
    { name: "HTML5", value: 95, icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", value: 90, icon: <FaCss3Alt className="text-blue-400"/> },
    { name: "Redux", value: 85, icon: <SiRedux className="text-purple-400"/> },
  ];

  const database = [
    { name: "SQL", value: 75, icon: <SiMysql className="text-gray-300"/> },
  ];

  const tools = [
    { name: "Git", value: 82, icon: <SiGit className="text-orange-400"/> },
    { name: "REST API", value: 88, icon: <TbApi className="text-blue-400"/> },
    { name: "Responsive Design", value: 90, icon: <Monitor className="text-cyan-400"/> },
    { name: "Debugging", value: 85, icon: <Bug className="text-green-400" /> },
    { name: "N8N", value: 65, icon: <Zap className="text-yellow-400"/> },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-[#0b1629] transition"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2   className="
    text-3xl font-bold
    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
    text-transparent bg-clip-text
  ">Technical Skills</h2>
          <div className="w-16 h-[3px] bg-blue-500 mb-6 rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md">
            A well-rounded front-end skill set with solid backend awareness.
          </p>

          {/* SAME STRUCTURE */}
          <Section title="Frontend" data={frontend} />
          <Section title="Database" data={database} />
          <Section title="Tools & Other" data={tools} />
        </motion.div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          style={{ marginTop: "16vh" }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="mb-6 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3 mb-10">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm
                  bg-gray-100 text-gray-700 border border-gray-200
                  dark:bg-white/5 dark:text-gray-300 dark:border-white/10
                  hover:bg-blue-500/10 hover:border-blue-400
                  hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                  transition
                "
              >
                {tech.icon}
                {tech.name}
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard value="10" suffix="+" label="Technologies" />
            <StatCard value="1.3" suffix="+y" label="Experience" />
            <StatCard value="3" suffix="+" label="Projects" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}