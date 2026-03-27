import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Front End Developer",
      company: "GigameInfo Tech",
      type: "Full-time • Product-based",
      duration: "2025 – Present • 1.3+ Years",
      icon: <Briefcase size={18} />,
      color: "blue",
      points: [
        "Developed dynamic web applications using React.js.",
        "Built reusable components and scalable architecture.",
        "Integrated REST APIs with Redux state management.",
        "Implemented responsive UI for all devices.",
        "Worked with SVN for version control.",
        "Handled debugging and deployment.",
      ],
    },
    {
      role: "Intern",
      company: "TN Startup",
      type: "Internship",
      duration: "2023 • Internship",
      icon: <GraduationCap size={18} />,
      color: "purple",
      points: [
        "Worked with structured data and system workflows during onboarding processes.",
        "Handled and maintained data records with a focus on consistency and usability.",
        "Collaborated with teams to streamline documentation and process execution.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="
        py-24 px-6 
        bg-white text-gray-900 
        dark:bg-[#0b1629] dark:text-white
        transition-colors duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <h2   className="
    text-3xl font-bold
    bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
    text-transparent bg-clip-text
  ">Experience</h2>
          <div className="w-16 h-[3px] bg-blue-500 mt-2 mb-4 rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            My professional journey building real-world web applications.
          </p>
        </div>

        {/* TIMELINE */}
        <div ref={ref} className="relative">

          {/* 🔥 Animated Gradient Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="
              absolute left-6 top-0 w-[2px]
              bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500
              shadow-[0_0_10px_rgba(59,130,246,0.5)]
            "
          />

          <div className="space-y-20">

            {experiences.map((exp, i) => {
              const itemRef = useRef(null);
              const isInView = useInView(itemRef, { margin: "-100px" });

              return (
                <motion.div
                  ref={itemRef}
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex gap-6 items-start"
                >

                  {/* 🔥 GLOW NODE */}
                  <div className="relative">
                    <div
                      className={`
                        w-12 h-12 flex items-center justify-center rounded-full
                        border z-10
                        ${exp.color === "blue"
                          ? "border-blue-400 text-blue-400"
                          : "border-purple-400 text-purple-400"}
                        bg-white dark:bg-[#0b1629]
                      `}
                    >
                      {exp.icon}
                    </div>

                    {/* Glow pulse */}
                    {isInView && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.6, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`
                          absolute inset-0 rounded-full blur-md
                          ${exp.color === "blue"
                            ? "bg-blue-400/30"
                            : "bg-purple-400/30"}
                        `}
                      />
                    )}
                  </div>

                  {/* 🔥 CARD */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="
                      w-full p-6 rounded-2xl relative overflow-hidden

                      bg-gray-100 border border-gray-200
                      dark:bg-white/5 dark:border-white/10

                      backdrop-blur-xl
                      transition duration-300
                    "
                  >

                    {/* Gradient Glow */}
                    <div className="
                      absolute inset-0 opacity-0 hover:opacity-20
                      bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                      blur-xl transition duration-500
                    " />

                    {/* TOP */}
                    <div className="flex justify-between flex-wrap gap-3 mb-3 relative z-10">

                     <div>
  {/* 🚀 ROLE */}
  <motion.h3
    className="
      text-lg font-semibold
     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
      dark:from-blue-500 via-purple-500 to-pink-500 dark:from-blue-500 via-purple-500 to-pink-500 dark:to-blue-500 via-purple-500
      bg-clip-text text-transparent
    "
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    {exp.role}
  </motion.h3>

  {/* 🏢 COMPANY + TYPE */}
  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
    <span>{exp.company}</span>

    {/* 🔥 TYPE BADGE */}
    <motion.span
      className="
        px-2 py-0.5 rounded-full text-xs
        bg-gray-200 dark:bg-white/10
        text-gray-700 dark:text-gray-300
        border border-gray-300 dark:border-white/20
      "
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          "0 0 0px rgba(34,197,94,0)",
          "0 0 8px rgba(34,197,94,0.4)",
          "0 0 0px rgba(34,197,94,0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      whileHover={{ scale: 1.15 }}
    >
      {exp.type}
    </motion.span>
  </div>
</div>

                      {/* DATE BADGE */}
                      <div className="
                        flex items-center gap-2 text-sm
                        px-3 py-1 rounded-full
                        bg-blue-500/10 text-blue-500
                      ">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>

                    </div>

                    {/* POINTS */}
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                  </motion.div>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}