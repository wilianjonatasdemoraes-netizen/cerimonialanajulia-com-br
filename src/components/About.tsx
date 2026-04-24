import anjuImage from "@/assets/anju-1.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="premium-img-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={anjuImage}
                  alt="Ana Júlia - Cerimonialista profissional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold-light/20 float-element" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-light/15 float-element" style={{ animationDelay: '2s' }} />
          </div>

          <div>
            <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
              Sobre
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4 leading-tight">
              Ana Júlia
            </h2>
            <p className="text-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-6">
              Cerimonialista & Organizadora de Eventos
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-gold-light/60 to-transparent mb-8" />
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-[15px]">
              <p>
                Ana Júlia atua com organização, sensibilidade e presença estratégica para transformar
                eventos em momentos memoráveis.
              </p>
              <p>
                Seu trabalho une cuidado humano, planejamento e execução profissional para que anfitriões,
                noivos e famílias vivam o evento com tranquilidade — enquanto cada detalhe acontece com
                segurança, beleza e harmonia.
              </p>
              <p>
                Mais do que coordenar, Ana Júlia conduz. E é essa direção atenta que transforma eventos
                em experiências verdadeiramente inesquecíveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
