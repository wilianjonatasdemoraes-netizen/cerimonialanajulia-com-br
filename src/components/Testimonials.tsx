import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ana é daquelas presenças que a gente confia de olhos fechados. Desde o primeiro momento, ela nos transmitiu segurança e tranquilidade. No dia do casamento, pudemos viver cada segundo sabendo que tudo estava em boas mãos.",
    author: "Camila & Thiago",
    role: "Noivos 2024",
  },
  {
    text: "Não tenho palavras para descrever o cuidado que Ana teve com cada detalhe. Ela transformou nossos sonhos em realidade, com muito amor e profissionalismo.",
    author: "Fernanda & Lucas",
    role: "Noivos 2024",
  },
  {
    text: "Contratar a Ana foi a melhor decisão que tomamos para o nosso casamento. Ela cuidou de absolutamente tudo e nos permitiu aproveitar cada momento.",
    author: "Juliana & Rafael",
    role: "Noivos 2023",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Depoimentos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            O Que Dizem os Noivos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background p-8 md:p-10 border border-border hover:border-gold-light/50 transition-colors duration-500"
            >
              <Quote className="w-6 h-6 text-gold-light mb-6" strokeWidth={1} />
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 italic font-serif">
                "{t.text}"
              </p>
              <div>
                <p className="text-foreground text-sm font-medium tracking-wide">
                  {t.author}
                </p>
                <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
