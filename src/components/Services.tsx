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
    tag: "✦ Formaturas",
    title: "Cerimonial para Colações de Grau",
    bullets: [
      "Planejamento do roteiro e protocolo da solenidade",
      "Coordenação de entradas, homenagens e pronunciamentos",
      "Alinhamento com comissão, instituição e fornecedores",
      "Organização de palco, convidados e equipe de apoio",
      "Acompanhamento da cerimônia do início ao encerramento",
    ],
    cta: "Quero organizar minha colação",
    msg: "Olá Ana Júlia! Quero informações sobre cerimonial para colação de grau.",
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

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-service on-dark p-8 md:p-10 flex flex-col"
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
                className="btn-whatsapp w-full"
              >
                <span className="wa-icon">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </span>
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
