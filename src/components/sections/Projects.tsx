"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

type ProjectItem = Readonly<{
  t: string;
  d: string;
  tag: string;
  img: string;
  href: string;
}>;

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];
  const items = t.projects.items as readonly ProjectItem[];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.projects.title}</h2>
        <div className="text-white/60 text-sm">{t.projects.note}</div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <a
            key={p.t}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl transition hover:border-white/20"
            aria-label={p.t}
          >
            <div className="relative">
              <div className="absolute left-4 top-4 z-10 text-xs rounded-full border border-white/15 bg-black/30 px-2 py-1 text-white/90">
                {p.tag}
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden bg-white/5">
                <img
                  src={p.img}
                  alt={p.t}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-white font-bold">{p.t}</div>
                <span className="text-white/60 group-hover:text-white/90" aria-hidden>
                  ↗
                </span>
              </div>

              <div className="mt-2 text-white/70 text-sm leading-relaxed">{p.d}</div>

              <div className="mt-4 text-xs text-white/50 break-all">
                {p.href.replace(/^https?:\/\//, "")}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
