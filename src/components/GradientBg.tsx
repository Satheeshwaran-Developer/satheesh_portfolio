import { motion } from "framer-motion";

export default function GradientBg() {
  return (
    <motion.div
      animate={{
        background: ["#0f172a", "#1e293b"],
      }}
      transition={{ duration: 8, repeat: Infinity }}
      className="fixed inset-0 -z-10"
    />
  );
}