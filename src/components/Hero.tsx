import logoImage from "@/assets/ana-julia-wordmark.svg";

const WHATSAPP_URL =
  "https://wa.me/5537999265472?text=" +
  encodeURIComponent(
    "Olá, Ana Júlia! Vi seu site e gostaria de receber uma proposta para cerimonial/organização do meu evento."
  );

const Hero = () => {
  return (
    <section
      id="inicio"
      className="cinema-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#071426" }}
    >
      <video
        className="cinema-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/11037944/11037944-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="cinema-hero__veil" aria-hidden="true" />
      <div className="cinema-hero__glow" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 cinema-hero__content">
        <p className="cinema-kicker mb-7">Uma história de amor merece um cenário inesquecível</p>
        <img
          src={logoImage}
          alt="Ana Júlia Cerimonial e Eventos"
          width={760}
          height={260}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-[280px] md:w-[440px] lg:w-[560px] h-auto object-contain mb-10 cinema-logo"
        />

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold/70" />
          <p
            className="font-sans text-[10px] md:text-[11px] tracking-[0.35em] uppercase"
            style={{ color: "hsl(var(--gold))" }}
          >
            ✦ Cerimonial Premium · Pará de Minas · Divinópolis · Nova Serrana · Itaúna ✦
          </p>
          <span className="h-px w-10 bg-gold/70" />
        </div>

        <h1 className="font-serif italic font-light text-cream leading-[1.08] mb-8 text-[34px] md:text-[54px] lg:text-[60px] cinema-title">
          Cerimonial de Casamento
          <br className="hidden md:block" />
          {" "}em <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>Pará de Minas</span>
        </h1>

        <p className="font-sans font-light text-cream/90 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Planejamento, organização e execução de casamentos, festas de 15 anos,
          colações de grau e eventos corporativos — para que você viva o seu grande dia
          com tranquilidade, segurança e emoção.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="hero_whatsapp_click"
            className="btn-whatsapp btn-lg w-full sm:w-auto"
          >
            <span className="wa-icon" aria-hidden="true">♡</span>
            💬 Quero garantir minha data agora
          </a>
          <a
            href="#planos"
            data-event="hero_primary_click"
            className="btn-outline-gold w-full sm:w-auto cinema-outline"
          >
            📋 Ver planos e disponibilidade
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-cream/90 text-[11px] md:text-xs font-sans max-w-3xl">
          <span className="cinema-pill">Planejamento personalizado</span>
          <span className="cinema-pill">Coordenação profissional</span>
          <span className="cinema-pill">Atendimento próximo</span>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition"
        aria-label="Rolar para baixo"
      >
        <span className="text-cream text-[10px] tracking-[0.3em] uppercase font-sans">Descubra</span>
        <span className="text-cream text-xl animate-bounce">↓</span>
      </a>
      <span className="cinema-frame-line" aria-hidden="true" />
    </section>
  );
};

export default Hero;
