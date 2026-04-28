import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/mock";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { 
    setOpen(false); 
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#070817]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF2D95] to-[#FF6B1A] grid place-items-center font-display text-[#070817] text-xl glow-magenta">
            KT
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#00E5FF] rounded-full" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl tracking-wider">{profile.name}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Digital Creator</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/5 rounded-full px-2 py-1.5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-grotesk font-medium tracking-wide rounded-full transition-colors ${
                  isActive ? "text-[#070817]" : "text-white/70 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF2D95] to-[#FF6B1A]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#070817] font-grotesk font-semibold text-sm hover:bg-[#FF2D95] hover:text-white transition-colors"
        >
          Hire Me <ArrowUpRight size={16} />
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 grid place-items-center rounded-full border border-white/10 text-white"
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B0E22] border-t border-white/5 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `py-3 px-2 font-display text-2xl tracking-wider border-b border-white/5 ${
                      isActive ? "neon-text" : "text-white"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#FF2D95] to-[#FF6B1A] font-grotesk font-semibold text-white"
              >
                Hire Me <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
