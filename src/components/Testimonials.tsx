import { Quote, Star, MapPin } from "lucide-react";

const testimonials = [
  {
    text: "Ela cuidou de tudo com muita atenção. Pudemos viver cada momento sem precisar nos preocupar com nada — tudo estava nas mãos certas.",
    author: "Camila & Thiago",
    role: "Casamento • 2024",
    location: "Pará de Minas, MG",
  },
  {
    text: "Nos sentimos seguros do início ao fim. Cada detalhe foi pensado, cada fornecedor alinhado. Um trabalho de altíssimo nível.",
    author: "Fernanda & Lucas",
    role: "Casamento • 2024",
    location: "Divinópolis, MG",
  },
  {
    text: "O evento fluiu com leveza e organização. Foi exatamente como sonhávamos — só que ainda melhor. Recomendo de olhos fechados.",
    author: "Juliana & Rafael",
    role: "Casamento • 2023",
    location: "Itaúna, MG",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4" aria-label="Avaliação 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Prova social
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Histórias que <span className="italic text-shimmer">emocionam</span>
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-2xl mx-auto mt-6">
            Avaliações reais de casais e famílias que confiaram seus momentos mais especiais ao nosso cerimonial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="premium-card p-8 md:p-10 premium-frame"
            >
              <div className="premium-frame-inner h-full flex flex-col">
                <Stars />
                <Quote className="w-5 h-5 text-gold-light mb-4" strokeWidth={1} />
                <p className="text-foreground/80 text-sm font-light leading-relaxed mb-8 italic font-serif flex-1">
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
                  <p className="text-muted-foreground/80 text-[11px] mt-2 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" strokeWidth={1.4} />
                    {t.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-gold-light/30 bg-background/50">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <span className="text-foreground text-sm font-medium">5,0</span>
            <span className="text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
              · 47 avaliações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
