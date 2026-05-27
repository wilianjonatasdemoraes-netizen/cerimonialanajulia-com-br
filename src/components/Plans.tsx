const WHATSAPP_BASE = "https://wa.me/5537999265472?text=";

const plans = [
  {
    name: "Essencial",
    subtitle: "Assessoria do Dia",
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
              className="p-8 md:p-10 flex flex-col transition-all duration-500 bg-card"
              style={{
                borderRadius: "4px",
                border: p.highlight
                  ? "1.5px solid hsl(var(--gold))"
                  : "1px solid hsl(var(--gold) / 0.25)",
                boxShadow: p.highlight
                  ? "0 30px 70px -25px rgba(201,169,110,0.45)"
                  : "0 20px 60px -25px rgba(201,169,110,0.15)",
                transform: p.highlight ? "translateY(-6px)" : undefined,
              }}
            >
              {p.highlight && (
                <span
                  className="self-start text-[10px] tracking-[0.3em] uppercase font-sans mb-5 px-3 py-1"
                  style={{
                    background: "hsl(var(--gold))",
                    color: "hsl(var(--warm-dark))",
                  }}
                >
                  Mais escolhido
                </span>
              )}
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
                className="inline-flex items-center justify-center w-full px-6 py-4 text-[11px] tracking-[0.22em] uppercase font-sans font-medium transition-all"
                style={{
                  background: p.highlight ? "hsl(var(--gold))" : "transparent",
                  color: p.highlight ? "hsl(var(--warm-dark))" : "hsl(var(--gold))",
                  border: "1px solid hsl(var(--gold))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(var(--gold))";
                  e.currentTarget.style.color = "hsl(var(--warm-dark))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = p.highlight ? "hsl(var(--gold))" : "transparent";
                  e.currentTarget.style.color = p.highlight ? "hsl(var(--warm-dark))" : "hsl(var(--gold))";
                }}
              >
                Solicitar proposta →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
