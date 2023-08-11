import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({
  text,
  visible,
  children,
}: {
  text: string;
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div className="flex absolute bottom-0 ml-auto mr-auto w-screen justify-center">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: -50, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            className="rounded-lg bg-slate-200 px-5 py-3 flex"
          >
            {text}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
