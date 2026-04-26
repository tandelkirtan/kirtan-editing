import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/mock";

export default function WhatsAppFloat() {
  const text = encodeURIComponent("Hi Kirtan! I'd love to discuss a project with you.");
  const href = `https://wa.me/${profile.whatsappFull.replace(/\D/g, "")}?text=${text}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed z-40 bottom-6 right-6 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 pulse-ring" style={{ animationDelay: "0.6s" }} />
      <span className="relative flex items-center gap-2 pl-3 pr-4 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.6)] transition-shadow">
        <span className="w-9 h-9 grid place-items-center rounded-full bg-white/15">
          <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
            <path fill="currentColor" d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.4-1.404.087-.288.087-.575.043-.865-.13-.36-2.135-1.063-2.464-1.063z" />
            <path fill="currentColor" d="M16.003 0C7.171 0 .017 7.154.017 15.987c0 2.778.717 5.487 2.07 7.873L0 32l8.357-2.04a15.913 15.913 0 0 0 7.646 1.94h.007c8.825 0 16.01-7.155 16.01-15.987 0-4.27-1.685-8.27-4.733-11.273A15.946 15.946 0 0 0 16.003 0zm0 29.292h-.007a13.302 13.302 0 0 1-6.78-1.86l-.487-.288-5.04 1.225 1.345-4.913-.318-.503a13.27 13.27 0 0 1-2.04-7.107C2.677 8.62 8.658 2.642 16.01 2.642c3.55 0 6.886 1.382 9.395 3.89a13.232 13.232 0 0 1 3.89 9.402c.005 7.354-5.973 13.358-13.292 13.358z"/>
          </svg>
        </span>
        <span className="hidden sm:inline font-grotesk font-semibold text-sm pr-1">Chat on WhatsApp</span>
      </span>
    </motion.a>
  );
}
