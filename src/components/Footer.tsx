const Footer = () => {
  return (
    <footer className="bg-warm-dark py-16">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <p className="font-serif text-champagne text-2xl md:text-3xl tracking-wider mb-4">
          Ana Júlia
        </p>
        <p className="text-champagne/50 text-xs tracking-[0.2em] uppercase font-sans mb-8">
          Cerimonial & Assessoria de Casamentos
        </p>
        <div className="w-12 h-px bg-champagne/20 mx-auto mb-8" />
        <div className="flex justify-center gap-8 mb-8">
          {["Instagram", "WhatsApp"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-champagne/40 text-[11px] tracking-[0.15em] uppercase font-sans hover:text-champagne/80 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <p className="text-champagne/30 text-[10px] tracking-wider uppercase font-sans">
          © 2025 Ana Júlia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
