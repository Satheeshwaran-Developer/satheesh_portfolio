import { motion } from "framer-motion";
export function SkillBar({ item, isPurple = false }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2 text-gray-300">
        <span>{item.name}</span>
        <span>{item.value}%</span>
      </div>

      <div className="w-full h-[6px] bg-white/10 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.value}%` }}
          transition={{ duration: 1.5 }}
          className={`h-full rounded-full ${
            isPurple
              ? "bg-gradient-to-r from-purple-500 to-pink-500"
              : "bg-gradient-to-r from-cyan-400 to-blue-500"
          }`}
        />

      </div>
    </div>
  );
}