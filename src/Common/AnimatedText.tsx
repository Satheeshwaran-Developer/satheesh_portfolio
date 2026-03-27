import { motion } from "framer-motion";

export default function AnimatedText({ text = "", className = "" }: any) {
  const words = text.split(" ");

  return (
    <div className="overflow-hidden">
      {words.map((word: string, i: number) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`inline-block mr-2 ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}