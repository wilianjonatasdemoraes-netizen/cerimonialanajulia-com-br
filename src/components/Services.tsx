import { Crown, Sparkles, CalendarHeart, ClipboardCheck, ScanLine, Gift } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Cerimonial de Casamento",
    description:
      "Direção completa do seu grande dia. Coordenação de fornecedores, cronograma e supervisão para que tudo aconteça com elegância.",
  },
  {
    icon: Sparkles,
    title: "Cerimonial de 15 Anos",
    description:
      "Uma celebração única para a debutante. Organização e cuidado em cada detalhe para uma noite inesquecível.",
    featured: true,
  },
  {
    icon: CalendarHeart,
    title: "Organização de Eventos",
    description:
      "Eventos sociais e corporativos com planejamento estratégico, fornecedores selecionados e execução impecável.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessoria no Dia",
    description:
      "Para quem já organizou tudo e precisa de uma profissional preparada para conduzir o evento com tranquilidade.",
  },
  {
    icon: Gift,
    title: "Lista de Presença Digital",
    description:
      "Sistema moderno para envio de convites, confirmação de presença (RSVP) e gestão dos convidados em um só lugar.",
  },
  {
    icon: ScanLine,
    title: "Check-in de Convidados",
    description:
      "Recepção organizada com check-in digital, controle de mesas e atendimento atencioso desde a chegada.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
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
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-2xl mx-auto mt-6">
            Cada evento merece atenção exclusiva. Escolha o serviço ideal para a sua celebração.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`premium-card p-8 md:p-10 premium-frame text-center ${
                s.featured ? 'ring-1 ring-gold-light/30' : ''
              }`}
            >
              <div className="premium-frame-inner h-full flex flex-col items-center">
                {s.featured && (
                  <span className="text-[9px] tracking-[0.3em] uppercase text-gold font-sans mb-4 px-4 py-1 border border-gold-light/30">
                    Destaque
                  </span>
                )}
                <div className="w-14 h-14 flex items-center justify-center border border-gold-light/30 mb-6">
                  <s.icon className="w-7 h-7 text-gold" strokeWidth={1} />
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground mb-4">
                  {s.title}
                </h3>
                <div className="w-8 h-px bg-gold-light/40 mb-4" />
                <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1">
                  {s.description}
                </p>
                <a
                  href="#contato"
                  className="mt-6 text-[10px] tracking-[0.25em] uppercase text-gold hover:text-foreground transition-colors font-sans"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
