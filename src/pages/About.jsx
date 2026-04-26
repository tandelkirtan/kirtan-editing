import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Award, Globe2, Headphones, Clapperboard } from "lucide-react";
import { profile, tools, journey, socials } from "../data/mock";

const getGradientColors = (gradient) => {
  const colorMap = {
    "from-[#FF2D95] to-[#FF1493]": "#FF2D95, #FF1493",
    "from-[#FF6B1A] to-[#00D4FF]": "#FF6B1A, #00D4FF",
    "from-[#FF2D95] to-[#7C3AED]": "#FF2D95, #7C3AED",
    "from-[#FF6B1A] to-[#10B981]": "#FF6B1A, #10B981",
    "from-[#FF2D95] to-[#EC4899]": "#FF2D95, #EC4899",
    "from-[#FF6B1A] to-[#F59E0B]": "#FF6B1A, #F59E0B",
    "from-[#FF2D95] to-[#8B5CF6]": "#FF2D95, #8B5CF6",
    "from-[#FF6B1A] to-[#EF4444]": "#FF6B1A, #EF4444",
    "from-[#FF2D95] to-[#06B6D4]": "#FF2D95, #06B6D4",
    "from-[#FF6B1A] to-[#84CC16]": "#FF6B1A, #84CC16",
    "from-[#FF2D95] to-[#F97316]": "#FF2D95, #F97316",
    "from-[#FF6B1A] to-[#6366F1]": "#FF6B1A, #6366F1"
  };
  return colorMap[gradient] || "#FF2D95, #FF6B1A";
};

export default function About() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 radial-glow" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-white/50 flex items-center gap-2"
          >
            <Sparkles size={14} className="text-[#FF6B1A]" /> About Me
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-4 text-[clamp(54px,10vw,160px)] leading-[0.9] tracking-tight"
          >
            The editor <br />
            <span className="neon-text">behind the cuts.</span>
          </motion.h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-12 gap-10 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            {profile.longIntro}
          </p>
          <p className="mt-6 text-white/65 leading-relaxed">
            I take on projects across <span className="text-white">wedding videos, commercial content, government work and professional editing services</span>. I&apos;ve also worked on hospital shoots, product shoots and other professional projects — and I currently manage content for multiple Instagram pages, plus editing for both government and private commercial clients.
          </p>
          <p className="mt-6 text-white/65 leading-relaxed">
            Due to confidentiality and client policies, I&apos;m unable to publicly showcase a portion of this work — but I&apos;d be happy to walk you through similar projects on a call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/work" className="btn-neon">See My Work <ArrowUpRight size={16} /></Link>
            <Link to="/contact" className="btn-ghost">Get In Touch</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 grid grid-cols-2 gap-4 content-start"
        >
          {[
            { icon: Award, label: "Experience", value: `${profile.experienceYears}+ years` },
            { icon: Clapperboard, label: "Projects", value: `${profile.projectsDelivered}+ delivered` },
            { icon: Globe2, label: "Reach", value: "India + Foreign clients" },
            { icon: Headphones, label: "Mode", value: "Full-time freelance" },
          ].map((s, i) => (
            <div key={s.label} className={`card-surface p-6 ${i % 2 ? "translate-y-6" : ""}`}>
              <s.icon size={20} className="text-[#FF2D95]" />
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-white/45">{s.label}</div>
              <div className="mt-1 font-display text-2xl tracking-wide">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* TOOLS */}
      <section className="section-pad bg-[#080A1C] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50">
                <Sparkles size={14} className="text-[#FF2D95]" /> Tools I Edit With
              </div>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
                My <span className="neon-text">arsenal</span>.
              </h2>
            </div>
            <p className="text-white/65 max-w-md leading-relaxed">
              From timeline cuts to final colour, I switch between the right tools for every job.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-surface p-6 text-center group hover:border-[#FF2D95]/40 transition-all"
              >
                <div 
                  className="font-display font-black text-xl tracking-wide bg-clip-text text-transparent"
                  style={{
                    background: `linear-gradient(to right, ${getGradientColors(t.gradient)})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {t.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section-pad max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
          <Award size={14} className="text-[#FF6B1A]" /> The Journey
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-none">From hobby to <span className="neon-text">full-time craft.</span></h2>

        <div className="mt-14 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF2D95] via-[#FF6B1A] to-transparent" />
          <div className="space-y-10">
            {journey.map((j, i) => (
              <motion.div
                key={j.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="font-display text-5xl md:text-6xl neon-text">{j.year}</div>
                  <div className="font-grotesk font-semibold mt-1 text-xl">{j.title}</div>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="card-surface p-6 inline-block">
                    <p className="text-white/70 leading-relaxed">{j.desc}</p>
                  </div>
                </div>
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-[#FF2D95] to-[#FF6B1A] glow-magenta" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER WORK */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-24">
        <div className="card-surface p-8 md:p-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
            <Sparkles size={14} className="text-[#FF2D95]" /> Community Work
          </div>
          <h3 className="font-display text-4xl md:text-5xl leading-none">Beyond editing, I give back.</h3>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            I am also a videographer and an audio-visual volunteer at <a href="https://www.baps.org/home.aspx" target="_blank" rel="noreferrer" className="text-[#FF2D95] hover:text-[#FF6B1A] transition-colors">BAPS Swaminarayan Sanstha</a>, contributing to community projects and cultural events through visual storytelling.
          </p>
        </div>
      </section>

          </main>
  );
}
