const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-dark/80 backdrop-blur-md border-b border-champagne/10">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-champagne text-xl md:text-2xl tracking-wider">
          Ana Júlia
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Sobre", "Portfólio", "Serviços", "Contato"].map((item) => (
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
          className="border border-champagne/40 text-champagne text-[10px] tracking-[0.2em] uppercase px-5 py-2 font-sans hover:bg-champagne/10 transition-all duration-300"
        >
          Orçamento
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
