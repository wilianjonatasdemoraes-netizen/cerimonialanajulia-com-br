import { Crown, Gem, Sparkles } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Cerimonial do Dia",
    description:
      "Coordenação completa no dia do evento. Gerencio todos os fornecedores, resolvo imprevistos e garanto que tudo aconteça no tempo certo.",
    features: ["Coordenação de fornecedores", "Gestão do cronograma", "Supervisão completa"],
  },
  {
    icon: Gem,
    title: "Assessoria Completa",
    description:
      "Acompanhamento desde os primeiros passos do planejamento até a execução final. Estou ao seu lado em cada decisão.",
    features: ["Planejamento integral", "Curadoria de fornecedores", "Cerimonial do dia incluso"],
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Planejamento Personalizado",
    description:
      "Para casais que desejam um casamento único e sob medida. Criamos juntos cada detalhe da celebração dos seus sonhos.",
    features: ["Design exclusivo", "Experiência personalizada", "Gestão completa do evento"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Serviços
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Como Posso Ajudar
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`premium-card p-8 md:p-10 premium-frame text-center ${
                s.featured ? 'ring-1 ring-gold-light/30 scale-[1.02]' : ''
              }`}
            >
              <div className="premium-frame-inner h-full flex flex-col items-center">
                {s.featured && (
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-sans mb-4 px-4 py-1 border border-gold-light/30">
                    Mais Popular
                  </span>
                )}
                <div className="w-14 h-14 flex items-center justify-center border border-gold-light/30 mb-6">
                  <s.icon className="w-7 h-7 text-gold" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                  {s.title}
                </h3>
                <div className="w-8 h-px bg-gold-light/40 mb-4" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-xs tracking-[0.1em] text-muted-foreground uppercase flex items-center justify-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gold-light/60 rotate-45 inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
