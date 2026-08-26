import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import UrgencyBar from "./UrgencyBar";

const sectionItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const pageItems = [
  { label: "Casamento", href: "/cerimonial-de-casamento" },
  { label: "15 Anos", href: "/festa-de-15-anos" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const navItems = [
    ...sectionItems.map((item) => ({
      ...item,
      href: isHome ? item.href : `/${item.href}`,
    })),
    ...pageItems,
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <UrgencyBar />
      <nav className="glass-dark border-b border-champagne/10">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-xl md:text-2xl tracking-wider">
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
          className="hidden lg:inline-flex btn-whatsapp btn-sm"
        >
          <span className="wa-icon">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
          </span>
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
            className="btn-whatsapp btn-sm mt-2"
          >
            <span className="wa-icon">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
            </span>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
