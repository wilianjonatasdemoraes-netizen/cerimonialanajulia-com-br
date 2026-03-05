import weddingKiss from "@/assets/wedding-kiss.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import weddingVeil from "@/assets/wedding-veil.jpg";
import weddingHug from "@/assets/wedding-hug.jpg";
import weddingSunset from "@/assets/wedding-sunset.jpg";
import weddingCar from "@/assets/wedding-car.jpg";

const images = [
  { src: weddingCeremony, label: "Cerimônia", span: "md:col-span-2 md:row-span-2" },
  { src: weddingKiss, label: "Momentos", span: "" },
  { src: weddingVeil, label: "Detalhes", span: "" },
  { src: weddingSunset, label: "Emoção", span: "md:col-span-2" },
  { src: weddingHug, label: "Recepção", span: "" },
  { src: weddingCar, label: "Bastidores", span: "" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Portfólio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Casamentos Reais
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <div className="aspect-square overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
