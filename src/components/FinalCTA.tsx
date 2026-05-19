const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <div className="premium-divider mb-8">
          <div className="ornament" />
        </div>
        <p className="text-muted-foreground text-[11px] tracking-[0.35em] uppercase font-sans mb-6">
          O próximo capítulo é seu
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
          Seu momento merece ser <span className="text-shimmer italic">inesquecível</span>.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Fale agora com nossa equipe e transforme seu sonho em realidade.
          Atendimento personalizado, sigiloso e sem compromisso.
        </p>
        <a
          href="https://wa.me/5537999265472?text=Olá%20Ana%20Júlia!%20Quero%20começar%20a%20planejar%20o%20meu%20evento."
          target="_blank"
          rel="noopener noreferrer"
          data-event="final_cta_whatsapp_click"
          className="btn-premium inline-flex items-center justify-center gap-2 bg-[#25D366]/95 hover:bg-[#25D366] text-white px-10 py-5 text-[11px] tracking-[0.3em] uppercase font-sans border-white/20"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
          </svg>
          Quero começar
        </a>
        <p className="text-muted-foreground/70 text-[10px] tracking-[0.25em] uppercase mt-6 font-sans">
          Resposta em poucas horas · Atendimento Seg–Sáb · 09h às 19h
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
