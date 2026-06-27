import weddingKiss from "@/assets/wedding-kiss.jpg";
import weddingCeremony from "@/assets/casamento-2.jpg";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingHug from "@/assets/wedding-hug.jpg";
import weddingSunset from "@/assets/wedding-sunset.jpg";
import weddingCar from "@/assets/wedding-car.jpg";
import weddingKiss2 from "@/assets/wedding-kiss-2.jpg";
import weddingNight from "@/assets/wedding-night.jpg";

const images = [
  { src: weddingCeremony, label: "Cerimônia" },
  { src: weddingKiss, label: "Momentos" },
  { src: weddingKiss2, label: "Emoção" },
  { src: weddingVeil, label: "Detalhes" },
  { src: weddingSunset, label: "Celebração" },
  { src: weddingNight, label: "Noite" },
  { src: weddingHug, label: "Recepção" },
  { src: weddingCar, label: "Bastidores" },
  { src: weddingCeremony, label: "Igreja" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Portfólio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Casamentos Reais
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px]">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer border border-gold-light/15 hover:border-gold-light/40 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.label}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/40 transition-all duration-500 flex items-end p-4">
                <span className="text-cream text-xs tracking-[0.2em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
              {/* Premium corner accents */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-champagne/0 group-hover:border-champagne/50 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-champagne/0 group-hover:border-champagne/50 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-champagne/0 group-hover:border-champagne/50 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-champagne/0 group-hover:border-champagne/50 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
