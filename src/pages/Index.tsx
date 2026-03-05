import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Storytelling from "@/components/Storytelling";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Portfolio />
      <Storytelling />
      <Testimonials />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
