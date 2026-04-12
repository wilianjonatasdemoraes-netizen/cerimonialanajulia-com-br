import anjuImage from "@/assets/anju-1.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with premium frame */}
          <div className="relative">
            <div className="premium-img-frame">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={anjuImage}
                  alt="Ana Júlia - Cerimonialista"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-gold-light/20 float-element" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-light/15 float-element" style={{ animationDelay: '2s' }} />
          </div>

          {/* Text */}
          <div>
            <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
              Sobre
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Ana Júlia
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-gold-light/60 to-transparent mb-8" />
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-[15px]">
              <p>
                Cada casamento é uma história única. E a minha missão é garantir que você viva 
                cada segundo dessa história — sem preocupações, sem imprevistos, sem olhar para o relógio.
              </p>
              <p>
                Sou Ana Júlia, cerimonialista apaixonada pelo que faz. Organizo cada detalhe 
                com carinho e precisão para que o seu dia seja exatamente como você sonhou. 
                Do primeiro contato até o último brinde, estou ao seu lado.
              </p>
              <p>
                Acredito que todo casal merece viver o momento mais importante de suas vidas 
                com tranquilidade e emoção. É isso que entrego: a segurança de saber que 
                alguém cuida de tudo enquanto vocês cuidam um do outro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
