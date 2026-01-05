"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { motion } from "framer-motion";

export default function Services() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.services.title}</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {t.services.items.map((it, idx) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl p-6 hover:bg-white/12"
          >
            <div className="text-white font-bold text-lg">{it.t}</div>
            <div className="mt-2 text-white/70 text-sm leading-relaxed">{it.d}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
