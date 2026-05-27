import { Heart, Compass, Sparkles, Eye, MessageSquare, Shield, Crown } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Atendimento humanizado", text: "Escuta atenta e proximidade real do primeiro contato ao último brinde." },
  { icon: Compass, title: "Organização estratégica", text: "Planejamento estruturado com cronograma, checklist e prazos claros." },
  { icon: Sparkles, title: "Cuidado com cada detalhe", text: "Nada passa despercebido — do laço do buquê à última lembrancinha." },
  { icon: Eye, title: "Presença nos bastidores", text: "Equipe atuando nos bastidores para que tudo flua sem que você perceba." },
  { icon: MessageSquare, title: "Comunicação com fornecedores", text: "Alinhamento direto e contínuo com toda a equipe envolvida." },
  { icon: Shield, title: "Tranquilidade para a família", text: "Noivos, debutantes e familiares livres de preocupações no grande dia." },
  { icon: Crown, title: "Experiência premium aos convidados", text: "Recepção elegante, orientação clara e uma sensação de cuidado em cada detalhe." },
];

const WhyChoose = () => {
  return (
    <section id="autoridade" className="py-24 md:py-32 bg-warm-dark">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Autoridade & confiança ✦
          </p>
          <h2 className="font-serif italic font-light text-cream leading-[1.1] text-[32px] md:text-[48px]">
            Por que escolher{" "}
            <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>
              Ana Júlia Cerimonialista
            </span>
            ?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-7 transition-all duration-500 hover:-translate-y-1"
              style={{
                borderRadius: "6px",
                border: "1px solid hsl(var(--gold) / 0.3)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div
                className="w-12 h-12 mb-5 flex items-center justify-center"
                style={{ background: "hsl(var(--gold) / 0.15)", borderRadius: "50%" }}
              >
                <r.icon className="w-5 h-5" style={{ color: "hsl(var(--gold))" }} strokeWidth={1.4} />
              </div>
              <h3 className="font-serif text-cream text-[19px] font-light mb-2 leading-snug">
                {r.title}
              </h3>
              <p className="font-sans font-light text-[14px] leading-relaxed text-cream/75">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
