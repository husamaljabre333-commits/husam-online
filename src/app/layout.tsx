import "./globals.css";
import { LanguageProvider } from "@/lib/lang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حسام الجابري ‎﮼",
  description: "حسام الجابري — خبير بلوكشين وعملات رقمية ومطوّر ويب",
icons: {
  icon: "/icon.png",
  shortcut: "/icon.png",
  apple: "/apple-icon.png",
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
