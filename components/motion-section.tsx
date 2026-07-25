"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MotionSection({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
