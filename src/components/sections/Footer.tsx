"use client";
import { content } from "@/lib/content";
import { useLang } from "@/lib/lang";

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];

  const links = {
    telegram: "https://t.me/husamalj",
    youtube: "https://www.youtube.com/@Husam.aljabre",
    instagram: "https://www.instagram.com/husam_aljabre/",
    facebook: "https://facebook.com/CHANGE_ME", // غيّرها لاحقًا
  };

  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="rounded-3xl border border-white/12 bg-white/10 backdrop-blur-xl px-6 py-5">
        <div className="flex flex-col items-center gap-4">
          {/* Icons on top */}
          <div className="flex items-center gap-2">
            <SocialIcon href={links.youtube} label="YouTube">
              <YouTubeIcon className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href={links.instagram} label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href={links.telegram} label="Telegram">
              <TelegramIcon className="h-5 w-5" />
            </SocialIcon>

            <SocialIcon href={links.facebook} label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialIcon>
          </div>

          {/* Copyright under icons */}
          <div className="text-white/70 text-sm text-center">{t.footer}</div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white hover:bg-white/15"
    >
      {children}
    </a>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8Z" />
      <path d="M10 15.5v-7l6 3.5-6 3.5Z" fill="#070A12" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.6 6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 4.2c.4.2.2 1-.1 2.3l-3 14.1c-.2 1-1 1.2-1.8.7l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.6 10.1-9.1c.4-.4-.1-.6-.6-.3L6.9 12.3l-4.9-1.5c-1-.3-1-1 .2-1.5l18.3-7.1c.6-.2 1-.2 1.3 0Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.8-.1-1.8-.3-3-.3-2.9 0-4.9 1.7-4.9 5V11H6.4v3h2.4v8h4.7Z" />
    </svg>
  );
}
