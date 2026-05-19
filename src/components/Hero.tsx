import heroImage from "@/assets/wedding-sparklers.jpg";
import { Sparkles, ShieldCheck, HeartHandshake, Gem } from "lucide-react";

const badges = [
  { icon: HeartHandshake, label: "Atendimento personalizado" },
  { icon: ShieldCheck, label: "Organização profissional" },
  { icon: Gem, label: "Cuidado em cada detalhe" },
  { icon: Sparkles, label: "Leveza e segurança" },
];

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casamento elegante com sparklers — cerimonial Ana Júlia"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/55 to-warm-dark/80" />
      </div>

      {/* Decorative corner frame */}
      <div className="absolute inset-6 md:inset-16 border border-champagne/15 pointer-events-none z-10" />
      <div className="absolute top-6 left-6 md:top-16 md:left-16 w-10 md:w-12 h-10 md:h-12 border-t-2 border-l-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute top-6 right-6 md:top-16 md:right-16 w-10 md:w-12 h-10 md:h-12 border-t-2 border-r-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute bottom-6 left-6 md:bottom-16 md:left-16 w-10 md:w-12 h-10 md:h-12 border-b-2 border-l-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute bottom-6 right-6 md:bottom-16 md:right-16 w-10 md:w-12 h-10 md:h-12 border-b-2 border-r-2 border-champagne/30 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up pt-20 pb-10">
        <div className="premium-divider mb-6 md:mb-8">
          <div className="ornament" />
        </div>
        <p className="font-sans text-champagne text-[10px] md:text-xs tracking-[0.35em] uppercase mb-6 md:mb-8 opacity-90">
          Cerimonial Premium · Pará de Minas & Região
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6">
          Transformamos sonhos em <span className="text-shimmer italic">momentos inesquecíveis</span>
        </h1>
        <p className="font-sans text-champagne/90 text-sm md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Assessoria premium para casamentos, debutantes e eventos sofisticados.
          Direção profissional, elegância editorial e cuidado em cada detalhe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://wa.me/5537999265472?text=Olá%20Ana%20Júlia!%20Quero%20realizar%20o%20meu%20sonho%20—%20vamos%20conversar?"
            target="_blank"
            rel="noopener noreferrer"
            data-event="hero_whatsapp_click"
            className="btn-premium inline-flex items-center justify-center gap-2 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-sans border-white/20 w-full sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
            </svg>
            Quero realizar meu sonho
          </a>
          <a
            href="#portfolio"
            data-event="hero_portfolio_click"
            className="btn-premium inline-block text-champagne px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-sans w-full sm:w-auto"
          >
            Ver eventos
          </a>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 px-3 py-3 border border-champagne/15 backdrop-blur-sm bg-warm-dark/20"
            >
              <b.icon className="w-4 h-4 text-gold-light" strokeWidth={1.2} />
              <span className="text-champagne/80 text-[9px] md:text-[10px] tracking-[0.18em] uppercase font-sans leading-tight text-center">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <div className="premium-divider mt-10 hidden md:flex">
          <div className="ornament" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60">
        <span className="text-champagne text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-champagne/40 glow-pulse" />
      </div>
    </section>
  );
};

export default Hero;
