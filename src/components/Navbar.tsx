import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Sobre", "Portfólio", "Serviços", "Contato"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/80 backdrop-blur-md border-b border-champagne/10">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-champagne text-xl md:text-2xl tracking-wider">
          Ana Júlia
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-champagne/70 text-[11px] tracking-[0.2em] uppercase font-sans hover:text-champagne transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contato"
          className="hidden md:inline-block border border-champagne/40 text-champagne text-[10px] tracking-[0.2em] uppercase px-5 py-2 font-sans hover:bg-champagne/10 transition-all duration-300"
        >
          Orçamento
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-champagne p-1"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-warm-dark/95 border-t border-champagne/10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-champagne/70 text-[11px] tracking-[0.2em] uppercase font-sans hover:text-champagne transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="border border-champagne/40 text-champagne text-[10px] tracking-[0.2em] uppercase px-5 py-2 font-sans hover:bg-champagne/10 transition-all duration-300 text-center mt-2"
          >
            Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
