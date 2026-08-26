import { Helmet } from "react-helmet-async";
import { Instagram, MessageCircle, Phone, MapPin, Clock, Mail, Star, Facebook, MapPinned } from "lucide-react";

const socialLinks = [
  {
    label: "WhatsApp",
    handle: "(37) 99926-5472",
    href: "https://wa.me/5537999265472?text=Ol%C3%A1%20Ana%20J%C3%BAlia%2C%20gostaria%20de%20um%20or%C3%A7amento.",
    Icon: MessageCircle,
    ariaLabel: "Falar no WhatsApp com Ana Júlia Cerimonialista",
  },
  {
    label: "Instagram",
    handle: "@anajuliacerimonialista",
    href: "https://www.instagram.com/Anajuliacerimonialista",
    Icon: Instagram,
    ariaLabel: "Instagram da Ana Júlia Cerimonialista",
  },
  {
    label: "Facebook",
    handle: "/anajuliacerimonialista",
    href: "https://www.facebook.com/anajuliacerimonialista",
    Icon: Facebook,
    ariaLabel: "Página no Facebook da Ana Júlia Cerimonialista",
  },
  {
    label: "Google Business",
    handle: "Avaliações 5★",
    href: "https://www.google.com/search?q=Ana+J%C3%BAlia+Cerimonialista+Par%C3%A1+de+Minas",
    Icon: MapPinned,
    ariaLabel: "Perfil no Google Business da Ana Júlia Cerimonialista",
  },
];

const cidades = [
  "Pará de Minas",
  "Divinópolis",
  "Itaúna",
  "Nova Serrana",
  "Carmo do Cajuru",
  "Pitangui",
  "Belo Horizonte",
  "São José da Varginha",
  "Onça de Pitangui",
  "Conceição do Pará",
];

const servicos = [
  { label: "Cerimonial de Casamento", href: "/cerimonial-de-casamento" },
  { label: "Assessoria de Casamento", href: "/assessoria-de-casamento" },
  { label: "Cerimonial de Debutantes", href: "/cerimonial-debutantes" },
  { label: "Festa de 15 Anos", href: "/festa-de-15-anos" },
  { label: "Casamentos Reais", href: "/casamentos-reais" },
  { label: "Blog", href: "/blog" },
];

const cidadesLinks = [
  { label: "Cerimonialista em Pará de Minas", href: "/cerimonial-para-de-minas" },
  { label: "Cerimonialista em Divinópolis", href: "/cerimonial-divinopolis" },
  { label: "Cerimonialista em Nova Serrana", href: "/cerimonial-nova-serrana" },
  { label: "Cerimonialista em Itaúna", href: "/cerimonial-itauna" },
];

const Footer = () => {
  const footerJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cerimonialcasamentos.com.br/#footer-business",
    name: "Ana Júlia Cerimonial",
    image: "https://cerimonialcasamentos.com.br/og.jpg",
    url: "https://cerimonialcasamentos.com.br/",
    telephone: "+55-37-99926-5472",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pará de Minas",
      addressRegion: "MG",
      postalCode: "35660-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -19.8606,
      longitude: -44.6083,
    },
    areaServed: cidades.map((c) => ({ "@type": "City", name: c })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: socialLinks.map((s) => s.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
  };

  return (
    <footer className="bg-warm-dark py-20 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(footerJsonLd)}</script>
      </Helmet>

      {/* decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border border-gold/60 bg-warm-dark" />

      <div className="container max-w-6xl mx-auto px-6 relative">
        {/* Top CTA strip */}
        <div className="text-center mb-14">
          <p className="text-gold/70 text-[10px] tracking-[0.35em] uppercase font-sans mb-3">
            Cerimonial Premium em Pará de Minas e Região
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-cream font-light italic">
            Vamos planejar o seu <span className="text-shimmer">grande dia</span>?
          </h3>
          <a
            href="https://wa.me/5537999265472?text=Ol%C3%A1%20Ana%20J%C3%BAlia%2C%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-6"
          >
            <span className="wa-icon">
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
            </span>
            Solicitar orçamento pelo WhatsApp
          </a>

          {/* Social authority row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socialLinks.map(({ label, handle, href, Icon, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 border border-gold/25 hover:border-gold/60 bg-warm-dark/40 hover:bg-warm-dark/70 backdrop-blur-sm transition-all duration-500"
              >
                <Icon
                  className="w-4 h-4 text-gold/80 group-hover:text-gold transition-colors"
                  strokeWidth={1.2}
                />
                <span className="text-left leading-tight">
                  <span className="block text-cream text-[10px] tracking-[0.25em] uppercase font-sans">
                    {label}
                  </span>
                  <span className="block text-cream/55 group-hover:text-cream/80 text-[11px] font-light transition-colors">
                    {handle}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="section-separator on-dark mb-14" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-serif text-3xl tracking-wider mb-2">
              <span className="text-shimmer">Ana Júlia</span>
            </p>
            <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Cerimonial · Casamentos · Eventos
            </p>
            <p className="text-cream/60 text-sm font-light leading-relaxed mb-5">
              Cerimonialista referência em <strong className="text-cream/80 font-normal">Pará de Minas — MG</strong>,
              especializada em casamentos sofisticados, debutantes e eventos premium em
              toda a região centro-oeste de Minas Gerais.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
              ))}
              <span className="text-cream/60 text-xs ml-2 font-light">
                5.0 · 47 avaliações no Google
              </span>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-2">
            <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Início", href: "/" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Dúvidas", href: "#duvidas" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-cream/55 hover:text-gold text-sm font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="md:col-span-3">
            <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Serviços
            </p>
            <ul className="space-y-2.5">
              {servicos.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-cream/55 hover:text-gold text-sm font-light transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato + Atendimento */}
          <div className="md:col-span-3">
            <p className="text-gold/80 text-[10px] tracking-[0.3em] uppercase font-sans mb-5">
              Contato
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="https://wa.me/5537999265472"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar no WhatsApp com Ana Júlia Cerimonialista"
                  className="inline-flex items-center gap-2 text-cream/65 hover:text-gold text-sm font-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold/70" strokeWidth={1.2} />
                  (37) 99926-5472
                </a>
              </li>
              <li>
                <a
                  href="tel:+5537999265472"
                  aria-label="Ligar para Ana Júlia Cerimonialista"
                  className="inline-flex items-center gap-2 text-cream/65 hover:text-gold text-sm font-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold/70" strokeWidth={1.2} />
                  Ligar agora
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/Anajuliacerimonialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Ana Júlia Cerimonialista"
                  className="inline-flex items-center gap-2 text-cream/65 hover:text-gold text-sm font-light transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gold/70" strokeWidth={1.2} />
                  @anajuliacerimonialista
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-cream/65 text-sm font-light">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/70" strokeWidth={1.2} />
                <span>
                  Pará de Minas — MG
                  <br />
                  <span className="text-cream/40 text-xs">e toda a região</span>
                </span>
              </li>
              <li className="inline-flex items-start gap-2 text-cream/65 text-sm font-light">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/70" strokeWidth={1.2} />
                <span>
                  Seg. a Sáb. · 09h às 19h
                  <br />
                  <span className="text-cream/40 text-xs">Resposta em até 1h útil</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO local — cidades atendidas */}
        <div className="border-t border-gold/15 pt-8 mb-8">
          <p className="text-gold/70 text-[10px] tracking-[0.3em] uppercase font-sans mb-4 text-center md:text-left">
            Cidades atendidas
          </p>
          <p className="text-cream/45 text-xs md:text-sm font-light leading-relaxed text-center md:text-left">
            Cerimonialista e assessoria de casamento em{" "}
            {cidades.map((c, i) => (
              <span key={c}>
                <span className="text-cream/65">{c}</span>
                {i < cidades.length - 1 ? " · " : " "}
              </span>
            ))}
            e demais cidades do <span className="text-cream/65">Centro-Oeste de Minas Gerais</span>.
          </p>
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-2">
            {cidadesLinks.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="text-cream/55 hover:text-gold text-xs font-light transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>

        <div className="premium-divider mb-6">
          <div className="ornament" style={{ borderColor: "hsl(var(--gold) / 0.4)" }} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-cream/30 text-[10px] tracking-[0.2em] uppercase font-sans">
            © 2026 Ana Júlia Cerimonial · CNPJ sob consulta · Pará de Minas — MG
          </p>
          <p className="text-cream/30 text-[10px] tracking-[0.2em] uppercase font-sans">
            Site desenvolvido por WJM Sites / WS Center
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
