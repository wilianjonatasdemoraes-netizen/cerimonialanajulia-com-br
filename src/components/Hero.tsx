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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#101C33" }}
    >
      {/* Logo central — destaque principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-8">
        <img
          src={logoImage}
          alt="Ana Júlia Cerimonial e Eventos"
          width={760}
          height={260}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-[280px] md:w-[440px] lg:w-[560px] h-auto object-contain mb-10"
        />

        {/* Tag */}
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

        {/* H1 */}
        <h1 className="font-serif italic font-light text-cream leading-[1.08] mb-8 text-[34px] md:text-[54px] lg:text-[60px]">
          Cerimonial de Casamento
          <br className="hidden md:block" />
          {" "}em <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>Pará de Minas</span>
        </h1>

        {/* Subhead */}
        <p className="font-sans font-light text-cream/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Cerimonialista em Pará de Minas e região: planejamento, organização e execução de
          casamentos, festas de 15 anos, colações de grau e eventos corporativos — para que você viva o seu grande dia com
          tranquilidade e segurança.
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

        <div className="flex flex-wrap items-center justify-center gap-3 text-cream/90 text-[11px] md:text-xs font-sans max-w-3xl">
          <span className="px-4 py-2 border border-gold/30 rounded-full">Planejamento personalizado</span>
          <span className="px-4 py-2 border border-gold/30 rounded-full">Coordenação profissional</span>
          <span className="px-4 py-2 border border-gold/30 rounded-full">Atendimento próximo</span>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
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
