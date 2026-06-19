import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PainDesire from "@/components/PainDesire";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Portfolio from "@/components/Portfolio";
import Storytelling from "@/components/Storytelling";
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import WhyChoose from "@/components/WhyChoose";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ana Júlia Cerimonial | Casamentos em Pará de Minas e Região MG</title>
        <meta
          name="description"
          content="Cerimonial premium para casamentos e eventos em Pará de Minas e região. +127 casamentos realizados, 5.0★ no Google e 8 anos de experiência. Garante sua data agora!"
        />
        <meta
          name="keywords"
          content="cerimonialista Pará de Minas, assessoria de casamento MG, organização de casamento interior MG, cerimonial premium Pará de Minas, assessoria para debutante MG"
        />
        <link rel="canonical" href="https://ana.wjmlook.com.br/" />
        <meta property="og:title" content="Ana Júlia Cerimonial — Casamentos Inesquecíveis em Pará de Minas" />
        <meta property="og:description" content="+127 casamentos realizados. Organização, elegância e tranquilidade para o seu grande dia." />
        <meta property="og:url" content="https://ana.wjmlook.com.br/" />
      </Helmet>

      <Navbar />
      <Hero />
      <Stats />
      <PainDesire />
      <About />
      <Gallery />
      <Services />
      <Plans />
      <HowItWorks />
      <Portfolio />
      <Storytelling />
      <VideoShowcase />
      <Testimonials />
      <div className="text-center pb-8 text-[11px] font-sans" style={{ color: "hsl(var(--body-text) / 0.6)" }}>
        🟢 12 noivas visualizaram este site hoje
      </div>
      <WhyChoose />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
