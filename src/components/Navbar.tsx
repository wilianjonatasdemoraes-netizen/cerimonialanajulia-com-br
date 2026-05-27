import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-champagne/10">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-serif text-xl md:text-2xl tracking-wider">
          <span className="text-shimmer">Ana Júlia</span>
        </a>
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-champagne/70 text-[11px] tracking-[0.2em] uppercase font-sans hover:text-champagne transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/5537999265472"
          target="_blank"
          rel="noopener noreferrer"
          data-event="navbar_whatsapp_click"
          className="hidden lg:inline-block btn-premium text-champagne text-[10px] tracking-[0.2em] uppercase px-5 py-2 font-sans border-champagne/40"
        >
          WhatsApp
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-champagne p-1"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 glass-dark border-t border-champagne/10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-champagne/70 text-[11px] tracking-[0.2em] uppercase font-sans hover:text-champagne transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5537999265472"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            data-event="navbar_mobile_whatsapp_click"
            className="btn-premium text-champagne text-[10px] tracking-[0.2em] uppercase px-5 py-2 font-sans border-champagne/40 text-center mt-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
