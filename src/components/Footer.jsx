import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/mock";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-[#070817]">
      <div className="shimmer-divider" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF2D95] to-[#FF6B1A] grid place-items-center font-display text-[#070817] text-2xl glow-magenta">
              KT
            </div>
            <div>
              <div className="font-display text-2xl tracking-wider">{profile.name}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{profile.role}</div>
            </div>
          </div>
          <p className="mt-6 text-white/65 max-w-md leading-relaxed">
            Cinematic edits, brand reels, government work and full-time freelance editing for clients in India and abroad.
          </p>
          <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
            <MapPin size={16} className="text-[#FF2D95]" /> {profile.location}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Pages</div>
          <ul className="space-y-2">
            {[{to:"/",l:"Home"},{to:"/about",l:"About"},{to:"/work",l:"Work"},{to:"/contact",l:"Contact"}].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="text-white/80 hover:text-[#FF2D95] transition-colors font-grotesk">{x.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Direct</div>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-white/80 hover:text-[#FF2D95] transition-colors py-1.5">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.whatsappFull}`} className="flex items-center gap-3 text-white/80 hover:text-[#FF2D95] transition-colors py-1.5">
            <Phone size={16} /> {profile.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/40 text-xs tracking-widest uppercase">© {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="text-white/30 text-xs tracking-widest uppercase">
            Designed & Edited — Frame by Frame
          </div>
        </div>
      </div>
    </footer>
  );
}
