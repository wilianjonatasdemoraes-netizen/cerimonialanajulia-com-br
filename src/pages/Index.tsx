import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Below-the-fold: code-split to shrink initial JS payload
const PainDesire = lazy(() => import("@/components/PainDesire"));
const About = lazy(() => import("@/components/About"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Services = lazy(() => import("@/components/Services"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Plans = lazy(() => import("@/components/Plans"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Storytelling = lazy(() => import("@/components/Storytelling"));
const VideoShowcase = lazy(() => import("@/components/VideoShowcase"));
const WhyChoose = lazy(() => import("@/components/WhyChoose"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Regioes = lazy(() => import("@/components/Regioes"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cerimonial de Casamento em Pará de Minas | Ana Júlia Cerimonial</title>
        <meta
          name="description"
          content="Cerimonial e assessoria para casamentos, colações de grau e eventos corporativos em Pará de Minas, Divinópolis, Nova Serrana e Itaúna."
        />
        <link rel="canonical" href="https://ana.cerimonialcasamentos.com.br/" />
        <meta property="og:title" content="Cerimonial de Casamento em Pará de Minas | Ana Júlia Cerimonial" />
        <meta property="og:description" content="Cerimonial e assessoria para casamentos, colações de grau e eventos corporativos em Pará de Minas e região." />
        <meta property="og:url" content="https://ana.cerimonialcasamentos.com.br/" />
        <meta name="twitter:title" content="Cerimonial de Casamento em Pará de Minas | Ana Júlia Cerimonial" />
        <meta name="twitter:description" content="Cerimonial e assessoria para casamentos, colações de grau e eventos corporativos em Pará de Minas e região." />
      </Helmet>

      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: 400 }} />}>
        <PainDesire />
        <About />
        <Gallery />
        <Services />
        <Plans />
        <HowItWorks />
        <Portfolio />
        <Storytelling />
        <VideoShowcase />
        <WhyChoose />
        <Regioes />
        <FAQ />
        <FinalCTA />
        <Contact />
        <Footer />
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default Index;
