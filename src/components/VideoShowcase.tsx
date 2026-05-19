const VideoShowcase = () => {
  return (
    <section id="apresentacao" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="premium-divider mb-6">
            <div className="ornament" />
          </div>
          <p className="font-sans text-gold text-[10px] md:text-xs tracking-[0.35em] uppercase mb-4 opacity-90">
            Apresentação
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground leading-tight mb-5">
            Conheça nossa experiência em <span className="text-shimmer italic">eventos</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Veja em poucos segundos como transformamos momentos especiais em experiências inesquecíveis.
          </p>
        </div>

        {/* Video frame with premium border */}
        <div className="relative max-w-4xl mx-auto">
          {/* Outer ornamental frame */}
          <div className="absolute -inset-3 md:-inset-4 border border-gold-light/25 rounded-3xl pointer-events-none" />
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-3xl pointer-events-none" />
          <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-3xl pointer-events-none" />
          <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-8 h-8 border-b-2 border-l-2 border-gold/50 rounded-bl-3xl pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-8 h-8 border-b-2 border-r-2 border-gold/50 rounded-br-3xl pointer-events-none" />

          <div
            className="relative rounded-2xl overflow-hidden bg-warm-dark"
            style={{
              boxShadow:
                "0 30px 80px -20px hsl(var(--gold) / 0.25), 0 10px 40px -10px hsl(var(--warm-dark) / 0.4), 0 0 0 1px hsl(var(--gold-light) / 0.2)",
            }}
          >
            <video
              src="/videos/apresentacao-geral.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              poster=""
            >
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://wa.me/5537999265472?text=Olá%20Ana%20Júlia!%20Vi%20o%20vídeo%20de%20apresentação%20e%20gostaria%20de%20falar%20sobre%20o%20meu%20evento."
            target="_blank"
            rel="noopener noreferrer"
            data-event="video_showcase_whatsapp_click"
            className="btn-premium inline-flex items-center justify-center gap-2 bg-[#25D366]/95 hover:bg-[#25D366] text-white px-10 py-5 text-[11px] tracking-[0.3em] uppercase font-sans border-white/20"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
            Quero falar sobre meu evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
