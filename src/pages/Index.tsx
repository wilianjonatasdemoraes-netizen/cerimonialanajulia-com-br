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
        <title>Cerimonialista em Pará de Minas | Ana Júlia Cerimonial</title>
        <meta
          name="description"
          content="Cerimonial e organização de casamentos, debutantes e eventos especiais em Pará de Minas e região. Planejamento, assessoria e execução com elegância, cuidado e profissionalismo."
        />
        <link rel="canonical" href="https://ana.wjmlook.com.br/" />
        <meta property="og:title" content="Cerimonialista em Pará de Minas | Ana Júlia Cerimonial" />
        <meta property="og:description" content="Cerimonial e organização de casamentos, debutantes e eventos especiais em Pará de Minas e região." />
        <meta property="og:url" content="https://ana.wjmlook.com.br/" />
      </Helmet>

      <Navbar />
      <Hero />
      <Stats />
      <PainDesire />
      <About />
      <Services />
      <Plans />
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
