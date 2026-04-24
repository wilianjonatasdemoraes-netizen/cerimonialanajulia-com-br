const PainDesire = () => {
  return (
    <section className="py-24 md:py-32 bg-warm-dark relative overflow-hidden">
      {/* Decorative ornaments */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-champagne/10 float-element pointer-events-none" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border border-champagne/10 float-element pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-champagne/60 mb-6 font-sans">
          Por que ter um cerimonial
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-cream leading-tight mb-8">
          Um evento bonito não depende
          <br className="hidden md:block" /> apenas de <span className="text-shimmer italic">decoração</span>.
        </h2>
        <div className="premium-divider mb-8">
          <div className="ornament" />
        </div>
        <p className="text-champagne/80 text-base md:text-lg font-light leading-relaxed font-serif italic max-w-2xl mx-auto">
          Depende de organização, direção, controle de horários, fornecedores alinhados e uma pessoa
          preparada para resolver problemas antes que eles cheguem até você.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          {[
            "Sem preocupações no dia",
            "Imprevistos resolvidos por nós",
            "Você presente em cada momento",
          ].map((t) => (
            <div
              key={t}
              className="px-5 py-4 border border-champagne/15 bg-warm-dark/40 backdrop-blur-sm"
            >
              <span className="text-champagne text-[11px] tracking-[0.2em] uppercase font-sans">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainDesire;
