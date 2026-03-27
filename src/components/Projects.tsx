import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { CalendarCheck, BarChart3, Clock } from "lucide-react";
import { SiBootstrap, SiHtml5, SiJavascript, SiReact, SiRedux } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export default function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null);

  // 🔥 ICON + REALISTIC ANIMATION
  const getProjectIcon = (title: string) => {
    if (title.includes("Attendance")) {
      return (
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 border-2 border-green-400 rounded-full"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CalendarCheck size={48} className="text-green-400" />
          </motion.div>
          <motion.div
            className="absolute w-full h-[2px] bg-green-400"
            animate={{ y: [-30, 30] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
    }

    if (title.includes("Slack")) {
      return (
        <div className="flex items-end gap-1">
          {[12, 20, 16].map((h, i) => (
            <motion.div
              key={i}
              className="w-2 bg-blue-400 rounded"
              animate={{ height: [5, h, 10] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
          <BarChart3 size={32} className="text-blue-400 ml-2" />
        </div>
      );
    }

    if (title.includes("Session")) {
      return (
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 border border-purple-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Clock size={48} className="text-purple-400" />
          </motion.div>
        </div>
      );
    }

    return null;
  };

  const projects = [
    {
      title: "Attendance Management System",
      desc: "Track attendance with validation and reporting.",
      points: ["Real-time tracking", "Location validation", "Leave workflow", "Reports"],
      role: ["React Class Components", "Redux state", "API integration"],
      tag: "React",
      tech: [   { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
          { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
          { name: "React Bootstrap", icon: <SiBootstrap className="text-pink-400" /> },],
    },
    {
      title: "Slack Report Management",
      desc: "Manage candidate reports efficiently.",
      points: ["Candidate data", "File tracking", "Sorting", "Excel export"],
      role: ["Dynamic UI", "API handling", "Filtering"],
      tag: "Frontend",
      tech:  [{ name: "React.js", icon: <SiReact className="text-cyan-400" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
          { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
          { name: "React Bootstrap", icon: <SiBootstrap className="text-pink-400" /> },],
    },
    {
      title: "Session Scheduling",
      desc: "Manage sessions efficiently.",
      points: ["Booking system", "Instructor availability", "Notifications"],
      role: ["UI development", "State handling", "API integration"],
      tag: "React",
      tech:  [{ name: "React.js", icon: <SiReact className="text-cyan-400" /> },
          { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
          { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
          { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
          { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
          { name: "React Bootstrap", icon: <SiBootstrap className="text-pink-400" /> },],
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-[#0b1629] transition"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2
  className="
    text-3xl font-bold
    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
    text-transparent bg-clip-text
  "
>
  Featured Projects
</h2>
          <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-4 rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Front-end focused solutions with an understanding of backend integration, built through real-world collaboration with backend teams.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Tilt glareEnable glareMaxOpacity={0.15} scale={1.01}>
                <div
                  onClick={() => setActive(active === i ? null : i)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >

                  {/* 🔥 PREMIUM BACKGROUND */}
                  <div className="relative h-52 flex items-center justify-center overflow-hidden">

                    {/* BASE */}
                    <div className="absolute inset-0 bg-[#020617]" />

                    {/* GLOW */}
                    <motion.div
                      className="absolute w-[350px] h-[350px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-20 rounded-full blur-[120px]"
                      animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
                      transition={{ duration: 10, repeat: Infinity }}
                    />

                    {/* SECOND GLOW */}
                    <motion.div
                      className="absolute w-[250px] h-[250px] bg-cyan-400 opacity-20 rounded-full blur-[100px]"
                      animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* LIGHT SWEEP */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* ICON */}
                    <div className="relative z-10">
                      {getProjectIcon(project.title)}
                    </div>

                    {/* TAG */}
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                      {project.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="bg-gray-100 dark:bg-[#0f172a]/80 border border-gray-200 dark:border-white/10 p-6">

                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {project.desc}
                    </p>

                    <AnimatePresence>
                      {active === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3 mb-4"
                        >
                          <div>
                            <h4 className="text-xs text-purple-400 mb-1">Key Features</h4>
                            <ul className="text-xs text-gray-400 space-y-1">
                              {project.points.map((p, idx) => (
                                <li key={idx}>• {p}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs text-blue-400 mb-1">My Role</h4>
                            <ul className="text-xs text-gray-400 space-y-1">
                              {project.role.map((r, idx) => (
                                <li key={idx}>• {r}</li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                      <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((tech, i) => (
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

                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}