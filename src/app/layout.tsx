import "./globals.css";
import { LanguageProvider } from "@/lib/lang";

export const metadata = {
  title: "Husam Aljabre | Web3 • Blockchain • Web Developer",
  description: "حسام الجابري — خبير بلوكشين وعملات رقمية ومطوّر ويب",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
