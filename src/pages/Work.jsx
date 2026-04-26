import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clapperboard, ArrowUpRight, Instagram } from "lucide-react";
import { projects, socials } from "../data/mock";
import VideoCard from "../components/VideoCard";

export default function Work() {

  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 radial-glow" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/50 flex items-center gap-2">
            <Clapperboard size={14} className="text-[#FF2D95]" /> Selected Projects
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display mt-4 text-[clamp(54px,10vw,160px)] leading-[0.9] tracking-tight"
          >
            The <span className="neon-text">work</span><br />
            speaks first.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/65 leading-relaxed">
            A curated selection of weddings, brand films, reels and confidential commercial work. Hover any card to play a preview.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 mt-10 pb-24">
        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((p, i) => (
              <VideoCard key={p.id} project={p} index={i} />
            ))}
          </motion.div>
      </section>

      {/* DISCLOSURE / NDA */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-24">
        <div className="card-surface p-8 md:p-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
            <Clapperboard size={14} className="text-[#FF6B1A]" /> A Note On Confidentiality
          </div>
          <h3 className="font-display text-4xl md:text-5xl leading-tight max-w-3xl">
            Some of the best work doesn&apos;t make it to a public reel.
          </h3>
          <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
            I regularly work on government projects, hospital shoots and private commercial content that I cannot showcase publicly due to NDAs and client policies. Happy to walk you through similar projects on a private call.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socials.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer" className="group card-surface p-5 hover:border-[#FF2D95]/40 transition-colors block">
                <div className="flex items-center justify-between">
                  <div className="font-grotesk font-semibold flex items-center gap-2"><Instagram size={16} /> {s.label}</div>
                  <ArrowUpRight size={18} className="text-white/40 group-hover:text-[#FF2D95] group-hover:rotate-12 transition-all" />
                </div>
                <div className="mt-2 text-sm text-white/55">{s.handle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
