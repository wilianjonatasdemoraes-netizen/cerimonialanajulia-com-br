import heroImage from "@/assets/wedding-sparklers.jpg";

const WHATSAPP_URL =
  "https://wa.me/5537999265472?text=" +
  encodeURIComponent(
    "Olá, Ana Júlia! Vi seu site e gostaria de receber uma proposta para cerimonial/organização do meu evento."
  );

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Background: video with image fallback */}
      <div className="absolute inset-0">
        <video
          src="/videos/apresentacao-geral.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,20,16,0.55)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up pt-24 pb-12">
        {/* Tag */}
        <div className="flex items-center justify-center gap-3 mb-8">
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
        <h1 className="font-serif italic font-light text-cream leading-[1.05] mb-8 text-[40px] md:text-[64px] lg:text-[72px]">
          O dia mais lindo
          <br />
          da sua vida,
          <br />
          organizado com <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>amor</span>.
        </h1>

        {/* Subhead */}
        <p className="font-sans font-light text-cream/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Assessoria completa para casamentos, debutantes e eventos únicos.
          <br className="hidden md:block" />
          Você curte cada momento. A gente cuida de tudo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="hero_whatsapp_click"
            className="inline-flex items-center justify-center px-8 py-4 text-[11px] md:text-xs tracking-[0.22em] uppercase font-sans font-medium w-full sm:w-auto transition-all duration-500"
            style={{
              background: "hsl(var(--gold))",
              color: "hsl(var(--warm-dark))",
              boxShadow: "0 10px 40px -10px rgba(201,169,110,0.5)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--bronze))")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--gold))")}
          >
            Agendar minha consultoria gratuita
          </a>
          <a
            href="#portfolio"
            data-event="hero_portfolio_click"
            className="inline-flex items-center justify-center px-8 py-4 text-[11px] md:text-xs tracking-[0.22em] uppercase font-sans border border-cream/70 text-cream w-full sm:w-auto hover:bg-cream/10 transition-colors"
          >
            Ver casamentos realizados ↓
          </a>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-cream/90 text-[11px] md:text-xs font-sans font-light">
          <span className="flex items-center gap-2">
            <span style={{ color: "hsl(var(--gold))" }}>♡</span> +127 casamentos
          </span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "hsl(var(--gold))" }}>★</span> 5.0 no Google
          </span>
          <span className="opacity-40">|</span>
          <span className="flex items-center gap-2">
            <span style={{ color: "hsl(var(--gold))" }}>✦</span> 8 anos de experiência
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
