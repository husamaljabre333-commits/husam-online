"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="mt-8 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/65">
        {content[lang].footer}
      </div>
    </footer>
  );
}
