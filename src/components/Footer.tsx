import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-dark py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl tracking-wider mb-3">
              <span className="text-shimmer">Ana Júlia</span>
            </p>
            <p className="text-champagne/60 text-[11px] tracking-[0.2em] uppercase font-sans mb-4">
              Cerimonial Premium
            </p>
            <p className="text-champagne/50 text-sm font-light leading-relaxed">
              Assessoria sofisticada para casamentos, debutantes e eventos especiais em Pará de Minas e região.
            </p>
          </div>

          {/* Menu */}
          <div>
            <p className="text-champagne/80 text-[11px] tracking-[0.25em] uppercase font-sans mb-4">
              Navegação
            </p>
            <ul className="space-y-2">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre", href: "#sobre" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Dúvidas", href: "#duvidas" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-champagne/50 hover:text-champagne text-sm font-light transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-champagne/80 text-[11px] tracking-[0.25em] uppercase font-sans mb-4">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5537999265472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-champagne/60 hover:text-champagne text-sm font-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.2} />
                  (37) 99926-5472
                </a>
              </li>
              <li>
                <a
                  href="tel:+5537999265472"
                  className="inline-flex items-center gap-2 text-champagne/60 hover:text-champagne text-sm font-light transition-colors"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.2} />
                  Ligar agora
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/Anajuliacerimonialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-champagne/60 hover:text-champagne text-sm font-light transition-colors"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.2} />
                  @anajulia.cerimonialista
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <p className="text-champagne/80 text-[11px] tracking-[0.25em] uppercase font-sans mb-4">
              Atendimento
            </p>
            <ul className="space-y-3">
              <li className="inline-flex items-start gap-2 text-champagne/60 text-sm font-light">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.2} />
                <span>Pará de Minas — MG<br/><span className="text-champagne/40 text-xs">e toda a região</span></span>
              </li>
              <li className="inline-flex items-start gap-2 text-champagne/60 text-sm font-light">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.2} />
                <span>Seg. a Sáb.<br/><span className="text-champagne/40 text-xs">09h às 19h</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="premium-divider mb-6">
          <div className="ornament" style={{ borderColor: 'hsl(var(--champagne) / 0.3)' }} />
        </div>
        <p className="text-champagne/30 text-[10px] tracking-wider uppercase font-sans text-center">
          © 2026 Ana Júlia Cerimonial · Cerimonialista em Pará de Minas · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
