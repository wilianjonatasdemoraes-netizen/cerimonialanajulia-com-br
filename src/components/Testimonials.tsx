import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ela cuidou de tudo com muita atenção. Pudemos viver cada momento sem precisar nos preocupar com nada — tudo estava nas mãos certas.",
    author: "Camila & Thiago",
    role: "Casamento 2024",
  },
  {
    text: "Nos sentimos seguros do início ao fim. Cada detalhe foi pensado, cada fornecedor alinhado. Um trabalho de altíssimo nível.",
    author: "Fernanda & Lucas",
    role: "Casamento 2024",
  },
  {
    text: "O evento fluiu com leveza e organização. Foi exatamente como sonhávamos — só que ainda melhor. Recomendo de olhos fechados.",
    author: "Juliana & Rafael",
    role: "Casamento 2023",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            O Que Dizem os Clientes
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="premium-card p-8 md:p-10 premium-frame"
            >
              <div className="premium-frame-inner h-full flex flex-col">
                <Quote className="w-6 h-6 text-gold-light mb-6" strokeWidth={1} />
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 italic font-serif flex-1">
                  "{t.text}"
                </p>
                <div>
                  <div className="w-8 h-px bg-gold-light/40 mb-4" />
                  <p className="text-foreground text-sm font-medium tracking-wide">
                    {t.author}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
