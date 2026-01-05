"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.projects.title}</h2>
        <div className="text-white/60 text-sm">{t.projects.note}</div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p) => (
          <div key={p.t} className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="text-white font-bold">{p.t}</div>
              <span className="text-xs rounded-full border border-white/15 bg-white/10 px-2 py-1 text-white/80">
                {p.tag}
              </span>
            </div>
            <div className="mt-2 text-white/70 text-sm leading-relaxed">{p.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
