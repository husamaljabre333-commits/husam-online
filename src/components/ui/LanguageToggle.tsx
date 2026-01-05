"use client";

import { useLang } from "@/lib/lang";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();

  return (
    <button
      onClick={toggle}
      className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15 backdrop-blur-xl"
      aria-label="Toggle language"
      type="button"
    >
      {lang === "ar" ? "EN" : "AR"}
    </button>
  );
}
