import { useEffect, useState } from "react";
import { X } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80", caption: "Casamento de Maria & João — Pará de Minas" },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=900&q=80", caption: "Cerimônia ao ar livre — Itaúna" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80", caption: "Decoração clássica — Divinópolis" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80", caption: "Mesa dos noivos — Nova Serrana" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80", caption: "Entrada da noiva — Pará de Minas" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80", caption: "Detalhes em dourado — Belo Horizonte" },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <section id="galeria" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(var(--gold))" }}>
            ✦ Momentos que eternizamos ✦
          </p>
          <h2 className="font-serif italic font-light leading-[1.1] text-[34px] md:text-[48px]" style={{ color: "hsl(var(--warm-dark))" }}>
            Cada detalhe, uma <span className="font-script not-italic" style={{ color: "hsl(var(--gold))" }}>memória eterna</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <figure key={i} className="group cursor-pointer" onClick={() => setActive(i)}>
              <div className="overflow-hidden aspect-[4/3] border border-gold/20">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="mt-3 text-center font-sans text-[12px] tracking-wide" style={{ color: "hsl(var(--body-text))" }}>
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://instagram.com/Anajuliacerimonialista"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-premium inline-flex"
          >
            Ver mais no Instagram →
          </a>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-label="Foto ampliada"
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Fechar"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X className="w-7 h-7" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].caption} className="w-full max-h-[80vh] object-contain" />
            <figcaption className="mt-3 text-center text-white/80 font-sans text-sm">{photos[active].caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;
