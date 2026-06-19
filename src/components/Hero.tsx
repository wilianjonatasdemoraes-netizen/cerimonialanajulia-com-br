import logoImage from "@/assets/anaju-logo-fundo-verde.png.asset.json";
const logoUrl = logoImage.url;

const WHATSAPP_URL =
  "https://wa.me/5537999265472?text=" +
  encodeURIComponent(
    "Olá, Ana Júlia! Vi seu site e gostaria de receber uma proposta para cerimonial/organização do meu evento."
  );

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1B3A2F" }}
    >
      {/* Logo central — destaque principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-8">
        <img
          src={logoUrl}
          alt="Logo Ana Júlia Cerimonialista"
          className="w-[220px] md:w-[320px] lg:w-[400px] h-auto object-contain mb-10"
        />

        {/* Tag */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold/70" />
          <p
            className="font-sans text-[10px] md:text-[11px] tracking-[0.35em] uppercase"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Cerimonial Premium · Pará de Minas & Região ✦
          </p>
          <span className="h-px w-10 bg-gold/70" />
        </div>

        {/* H1 */}
        <h1 className="font-serif italic font-light text-cream leading-[1.08] mb-8 text-[34px] md:text-[54px] lg:text-[60px]">
          Cerimonial premium para casamentos
          <br className="hidden md:block" />
          {" "}e eventos <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>inesquecíveis</span>
          <br className="hidden md:block" />
          {" "}em Pará de Minas e região.
        </h1>

        {/* Subhead */}
        <p className="font-sans font-light text-cream/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Organização, sensibilidade e presença estratégica para que você
          viva o seu grande dia com tranquilidade, elegância e segurança.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="hero_whatsapp_click"
            className="btn-whatsapp btn-lg w-full sm:w-auto animate-pulse-soft"
          >
            <span className="wa-icon">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
            </span>
            💬 Quero garantir minha data agora
          </a>
          <a
            href="#planos"
            data-event="hero_primary_click"
            className="btn-outline-gold w-full sm:w-auto"
            style={{ color: "hsl(var(--cream))", borderColor: "hsl(var(--cream) / 0.55)" }}
          >
            📋 Ver planos e disponibilidade
          </a>
        </div>

        {/* Trust badges strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-cream/90 text-[11px] md:text-xs font-sans font-light max-w-3xl">
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full">
            <span style={{ color: "hsl(var(--gold))" }}>♡</span> +127 Casamentos Realizados
          </span>
          <a
            href="https://www.google.com/search?q=Ana+J%C3%BAlia+Cerimonial+Par%C3%A1+de+Minas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full hover:border-gold/60 transition-colors"
          >
            <span style={{ color: "hsl(var(--gold))" }}>★</span> 5.0 no Google
          </a>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full">
            <span style={{ color: "hsl(var(--gold))" }}>✦</span> 8 Anos de Experiência
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full">
            <span style={{ color: "hsl(var(--gold))" }}>🏆</span> Cerimonialista Certificada
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 rounded-full">
            <span style={{ color: "hsl(var(--gold))" }}>💬</span> Atendimento Humanizado
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#prova"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition"
        aria-label="Rolar para baixo"
      >
        <span className="text-cream text-[10px] tracking-[0.3em] uppercase font-sans">Descubra</span>
        <span className="text-cream text-xl animate-bounce">↓</span>
      </a>
    </section>
  );
};

export default Hero;
