import heroImage from "@/assets/wedding-sparklers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Casamento emocionante com sparklers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/60 via-warm-dark/40 to-warm-dark/70" />
      </div>

      {/* Decorative corner frame */}
      <div className="absolute inset-8 md:inset-16 border border-champagne/15 pointer-events-none z-10" />
      <div className="absolute top-8 left-8 md:top-16 md:left-16 w-12 h-12 border-t-2 border-l-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute top-8 right-8 md:top-16 md:right-16 w-12 h-12 border-t-2 border-r-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-12 h-12 border-b-2 border-l-2 border-champagne/30 pointer-events-none z-10" />
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-12 h-12 border-b-2 border-r-2 border-champagne/30 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        <div className="premium-divider mb-8">
          <div className="ornament" />
        </div>
        <p className="font-sans text-champagne text-xs tracking-[0.35em] uppercase mb-8 opacity-90">
          Cerimonial & Assessoria
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6">
          Enquanto você vive o seu casamento, alguém cuida de tudo.
        </h1>
        <p className="font-sans text-champagne/90 text-base md:text-lg font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Tranquilidade, organização e elegância para o dia mais importante da sua vida.
        </p>
        <a
          href="#contato"
          className="btn-premium inline-block text-champagne px-10 py-4 text-xs tracking-[0.25em] uppercase font-sans"
        >
          Agendar Conversa
        </a>
        <div className="premium-divider mt-10">
          <div className="ornament" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-champagne text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-champagne/40 glow-pulse" />
      </div>
    </section>
  );
};

export default Hero;
