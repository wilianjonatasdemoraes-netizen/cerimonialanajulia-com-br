import { Instagram, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-dark py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />

      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-wider mb-3">
              <span className="text-shimmer">Ana Júlia</span>
            </p>
            <p className="text-champagne/60 text-[11px] tracking-[0.2em] uppercase font-sans mb-4">
              Cerimonial & Eventos
            </p>
            <p className="text-champagne/50 text-sm font-light leading-relaxed">
              Organização de eventos, casamentos, 15 anos e experiências especiais.
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
        </div>

        <div className="premium-divider mb-6">
          <div className="ornament" style={{ borderColor: 'hsl(var(--champagne) / 0.3)' }} />
        </div>
        <p className="text-champagne/30 text-[10px] tracking-wider uppercase font-sans text-center">
          © 2026 Ana Júlia Cerimonial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
