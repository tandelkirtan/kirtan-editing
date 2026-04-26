import React from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, ArrowUpRight, MapPin, Clock, Globe2, Copy, Instagram
} from "lucide-react";
import { profile, socials } from "../data/mock";
import { toast } from "sonner";

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <path fill="currentColor" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.4-1.404.087-.288.087-.575.043-.865-.13-.36-2.135-1.063-2.464-1.063z" />
      <path fill="currentColor" d="M16.003 0C7.171 0 .017 7.154.017 15.987c0 2.778.717 5.487 2.07 7.873L0 32l8.357-2.04a15.913 15.913 0 0 0 7.646 1.94h.007c8.825 0 16.01-7.155 16.01-15.987 0-4.27-1.685-8.27-4.733-11.273A15.946 15.946 0 0 0 16.003 0zm0 29.292h-.007a13.302 13.302 0 0 1-6.78-1.86l-.487-.288-5.04 1.225 1.345-4.913-.318-.503a13.27 13.27 0 0 1-2.04-7.107C2.677 8.62 8.658 2.642 16.01 2.642c3.55 0 6.886 1.382 9.395 3.89a13.232 13.232 0 0 1 3.89 9.402c.005 7.354-5.973 13.358-13.292 13.358z"/>
    </svg>
  );
}

export default function Contact() {
  const waText = encodeURIComponent("Hi Kirtan! I'd love to discuss a project with you.");
  const waHref = `https://wa.me/${profile.whatsappFull.replace(/\D/g, "")}?text=${waText}`;
  const telHref = `tel:${profile.whatsappFull}`;
  const mailHref = `mailto:${profile.email}?subject=Project%20Inquiry%20\u2014%20Kirtan%20Tandel`;

  const copy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast.success(`${label} copied to clipboard`);
    }
  };

  const cards = [
    {
      Icon: WhatsAppIcon,
      label: "WhatsApp",
      value: profile.phone,
      cta: "Chat Now",
      href: waHref,
      external: true,
      ringColor: "#25D366",
      bg: "from-[#0F2A1F] to-[#0E1128]",
      copyValue: profile.whatsappFull,
    },
    {
      Icon: Phone,
      label: "Call Direct",
      value: profile.phone,
      cta: "Place a Call",
      href: telHref,
      external: false,
      ringColor: "#FF6B1A",
      bg: "from-[#2A1B0E] to-[#0E1128]",
      copyValue: profile.whatsappFull,
    },
    {
      Icon: Mail,
      label: "Email",
      value: profile.email,
      cta: "Send an Email",
      href: mailHref,
      external: false,
      ringColor: "#FF2D95",
      bg: "from-[#2A0E22] to-[#0E1128]",
      copyValue: profile.email,
    },
  ];

  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 radial-glow" />
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 pt-20 md:pt-8 pb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/50 flex items-center gap-2">
            <span className="w-8 h-px bg-[#FF2D95]" /> Get In Touch
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display mt-4 text-[clamp(54px,10vw,160px)] leading-[0.9] tracking-tight"
          >
            Let&apos;s build <br />
            something <span className="neon-text">cinematic.</span>
          </motion.h1>
          <div className="mt-8 flex flex-wrap gap-4 text-white/65 text-sm">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-[#FF2D95]" /> {profile.location}</span>
            <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#FF6B1A]" /> Working with foreign clients</span>
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-[#25D366]" /> Replies within a few hours</span>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 mt-6 grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => {
          const Wrap = ({ children }) =>
            c.external ? (
              <a href={c.href} target="_blank" rel="noreferrer" className="block h-full">{children}</a>
            ) : (
              <a href={c.href} className="block h-full">{children}</a>
            );
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="h-full"
            >
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${c.bg} p-7 h-full flex flex-col`}>
                <div
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30"
                  style={{ background: c.ringColor }}
                />
                <Wrap>
                  <span
                    className="w-14 h-14 rounded-2xl grid place-items-center text-white"
                    style={{ background: c.ringColor, boxShadow: `0 10px 30px ${c.ringColor}55` }}
                  >
                    <c.Icon size={22} />
                  </span>
                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-white/45">{c.label}</div>
                  <div className="mt-1 font-display text-3xl md:text-4xl tracking-wide break-all">{c.value}</div>
                </Wrap>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <Wrap>
                    <span className="inline-flex items-center gap-2 font-grotesk font-semibold text-sm text-white/90 group">
                      {c.cta}
                      <ArrowUpRight size={16} className="transition-transform group-hover:rotate-12" style={{ color: c.ringColor }} />
                    </span>
                  </Wrap>
                  <button
                    type="button"
                    onClick={() => copy(c.copyValue, c.label)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
                    aria-label={`Copy ${c.label}`}
                  >
                    <Copy size={14} /> Copy
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* WHY WORK WITH ME */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 section-pad">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/50 mb-3">Why Work With Me</div>
            <h2 className="font-display text-5xl md:text-6xl leading-none">Fast turnaround. <span className="neon-text">Cinematic finish.</span></h2>
            <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
              I treat every project like it&apos;s going on the front page. Tight communication, clean delivery, multiple revisions, and zero compromise on quality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: "Quick replies", d: "Most messages answered within a few hours on WhatsApp." },
              { t: "Clear pricing", d: "Transparent quotes — no surprises after the project starts." },
              { t: "Multiple revisions", d: "We refine until you&apos;re genuinely happy with the cut." },
              { t: "Confidentiality first", d: "NDAs welcome — your raw footage stays private." },
            ].map((x) => (
              <div key={x.t} className="card-surface p-5">
                <div className="font-grotesk font-semibold">{x.t}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed" dangerouslySetInnerHTML={{ __html: x.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIALS STRIP */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 pb-24">
        <div className="card-surface p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">Also Find Me On</div>
            <div className="font-display text-3xl md:text-4xl mt-1">Instagram pages I work with</div>
          </div>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-[#FF2D95] hover:border-[#FF2D95]/40 transition-colors text-sm">
                <Instagram size={14} /> {s.handle}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
