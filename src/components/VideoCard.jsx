import React from "react";
import { motion } from "framer-motion";

export default function VideoCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="video-card group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.poster}
          alt={project.category}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.article>
  );
}
