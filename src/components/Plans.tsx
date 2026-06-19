const WHATSAPP_BASE = "https://wa.me/5537999265472?text=";

const plans = [
  {
    name: "Essencial",
    subtitle: "Assessoria do Dia",
    tag: "Para cerimônias simples",
    description:
      "Para quem já organizou o evento, mas precisa de uma equipe profissional para coordenar tudo no grande dia.",
    features: [
      "Reunião de alinhamento final",
      "Cronograma do dia do evento",
      "Coordenação no dia (até 10h)",
      "Recepção e orientação dos convidados",
      "Gestão dos fornecedores no local",
    ],
    msg: "Olá, Ana Júlia! Quero uma proposta para o Plano Essencial (Assessoria do Dia).",
    highlight: false,
  },
  {
    name: "Completo",
    subtitle: "Organização + Cerimonial",
    tag: "🏆 MAIS ESCOLHIDO",
    description:
      "Para quem deseja acompanhamento profissional desde o planejamento até a execução do evento.",
    features: [
      "Planejamento completo do evento",
      "Curadoria e gestão de fornecedores",
      "Acompanhamento de visitas e provas",
      "Cronograma detalhado e orçamento",
      "Cerimonial completo no grande dia",
    ],
    msg: "Olá, Ana Júlia! Quero uma proposta para o Plano Completo (Organização + Cerimonial).",
    highlight: true,
  },
  {
    name: "Premium",
    subtitle: "Experiência Exclusiva",
    tag: "Para eventos de alto padrão",
    description:
      "Para eventos que exigem atenção especial, cronograma detalhado, fornecedores alinhados e atendimento personalizado.",
    features: [
      "Assessoria 360° dedicada",
      "Conceito e direção criativa",
      "Fornecedores premium selecionados",
      "Equipe ampliada no dia do evento",
      "Atendimento VIP aos noivos e família",
    ],
    msg: "Olá, Ana Júlia! Quero uma proposta para o Plano Premium (Experiência Exclusiva).",
    highlight: false,
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Planos de assessoria ✦
          </p>
          <h2
            className="font-serif italic font-light leading-[1.1] text-[34px] md:text-[48px]"
            style={{ color: "hsl(var(--warm-dark))" }}
          >
            Escolha o nível de cuidado
            <br />
            <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>ideal para você</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((p) => (
            <article
              key={p.name}
              className="card-service p-8 md:p-10 flex flex-col"
              style={{
                borderColor: p.highlight
                  ? "hsl(var(--gold))"
                  : "hsl(var(--gold) / 0.25)",
                borderWidth: p.highlight ? "2px" : "1px",
                background: p.highlight ? "hsl(36 47% 95%)" : undefined,
                boxShadow: p.highlight
                  ? "0 30px 70px -25px rgba(201,169,110,0.55), 0 0 0 1px hsl(var(--gold) / 0.35)"
                  : undefined,
                transform: p.highlight ? "translateY(-6px) scale(1.02)" : undefined,
              }}
            >
              <span
                className={`self-start text-[10px] tracking-[0.3em] uppercase font-sans mb-5 px-3 py-1 ${p.highlight ? "" : "border border-gold/40"}`}
                style={{
                  background: p.highlight ? "hsl(var(--gold))" : "transparent",
                  color: p.highlight ? "hsl(var(--warm-dark))" : "hsl(var(--gold))",
                }}
              >
                {p.tag}
              </span>
              <p
                className="font-sans text-[11px] tracking-[0.3em] uppercase mb-2"
                style={{ color: "hsl(var(--gold))" }}
              >
                Plano {p.name}
              </p>
              <h3
                className="font-serif italic font-light leading-tight mb-4 text-[26px] md:text-[28px]"
                style={{ color: "hsl(var(--warm-dark))" }}
              >
                {p.subtitle}
              </h3>
              <div className="h-px w-12 mb-5" style={{ background: "hsl(var(--gold) / 0.6)" }} />
              <p
                className="font-sans font-light text-[14px] leading-relaxed mb-6"
                style={{ color: "hsl(var(--body-text))" }}
              >
                {p.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 font-sans font-light text-[14px] leading-relaxed"
                    style={{ color: "hsl(var(--body-text))" }}
                  >
                    <span className="mt-1" style={{ color: "hsl(var(--gold))" }}>✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_BASE + encodeURIComponent(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
                data-event={`plan_${p.name.toLowerCase()}_click`}
                className={p.highlight ? "btn-whatsapp w-full" : "btn-gold-premium w-full"}
              >
                {p.highlight && (
                  <span className="wa-icon">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                    </svg>
                  </span>
                )}
                Solicitar proposta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
