import storyImage from "@/assets/anju-3.jpg";
import anjuImage from "@/assets/anju-1.jpg";

const Storytelling = () => {
  return (
    <section className="relative">
      {/* Full-width image with quote */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={storyImage}
          alt="Momento do casamento"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-warm-dark/50" />

        {/* Decorative border inside parallax */}
        <div className="absolute inset-6 md:inset-12 border border-champagne/10 pointer-events-none" />
        <div className="absolute top-6 left-6 md:top-12 md:left-12 w-8 h-8 border-t-2 border-l-2 border-champagne/25 pointer-events-none" />
        <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-8 h-8 border-b-2 border-r-2 border-champagne/25 pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <div className="premium-divider mb-6">
              <div className="ornament" style={{ borderColor: 'hsl(var(--champagne) / 0.5)' }} />
            </div>
            <p className="font-serif italic text-cream text-2xl md:text-4xl font-light leading-relaxed">
              "Cada detalhe importa. Cada momento é único. Cada casamento é uma obra de arte."
            </p>
            <div className="w-12 h-px bg-champagne/50 mx-auto mt-8" />
            <p className="text-champagne/80 text-xs tracking-[0.3em] uppercase mt-6 font-sans">
              Ana Júlia
            </p>
            <div className="premium-divider mt-6">
              <div className="ornament" style={{ borderColor: 'hsl(var(--champagne) / 0.5)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Authority section */}
      <div className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="premium-img-frame w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 p-[3px]">
            <img src={anjuImage} alt="Ana Júlia" className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="font-serif text-3xl font-light text-foreground mb-6">
            Sua Tranquilidade é Minha Prioridade
          </h3>
          <div className="premium-divider mb-6">
            <div className="ornament" />
          </div>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Com anos de experiência em cerimonial e assessoria, já ajudei dezenas de noivas
            a realizarem o casamento dos seus sonhos. Cada evento é tratado com dedicação
            exclusiva, atenção aos detalhes e muito amor pelo que faço.
          </p>

          {/* Vídeo emocional — noivas & casamentos */}
          <div className="relative max-w-3xl mx-auto mt-10">
            <div className="absolute -inset-3 md:-inset-4 border border-gold-light/25 rounded-3xl pointer-events-none" />
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
                src="/videos/apresentacao.mp4"
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto block"
              >
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            <p className="text-muted-foreground/80 text-[11px] tracking-[0.25em] uppercase mt-6 font-sans">
              Bastidores · Noivas & Casamentos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
