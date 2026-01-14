"use client";

import { ReactNode, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "none";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const dist = 50;

  const hidden = useMemo(() => {
    if (direction === "left") return { opacity: 0, x: -dist, y: 0 };
    if (direction === "right") return { opacity: 0, x: dist, y: 0 };
    if (direction === "down") return { opacity: 0, x: 0, y: -dist };
    if (direction === "up") return { opacity: 0, x: 0, y: dist };
    return { opacity: 0, x: 0, y: 0 };
  }, [direction]);

  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      animate={controls}
      // كل مرة يدخل فيها الجزء للـ viewport
      onViewportEnter={() => {
        controls.start(visible);
      }}
      // لما يطلع من الـ viewport نخليه يرجع مخفي عشان يعيد الأنيميشن لما ترجعله
      onViewportLeave={() => {
        controls.set(hidden);
      }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
