"use client";

import TechBackground from "@/components/ui/TechBackground";
import Reveal from "@/components/ui/Reveal";

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

      <Reveal direction="up">
        <Hero />
      </Reveal>

      <Reveal direction="right">
        <About />
      </Reveal>

      <Reveal direction="left">
        <Services />
      </Reveal>

      <Reveal direction="right">
        <Projects />
      </Reveal>

      <Reveal direction="left">
        <Youtube />
      </Reveal>

      <Reveal direction="right">
        <Contact />
      </Reveal>

      <Reveal direction="up">
        <Footer />
      </Reveal>
    </main>
  );
}
