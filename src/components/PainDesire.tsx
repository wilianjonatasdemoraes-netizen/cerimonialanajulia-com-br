import { Clock, Users, AlertTriangle, MapPin, CalendarX, Heart } from "lucide-react";

const pains = [
  { icon: Clock, title: "Medo de atrasos na cerimônia", text: "O relógio corre e ninguém sabe quem deveria estar onde." },
  { icon: Users, title: "Fornecedores sem alinhamento", text: "Cada um chega de um jeito, sem cronograma compartilhado." },
  { icon: AlertTriangle, title: "Família resolvendo problemas", text: "Tios e padrinhos virando 'bombeiros' no dia do evento." },
  { icon: MapPin, title: "Convidados perdidos", text: "Sem recepção e sem orientação clara durante a festa." },
  { icon: CalendarX, title: "Cronograma confuso", text: "Falta de roteiro detalhado gera improvisos e estresse." },
  { icon: Heart, title: "Noiva ou debutante sem paz", text: "Quem deveria estar vivendo o sonho acaba apagando incêndios." },
];

const PainDesire = () => {
  return (
    <section id="dor" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Por que ter um cerimonial ✦
          </p>
          <h2
            className="font-serif italic font-light leading-[1.1] text-[32px] md:text-[48px]"
            style={{ color: "hsl(var(--warm-dark))" }}
          >
            Você quer viver o seu evento
            <br />
            ou <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>se preocupar</span> com ele?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-14">
          {pains.map((p) => (
            <div
              key={p.title}
              className="p-7 bg-card transition-all duration-500 hover:-translate-y-1"
              style={{
                borderRadius: "6px",
                border: "1px solid hsl(var(--gold) / 0.25)",
                boxShadow: "0 20px 50px -30px rgba(201,169,110,0.25)",
              }}
            >
              <div
                className="w-12 h-12 mb-5 flex items-center justify-center"
                style={{ background: "hsl(var(--gold) / 0.12)", borderRadius: "50%" }}
              >
                <p.icon className="w-5 h-5" style={{ color: "hsl(var(--gold))" }} strokeWidth={1.4} />
              </div>
              <h3
                className="font-serif text-[19px] font-light mb-2 leading-snug"
                style={{ color: "hsl(var(--warm-dark))" }}
              >
                {p.title}
              </h3>
              <p
                className="font-sans font-light text-[14px] leading-relaxed"
                style={{ color: "hsl(var(--body-text))" }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="max-w-3xl mx-auto text-center p-8 md:p-10"
          style={{
            border: "1px solid hsl(var(--gold) / 0.4)",
            borderRadius: "4px",
            background: "hsl(var(--secondary))",
          }}
        >
          <p
            className="font-serif italic text-[19px] md:text-[22px] leading-relaxed"
            style={{ color: "hsl(var(--warm-dark))" }}
          >
            Com uma assessoria profissional, cada detalhe é acompanhado para
            que você aproveite o momento com{" "}
            <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>
              leveza, segurança e emoção
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainDesire;
