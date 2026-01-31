"use client";

import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { motion } from "framer-motion";

export default function Header() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-semibold"
        >
          Husam <span className="text-white/60">Aljabre</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/75">
          <a className="hover:text-white" href="#about">{t.nav.about}</a>
          <a className="hover:text-white" href="#services">{t.nav.services}</a>
         <a className="hover:text-white" href="#contracts">{t.nav.contracts}</a>
          <a className="hover:text-white" href="#projects">{t.nav.projects}</a>
          <a className="hover:text-white" href="#youtube">{t.nav.youtube}</a>
          <a className="hover:text-white" href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
