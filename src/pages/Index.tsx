import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PainDesire from "@/components/PainDesire";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Portfolio from "@/components/Portfolio";
import Storytelling from "@/components/Storytelling";
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ana Júlia Cerimonialista | Casamentos Premium em Pará de Minas</title>
        <meta
          name="description"
          content="Assessoria e cerimonial premium para casamentos, debutantes e eventos em Pará de Minas e região. +127 casamentos realizados, 5★ no Google."
        />
        <link rel="canonical" href="https://ana.wjmlook.com.br/" />
        <meta property="og:title" content="Ana Júlia Cerimonialista | Casamentos Premium" />
        <meta property="og:description" content="O dia mais lindo da sua vida, organizado com amor." />
        <meta property="og:url" content="https://ana.wjmlook.com.br/" />
      </Helmet>

      <Navbar />
      <Hero />
      <Stats />
      <PainDesire />
      <About />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Storytelling />
      <VideoShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
