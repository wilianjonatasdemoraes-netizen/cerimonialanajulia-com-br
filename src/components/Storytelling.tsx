import weddingGroom from "@/assets/wedding-groom.jpg";
import anjuImage from "@/assets/anju-1.jpg";

const Storytelling = () => {
  return (
    <section className="relative">
      {/* Full-width image with quote */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={weddingGroom}
          alt="Momento do casamento"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-warm-dark/50" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <p className="font-serif italic text-cream text-2xl md:text-4xl font-light leading-relaxed">
              "Cada detalhe importa. Cada momento é único. Cada casamento é uma obra de arte."
            </p>
            <div className="w-12 h-px bg-champagne/50 mx-auto mt-8" />
            <p className="text-champagne/80 text-xs tracking-[0.3em] uppercase mt-6 font-sans">
              Ana Júlia
            </p>
          </div>
        </div>
      </div>

      {/* Authority section */}
      <div className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-8 border-2 border-gold-light/30">
            <img src={anjuImage} alt="Ana Júlia" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-serif text-3xl font-light text-foreground mb-6">
            Sua Tranquilidade é Minha Prioridade
          </h3>
          <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-2xl mx-auto">
            Com anos de experiência em cerimonial e assessoria, já ajudei dezenas de casais 
            a realizarem o casamento dos seus sonhos. Cada evento é tratado com dedicação 
            exclusiva, atenção aos detalhes e muito amor pelo que faço.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
