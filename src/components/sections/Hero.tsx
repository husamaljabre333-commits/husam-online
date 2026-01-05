"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-3 text-white/80 text-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <p className="mt-4 text-white/70 leading-relaxed">{t.hero.desc}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 backdrop-blur-xl"
            >
              {t.hero.cta2}
            </a>
            <a
              href="#youtube"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10 backdrop-blur-xl"
            >
              {t.hero.cta3}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 shadow-2xl shadow-blue-500/15">
          <div className="text-white font-bold text-lg">Stack</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {t.stats.map((s) => (
              <div key={s.k} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                <div className="text-white font-semibold">{s.k}</div>
                <div className="mt-1 text-sm text-white/70">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/12 bg-white/5 p-4 text-white/70 text-sm">
            {lang === "ar"
              ? "جاهز للتطوير: أقسام منفصلة + محتوى مترجم + خلفية تفاعلية."
              : "Built for scale: separated sections + translated content + interactive background."}
          </div>
        </div>
      </div>
    </section>
  );
}
