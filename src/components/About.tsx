import anjuImage from "@/assets/anju-1.jpg";

const ABOUT_WHATSAPP =
  "https://wa.me/5537999265472?text=" +
  encodeURIComponent("Olá Ana Júlia! Quero falar diretamente com você sobre o meu evento.");

const About = () => {
  return (
    <section
      id="sobre"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--secondary))" }}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: "2px",
                boxShadow: "0 40px 80px -25px rgba(193,160,110,0.3)",
              }}
            >
              <img
                src={anjuImage}
                alt="Ana Júlia - Cerimonialista profissional em Pará de Minas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-28 h-28 border-r border-b"
              style={{ borderColor: "hsl(var(--gold) / 0.6)" }}
            />
          </div>

          {/* Text */}
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "hsl(var(--gold))" }}
            >
              ✦ Conheça quem vai cuidar do seu dia ✦
            </p>
            <h2
              className="font-serif italic font-light leading-[1.1] mb-8 text-[34px] md:text-[48px]"
              style={{ color: "hsl(var(--warm-dark))" }}
            >
              Cuidado em cada detalhe,
              <br />
              emoção em <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>memórias inesquecíveis</span>.
            </h2>

            <div className="space-y-5 font-sans font-light text-[16px] leading-[1.75]" style={{ color: "hsl(var(--body-text))" }}>
              <p>
                Ana Júlia começou no mundo dos eventos por amor — amor por
                pessoas, por detalhes, por aquele momento em que tudo se encaixa
                e as lágrimas de alegria escorrem naturalmente.
              </p>
              <p>
                Ana Júlia e sua equipe trabalham para transformar cada evento em uma experiência bem planejada, com atenção às pessoas, aos detalhes e à tranquilidade de quem está celebrando.
              </p>
            </div>

            <div className="my-8 h-px w-full" style={{ background: "hsl(var(--gold) / 0.4)" }} />

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              <div className="text-sm font-sans font-light" style={{ color: "hsl(var(--body-text))" }}>
                <span className="block text-base mb-1">📍</span>
                Pará de Minas & região
              </div>
              <div className="text-sm font-sans font-light" style={{ color: "hsl(var(--body-text))" }}>
                <span className="block text-base mb-1">✦</span>
                Planejamento personalizado
              </div>
              <div className="text-sm font-sans font-light" style={{ color: "hsl(var(--body-text))" }}>
                <span className="block text-base mb-1">💬</span>
                Atendimento humanizado
              </div>
            </div>

            <a
              href={ABOUT_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              data-event="about_whatsapp_click"
              className="inline-flex items-center justify-center px-8 py-4 text-[11px] md:text-xs tracking-[0.22em] uppercase font-sans font-medium transition-all"
              style={{
                background: "hsl(var(--gold))",
                color: "hsl(var(--warm-dark))",
                boxShadow: "0 10px 30px -10px rgba(201,169,110,0.45)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--bronze))")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--gold))")}
            >
              Falar com a Ana Júlia agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
