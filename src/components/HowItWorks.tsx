import { ClipboardList, Users, Calendar, Heart } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Planejamento",
    description: "Entendemos os seus sonhos e criamos um plano detalhado para transformá-los em realidade.",
  },
  {
    icon: Users,
    title: "Coordenação de Fornecedores",
    description: "Selecionamos e gerenciamos os melhores profissionais para o seu evento.",
  },
  {
    icon: Calendar,
    title: "Cronograma",
    description: "Organizamos cada minuto do seu dia com precisão e fluidez.",
  },
  {
    icon: Heart,
    title: "Execução",
    description: "No grande dia, cuidamos de tudo para que vocês vivam cada momento.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Como Funciona
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-gold-light/40 group-hover:border-gold transition-colors duration-500">
                <step.icon className="w-6 h-6 text-gold" strokeWidth={1} />
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
