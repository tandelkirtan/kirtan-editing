import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { profile } from "../data/mock";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#070817]">
      <div className="shimmer-divider" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF2D95] to-[#FF6B1A] grid place-items-center font-display text-[#070817] text-lg glow-magenta">
              KT
            </div>
            <div>
              <div className="font-display text-lg tracking-wider">{profile.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/50">{profile.role}</div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-4 justify-center">
            {[{to:"/",l:"Home"},{to:"/about",l:"About"},{to:"/work",l:"Work"},{to:"/contact",l:"Contact"}].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="text-white/60 hover:text-[#FF2D95] transition-colors font-grotesk text-sm">{x.l}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <a href={`mailto:${profile.email}`} className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white/60 hover:text-[#FF2D95] hover:bg-[#FF2D95]/20 transition-colors">
              <Mail size={14} />
            </a>
            <a href={`tel:${profile.whatsappFull}`} className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white/60 hover:text-[#FF6B1A] hover:bg-[#FF6B1A]/20 transition-colors">
              <Phone size={14} />
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20 text-white/60 hover:text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-0 md:px-10 py-4 text-center">
          <div className="text-white/30 text-xs tracking-widest uppercase">© {new Date().getFullYear()} kirtan - All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
