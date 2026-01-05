"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function About() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl p-7">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.about.title}</h2>
        <p className="mt-4 text-white/75 leading-relaxed">{t.about.p1}</p>
        <p className="mt-3 text-white/75 leading-relaxed">{t.about.p2}</p>
      </div>
    </section>
  );
}
