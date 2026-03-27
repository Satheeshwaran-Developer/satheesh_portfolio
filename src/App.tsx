import { Route } from "wouter";
import { useEffect, useState } from "react";
import Loader from "../src/Common/Loader";
import Home from "./pages/Home";

import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         <Route path="/" component={Home} />;
        </motion.div>
      )}
    </AnimatePresence>
  );
}