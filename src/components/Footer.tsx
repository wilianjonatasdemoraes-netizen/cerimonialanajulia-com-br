const Footer = () => {
  return (
    <footer className="bg-warm-dark py-16 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
      
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <p className="font-serif text-2xl md:text-3xl tracking-wider mb-4">
          <span className="text-shimmer">Ana Júlia</span>
        </p>
        <p className="text-champagne/50 text-xs tracking-[0.2em] uppercase font-sans mb-8">
          Cerimonial & Assessoria de Casamentos
        </p>
        <div className="premium-divider mb-8">
          <div className="ornament" style={{ borderColor: 'hsl(var(--champagne) / 0.3)' }} />
        </div>
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
