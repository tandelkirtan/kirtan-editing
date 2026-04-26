import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Instagram } from "lucide-react";

export default function VideoCard({ project, index = 0 }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onEnter = () => {
    if (!videoRef.current) return;
    videoRef.current.play().catch(() => {});
    setPlaying(true);
  };
  const onLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="video-card group"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <video
          ref={videoRef}
          src={project.src}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070817] via-[#070817]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-grotesk font-semibold bg-[#070817]/70 border border-white/10 text-white/80">
            {project.category}
          </span>
        </div>

        {!playing && (
          <div className="absolute inset-0 grid place-items-center">
            <span className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center group-hover:bg-[#FF2D95] transition-colors">
              <Play size={20} className="text-white ml-0.5" fill="currentColor" />
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl md:text-2xl tracking-wide truncate">{project.title}</h3>
            <div className="text-xs text-white/60 truncate">{project.client}</div>
          </div>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 w-10 h-10 grid place-items-center rounded-full bg-white text-[#070817] hover:bg-[#FF2D95] hover:text-white transition-colors"
              aria-label="View on Instagram"
            >
              <Instagram size={16} />
            </a>
          )}
        </div>
      </div>
      <div className="px-5 py-4 flex items-start justify-between gap-3">
        <p className="text-sm text-white/65 leading-relaxed">{project.desc}</p>
        <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#FF6B1A] group-hover:rotate-12 transition-all shrink-0" />
      </div>
    </motion.article>
  );
}
