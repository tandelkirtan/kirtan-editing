import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, ArrowUpRight, Sparkles, Film, Camera, Wand2, Clapperboard,
  Instagram, Star, Quote, ChevronLeft, ChevronRight
} from "lucide-react";
import { profile, services, projects, testimonials, socials } from "../data/mock";
import VideoCard from "../components/VideoCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] } }),
};

export default function Home() {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const featured = projects.slice(0, 6);
  
  // All testimonials in carousel, showing 4 at a time
  const testimonialsPerView = 4;
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView);
  
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 radial-glow" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60"
          >
            <span className="w-8 h-px bg-[#FF2D95]" /> {profile.location}
            <span className="ml-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" /> Available
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display mt-6 text-[clamp(56px,11vw,180px)] leading-[0.9] tracking-tight"
          >
            <span className="block">CUTTING</span>
            <span className="block neon-text">FRAMES</span>
            <span className="block">THAT MOVE <span className="italic font-light text-white/80">people.</span></span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed"
          >
            I&apos;m <span className="text-white">{profile.name}</span> — a full-time {profile.role.toLowerCase()}.
            From cinematic wedding films to bold commercial reels, every cut is built around story, rhythm and feel.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/work" className="btn-neon"><Play size={16} fill="currentColor" /> View Showreel</Link>
            <Link to="/contact" className="btn-ghost">Start a Project <ArrowUpRight size={16} /></Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { v: `${profile.experienceYears}+`, l: "Years Editing" },
              { v: `${profile.projectsDelivered}+`, l: "Projects Delivered" },
              { v: `${profile.happyClients}+`, l: "Happy Clients" },
              { v: `${profile.hoursEdited}+`, l: "Hours Edited" },
            ].map((s) => (
              <div key={s.l} className="card-surface p-5 md:p-6">
                <div className="font-display text-4xl md:text-5xl neon-text">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-white/5 py-5 bg-[#0B0E22]">
          <div className="flex marquee whitespace-nowrap text-white/30 gap-12 font-display text-3xl md:text-5xl tracking-widest">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 items-center">
                {["WEDDING FILMS", "✱", "COMMERCIAL REELS", "✱", "GOVERNMENT WORK", "✱", "PRODUCT EDITS", "✱", "GRAPHIC DESIGN", "✱", "COLOR GRADING", "✱"]
                  .map((t, i) => (
                    <span key={i} className={i % 2 ? "text-[#FF2D95]" : ""}>{t}</span>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50">
              <Sparkles size={14} className="text-[#FF6B1A]" /> What I Do
            </div>
            <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
              Services <span className="neon-text">crafted</span><br />for every story.
            </h2>
          </div>
          <p className="text-white/65 max-w-md leading-relaxed">
            Whether it&apos;s a wedding, a brand or a confidential government project — I bring the same obsession to every frame.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = [Film, Clapperboard, Camera, Wand2, Instagram, Sparkles][i % 6];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-surface p-7 group hover:border-[#FF2D95]/40 transition-colors relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#FF2D95]/15 to-[#FF6B1A]/15 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center group-hover:bg-gradient-to-br group-hover:from-[#FF2D95] group-hover:to-[#FF6B1A] transition-all">
                      <Icon size={20} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">{s.tag}</span>
                  </div>
                  <h3 className="font-display text-3xl mt-5 tracking-wide">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section-pad bg-[#080A1C] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50">
                <Clapperboard size={14} className="text-[#FF2D95]" /> Featured Work
              </div>
              <h2 className="font-display text-5xl md:text-7xl mt-3 leading-none">
                Recent <span className="neon-text">cuts</span>.
              </h2>
            </div>
            <Link to="/work" className="btn-ghost hidden md:inline-flex">All Projects <ArrowUpRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => <VideoCard key={p.id} project={p} index={i} />)}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link to="/work" className="btn-ghost">All Projects <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50 mb-3">
          <Star size={14} className="text-[#FF6B1A]" /> Words From Clients
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-none">Trusted by <span className="neon-text">creators</span> & brands.</h2>
        {/* Carousel - Showing 4 testimonials at once */}
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCarouselIndex * (100 / testimonialsPerView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="card-surface p-7 flex-shrink-0 w-full lg:w-[calc(25%-15px)]"
                >
                  <Quote size={22} className="text-[#FF2D95]" />
                  <p className="mt-4 text-white/85 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <div className="font-grotesk font-semibold">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/45 mt-1">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCarousel}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextCarousel}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator for Carousel */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCarouselIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentCarouselIndex === index
                  ? "bg-[#FF2D95] w-8"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#160A26] via-[#0E1128] to-[#1A0E14] p-10 md:p-16">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#FF2D95]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#FF6B1A]/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-end">
            <h3 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Got footage? <br /> Let&apos;s make it <span className="neon-text">cinematic.</span>
            </h3>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="btn-neon">Start a Project <ArrowUpRight size={16} /></Link>
              <a href={`https://wa.me/${profile.whatsappFull.replace(/\D/g,"")}`} target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Me</a>
            </div>
          </div>
          <div className="relative mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-white/45">
            {socials.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer" className="hover:text-[#FF2D95] transition-colors flex items-center gap-2">
                <Instagram size={12} /> {s.handle}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
