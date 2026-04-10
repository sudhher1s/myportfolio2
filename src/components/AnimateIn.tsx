import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateIn({ children, className = "", delay = 0, direction = "up" }: AnimateInProps) {
  const initial =
    direction === "up" ? { opacity: 0, y: 30 }
    : direction === "left" ? { opacity: 0, x: -30 }
    : direction === "right" ? { opacity: 0, x: 30 }
    : { opacity: 0 };

  const animate = { opacity: 1, y: 0, x: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
