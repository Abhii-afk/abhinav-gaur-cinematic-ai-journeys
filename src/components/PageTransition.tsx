import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.9, ease: [0.7, 0, 0.15, 1] }}
      className="relative"
    >
      {children}
    </motion.main>
  );
}

/** Cinematic curtain that wipes in on first mount. */
export function CinematicIntro() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 1.4, ease: [0.7, 0, 0.15, 1], delay: 0.1 }}
      style={{ transformOrigin: "top" }}
      className="pointer-events-none fixed inset-0 z-[100] bg-background"
    >
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        <span className="text-eyebrow opacity-70">Loading the studio</span>
      </div>
    </motion.div>
  );
}
