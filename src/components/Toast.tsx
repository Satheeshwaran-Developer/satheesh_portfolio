import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function Toast({ show, type, message }: any) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="
            fixed top-6 left-1/2 -translate-x-1/2 z-50
            px-6 py-4 rounded-xl flex items-center gap-3

            bg-white text-black
            dark:bg-[#0f172a] dark:text-white

            border border-gray-200 dark:border-white/10
            shadow-xl
          "
        >
          {/* ICON */}
          {type === "success" ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <XCircle className="text-red-500" />
          )}

          {/* MESSAGE */}
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}