import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Below-the-fold: code-split to shrink initial JS payload
const Stats = lazy(() => import("@/components/Stats"));
const PainDesire = lazy(() => import("@/components/PainDesire"));
const About = lazy(() => import("@/components/About"));
const Gallery = lazy(() => import("@/components/Gallery"));
const Services = lazy(() => import("@/components/Services"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Plans = lazy(() => import("@/components/Plans"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Storytelling = lazy(() => import("@/components/Storytelling"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
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
          content="Cerimonial de casamento e assessoria para eventos em Pará de Minas e região. Planejamento, organização e execução de casamentos e festas de 15 anos com cuidado em cada detalhe."
        />
        <link rel="canonical" href="https://cerimonialcasamentos.com.br/" />
        <meta property="og:title" content="Cerimonial de Casamento em Pará de Minas | Ana Júlia Cerimonial" />
        <meta property="og:description" content="Cerimonial de casamento, assessoria e organização de festas de 15 anos em Pará de Minas e região Centro-Oeste de Minas Gerais." />
        <meta property="og:url" content="https://cerimonialcasamentos.com.br/" />
        <meta name="twitter:title" content="Cerimonial de Casamento em Pará de Minas | Ana Júlia Cerimonial" />
        <meta name="twitter:description" content="Cerimonial de casamento, assessoria e organização de festas de 15 anos em Pará de Minas e região." />
      </Helmet>

      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: 400 }} />}>
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
