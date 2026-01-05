"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  // ضع بياناتك هنا لاحقاً
  const email = "husam@example.com";
  const github = "https://github.com/husamaljabre333-commits";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl p-7">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">{t.contact.title}</h2>
        <p className="mt-2 text-white/70">{t.contact.desc}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90"
          >
            {t.contact.cta}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
