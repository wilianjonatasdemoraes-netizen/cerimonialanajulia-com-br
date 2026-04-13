import weddingKiss from "@/assets/wedding-kiss.jpg";
import weddingCeremony from "@/assets/casamento-2.jpg";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingHug from "@/assets/wedding-hug.jpg";
import weddingSunset from "@/assets/wedding-sunset.jpg";
import weddingCar from "@/assets/wedding-car.jpg";
import weddingKiss2 from "@/assets/wedding-kiss-2.jpg";

const images = [
  { src: weddingCeremony, label: "Cerimônia" },
  { src: weddingKiss, label: "Momentos" },
  { src: weddingVeil, label: "Detalhes" },
  { src: weddingKiss2, label: "Emoção" },
  { src: weddingSunset, label: "Celebração" },
  { src: weddingHug, label: "Recepção" },
  { src: weddingCar, label: "Bastidores" },
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

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {/* Row 1: large left + two stacked right */}
          <div className="row-span-2 relative overflow-hidden group cursor-pointer">
            <div className="h-full overflow-hidden border border-gold-light/10">
              <img
                src={images[0].src}
                alt={images[0].label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/40 transition-all duration-500 flex items-end p-4">
              <span className="text-cream text-xs tracking-[0.2em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {images[0].label}
              </span>
            </div>
            <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-champagne/0 group-hover:border-champagne/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-champagne/0 group-hover:border-champagne/40 transition-all duration-500 pointer-events-none" />
          </div>

          {/* Remaining images */}
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden border border-gold-light/10">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-warm-dark/0 group-hover:bg-warm-dark/40 transition-all duration-500 flex items-end p-4">
                <span className="text-cream text-xs tracking-[0.2em] uppercase font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
              <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-champagne/0 group-hover:border-champagne/40 transition-all duration-500 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-champagne/0 group-hover:border-champagne/40 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
