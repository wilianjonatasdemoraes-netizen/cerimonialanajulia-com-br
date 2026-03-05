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
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Serviços
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Como Posso Ajudar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 md:p-10 border border-border hover:border-gold-light/50 transition-all duration-500 group text-center"
            >
              <s.icon className="w-8 h-8 mx-auto text-gold mb-6" strokeWidth={1} />
              <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    className="text-xs tracking-[0.1em] text-muted-foreground uppercase"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
