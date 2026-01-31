"use client";

import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "@/components/ui/Reveal";
import { useState } from "react";

type ContractItem = {
  t: string;
  d: string;
  chain: string;
  address: string;
  href: string;
  repo: string;
  tag: string;
};

function shortAddr(addr: string) {
  if (!addr) return "";
  return addr.length > 12 ? `${addr.slice(0, 6)}…${addr.slice(-4)}` : addr;
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback (rare)
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white/90 hover:bg-black/45 transition"
      aria-label={label}
      title={label}
    >
      <span className="text-white/90">{copied ? "تم النسخ" : "نسخ"}</span>
      {/* أيقونة بسيطة */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
        <path
          d="M9 9h10v10H9V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function Contracts() {
  const { lang } = useLang();
  const t = content[lang];

  const items = (t as any)?.contracts?.items as ContractItem[] | undefined;

  return (
    <section id="contracts" className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/70" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              {(t as any).contracts?.title ?? (lang === "ar" ? "العقود الذكية" : "Smart Contracts")}
            </h2>
          </div>

          <p className="text-white/60 max-w-2xl leading-relaxed">
            {(t as any).contracts?.note ??
              (lang === "ar"
                ? "عقود منشورة وروابط الاستعراض والمستودع."
                : "Deployed contracts with explorer and repository links.")}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {(items ?? []).map((c) => (
            <div
              key={c.t + c.address}
              className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 backdrop-blur-xl p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-60" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-white font-extrabold text-lg md:text-xl truncate">
                    {c.t}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85">
                      {c.chain}
                    </span>
<span
  className={
    "rounded-full border px-3 py-1 text-xs " +
    (String(c.tag).toLowerCase() === "live"
      ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-200"
      : "border-white/15 bg-black/25 text-white/85")
  }
>
  {c.tag}
</span>

                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-white/75 text-sm leading-relaxed">
                {c.d}
              </p>

              {/* Address + Copy */}
              <div className="mt-5 rounded-2xl border border-white/12 bg-black/30 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-white/60">
                    {lang === "ar" ? "العنوان" : "Address"}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-xs text-white/60" title={c.address}>
                      {shortAddr(c.address)}
                    </div>

                    <CopyButton
                      text={c.address}
                      label={lang === "ar" ? "نسخ عنوان العقد" : "Copy contract address"}
                    />
                  </div>
                </div>

                <div
                  className="mt-2 font-mono text-xs md:text-sm text-white/90 break-all"
                  title={c.address}
                >
                  {c.address}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs text-white/90 hover:bg-black/40 transition"
                >
                  {lang === "ar" ? "استعراض العقد" : "View on Explorer"} <span aria-hidden>↗</span>
                </a>


              </div>

              <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="h-full w-full bg-white/5 blur-3xl" />
              </div>
            </div>
          ))}

          {(items ?? []).length === 0 && (
            <div className="text-white/70">
              {lang === "ar"
                ? "أضف العقود داخل content.ts تحت contracts.items"
                : "Add your contracts in content.ts under contracts.items"}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
