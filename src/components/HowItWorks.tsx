import { MessageCircle, Search, FileText, ClipboardList, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    description: "Você fala com a Ana Júlia pelo WhatsApp e conta o sonho do seu evento.",
  },
  {
    icon: Search,
    title: "Diagnóstico do evento",
    description: "Entendemos o estilo, a data, o número de convidados e o nível de assessoria ideal.",
  },
  {
    icon: FileText,
    title: "Proposta personalizada",
    description: "Você recebe uma proposta clara, com escopo, etapas e investimento sob medida.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento e alinhamento",
    description: "Coordenamos fornecedores, cronograma e cada detalhe alinhado com você.",
  },
  {
    icon: Heart,
    title: "Execução no grande dia",
    description: "Cuidamos de tudo nos bastidores para você viver cada momento sem preocupação.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Como Funciona
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="premium-frame w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold-light/40 group-hover:border-gold transition-colors duration-500">
                <div className="premium-frame-inner w-full h-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-gold" strokeWidth={1} />
                </div>
              </div>
              <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-sans mb-3 block">
                0{index + 1}
              </span>
              <h3 className="font-serif text-xl font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
