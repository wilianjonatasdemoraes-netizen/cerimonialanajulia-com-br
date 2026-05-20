const WHATSAPP_BASE = "https://wa.me/5537999265472?text=";

const services = [
  {
    tag: "✦ Mais solicitado",
    title: "Assessoria Completa para Casamentos",
    bullets: [
      "Assessoria do planejamento ao dia do evento",
      "Gestão de todos os fornecedores",
      "Cronograma e coordenação completa",
      "Day-off coordination exclusiva",
      "Suporte emocional à noiva",
    ],
    cta: "Quero para meu casamento",
    msg: "Olá Ana Júlia! Quero a assessoria completa para o meu casamento.",
  },
  {
    tag: "✦ Especial 15 anos",
    title: "Cerimonial para Debutantes",
    bullets: [
      "Conceito e planejamento da festa",
      "Coordenação completa no grande dia",
      "Coreografias, valsa e roteiro emocional",
      "Gestão de buffet, foto e decoração",
      "Equipe dedicada à debutante",
    ],
    cta: "Quero para a debutante",
    msg: "Olá Ana Júlia! Quero o cerimonial para a festa de 15 anos.",
  },
  {
    tag: "✦ Sob medida",
    title: "Eventos Sociais & Corporativos",
    bullets: [
      "Planejamento estratégico do evento",
      "Curadoria de fornecedores premium",
      "Roteiro detalhado e direção no dia",
      "Gestão de convidados e RSVP digital",
      "Recepção e check-in profissional",
    ],
    cta: "Quero para meu evento",
    msg: "Olá Ana Júlia! Quero falar sobre um evento social/corporativo.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-warm-dark">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Nossos serviços ✦
          </p>
          <h2 className="font-serif italic font-light text-cream leading-[1.1] text-[34px] md:text-[48px]">
            Assessoria feita para
            <br />
            momentos que <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>não se repetem</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="p-8 md:p-10 flex flex-col transition-all duration-500"
              style={{
                borderRadius: "2px",
                background: "hsl(var(--warm-dark))",
                border: "1px solid hsl(var(--gold) / 0.25)",
                boxShadow: "0 20px 60px -25px rgba(201,169,110,0.15)",
              }}
            >
              <span
                className="self-start text-[10px] tracking-[0.3em] uppercase font-sans mb-6 px-3 py-1"
                style={{ color: "hsl(var(--gold))", border: "1px solid hsl(var(--gold) / 0.4)" }}
              >
                {s.tag}
              </span>
              <h3 className="font-serif italic font-light text-cream leading-tight mb-6 text-[26px] md:text-[28px]">
                {s.title}
              </h3>
              <div className="h-px w-12 mb-6" style={{ background: "hsl(var(--gold) / 0.6)" }} />
              <ul className="space-y-3 mb-8 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-cream/80 font-sans font-light text-[14px] leading-relaxed">
                    <span className="mt-1" style={{ color: "hsl(var(--gold))" }}>·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_BASE + encodeURIComponent(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-4 text-[11px] tracking-[0.22em] uppercase font-sans font-medium transition-all"
                style={{
                  background: "hsl(var(--gold))",
                  color: "hsl(var(--warm-dark))",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--bronze))")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--gold))")}
              >
                {s.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
