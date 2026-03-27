import { motion } from "framer-motion";

export default function ContactHeading() {
  const text = "Contact Me".split(" ");

  return (
    <h2 className="text-4xl font-bold text-center">
      {text.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            inline-block mr-2

            bg-gradient-to-r 
            from-blue-500 
            via-purple-500 
            to-pink-500

            dark:from-blue-400 
            dark:via-purple-500 
            dark:to-pink-500

            bg-[length:200%_200%]
            animate-[gradientMove_4s_ease_infinite]

            text-transparent 
            bg-clip-text
          "
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}