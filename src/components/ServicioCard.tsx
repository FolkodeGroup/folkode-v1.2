"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  items: string[];
  icon?: ReactNode;
  delay?: number;
}

const Card: FC<CardProps> = ({ title, items, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 90,
      }}
      viewport={{ once: true }}
      className="
        w-full min-h-[380px] max-w-[360px]
        bg-[conic-gradient(from_180deg_at_100%_100%,#01454F,#56743C)]
        bg-[bottom_right]
        backdrop-blur-md border border-white/10
        rounded-xl p-8 py-10 shadow-xl hover:scale-[1.02]
        transition-transform duration-300"
        >
      {/* Ícono */}
      <div className="flex justify-center mb-5">
        {icon}
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-center mb-5">
        {title}
      </h3>

      {/* Items */}
      <ul className="space-y-5 text-emerald-100">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-emerald-300 mt-1">›</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Card;
