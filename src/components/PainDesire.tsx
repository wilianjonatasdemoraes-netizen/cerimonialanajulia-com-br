import storyImage from "@/assets/anju-3.jpg";

const bullets = [
  "Coordenação completa do dia — você só aparece linda",
  "Gestão de fornecedores do início ao fim",
  "Cronograma milimétrico para tudo sair como planejado",
  "Suporte emocional antes, durante e depois do evento",
  "Consultoria de estética e conceito do evento",
];

const PainDesire = () => {
  return (
    <section className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6"
              style={{ color: "hsl(var(--gold))" }}
            >
              ✦ Para noivas que merecem o melhor ✦
            </p>
            <h2
              className="font-serif italic font-light leading-[1.1] mb-8 text-[36px] md:text-[52px]"
              style={{ color: "hsl(var(--warm-dark))" }}
            >
              Você não precisa carregar
              <br />
              o peso do <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>seu grande dia</span>.
            </h2>
            <p className="font-sans font-light text-[17px] leading-[1.7] mb-8" style={{ color: "hsl(var(--body-text))" }}>
              Sabemos como é: cada detalhe importa, cada fornecedor precisa
              ser perfeito, a família tem opiniões, e você ainda quer aproveitar
              cada segundo sem estresse. É exatamente para isso que existimos.
            </p>

            <ul className="space-y-4 mb-10">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span className="text-lg leading-none mt-1" style={{ color: "hsl(var(--gold))" }}>
                    ✦
                  </span>
                  <span className="font-sans font-light text-[15px] md:text-base" style={{ color: "hsl(var(--body-text))" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#como-funciona"
              className="inline-block font-sans text-[13px] tracking-[0.15em] uppercase border-b transition-colors"
              style={{ color: "hsl(var(--gold))", borderColor: "hsl(var(--gold))" }}
            >
              Quero conhecer como funciona →
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[3/4] overflow-hidden"
              style={{
                borderRadius: "2px",
                boxShadow: "0 30px 60px -20px rgba(193,160,110,0.25)",
              }}
            >
              <img
                src={storyImage}
                alt="Noiva em momento emocionado durante cerimônia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b"
              style={{ borderColor: "hsl(var(--gold) / 0.5)" }}
            />
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-l border-t"
              style={{ borderColor: "hsl(var(--gold) / 0.5)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainDesire;
