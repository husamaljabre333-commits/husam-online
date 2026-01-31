"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Youtube() {
  const { lang } = useLang();
  const t = content[lang];

  // ضع رابط قناتك هنا لاحقاً
  const youtubeUrl = "https://www.youtube.com/@Husam.aljabre";

  return (
    <section id="youtube" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.youtube.title}</h2>
          <p className="mt-2 text-white/70">{t.youtube.desc}</p>
        </div>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          {t.youtube.cta}
        </a>
      </div>
    </section>
  );
}
