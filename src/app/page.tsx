import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import WhyMe from "@/components/WhyMe";
import Impact from "@/components/Impact";
import XAnalytics from "@/components/XAnalytics";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Experience />
      <WhyMe />
      <Impact />
      <XAnalytics />
      <Contact />
    </div>
  );
}
