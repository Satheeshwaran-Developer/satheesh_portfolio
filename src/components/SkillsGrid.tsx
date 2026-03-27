import {
  Code,
  Layout,
  Cpu,
  Zap,
  Users,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Code size={20} />,
    title: "Problem Solving",
    desc: "Strong analytical thinking to tackle complex frontend challenges.",
  },
  {
    icon: <Layout size={20} />,
    title: "Responsive Design",
    desc: "Pixel-perfect UI across all screen sizes.",
  },
  {
    icon: <Cpu size={20} />,
    title: "State Management",
    desc: "Redux & API integration expertise.",
  },
  {
    icon: <Zap size={20} />,
    title: "Quick Learner",
    desc: "Adapts quickly to new technologies.",
  },
  {
    icon: <Users size={20} />,
    title: "Team Collaboration",
    desc: "Strong communication & teamwork.",
  },
  {
    icon: <GraduationCap size={20} />,
    title: "Attention to Detail",
    desc: "Focus on UI accuracy and quality.",
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(59,130,246,0.2)",
              }}
              className="group p-6 rounded-2xl 
              bg-black/5 dark:bg-white/5 
              border border-gray-200 dark:border-white/10 
              backdrop-blur transition"
            >
              <div className="w-10 h-10 flex items-center justify-center 
              rounded-lg bg-blue-500/10 text-blue-500 mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}