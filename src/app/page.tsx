import TechBackground from "@/components/ui/TechBackground";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Youtube from "@/components/sections/Youtube";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <TechBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Youtube />
      <Contact />
      <Footer />
    </main>
  );
}
