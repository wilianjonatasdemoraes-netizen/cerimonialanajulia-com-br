import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoShowcase from "@/components/VideoShowcase";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Storytelling from "@/components/Storytelling";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import PainDesire from "@/components/PainDesire";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen page-border">
      {/* Page border corner accents */}
      <div className="page-border-accent top-left" />
      <div className="page-border-accent top-right" />
      <div className="page-border-accent bottom-left" />
      <div className="page-border-accent bottom-right" />

      <Navbar />
      <Hero />
      <VideoShowcase />
      <div className="section-separator" />
      <Services />
      <div className="section-separator" />
      <About />
      <div className="section-separator on-dark" />
      <HowItWorks />
      <PainDesire />
      <div className="section-separator" />
      <Portfolio />
      <Storytelling />
      <div className="section-separator on-dark" />
      <Testimonials />
      <FinalCTA />
      <div className="section-separator" />
      <FAQ />
      <div className="section-separator" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
