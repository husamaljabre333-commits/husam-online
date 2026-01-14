import "./globals.css";
import { LanguageProvider } from "@/lib/lang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حسام الجابري ‎﮼",
  description: "حسام الجابري — خبير بلوكشين وعملات رقمية ومطوّر ويب",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
