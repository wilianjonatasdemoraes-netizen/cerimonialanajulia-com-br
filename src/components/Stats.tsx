import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: 150, suffix: "+", label: "Eventos realizados" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 8, suffix: "+", label: "Anos de experiência" },
  { value: 47, suffix: "", label: "Avaliações 5 estrelas" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 md:py-24 bg-warm-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--gold)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--champagne)) 0, transparent 40%)" }}
      />
      <div className="container max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-champagne/70 text-[11px] tracking-[0.35em] uppercase font-sans mb-3">
            Resultados que falam por si
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-cream">
            Uma trajetória construída em <span className="text-shimmer italic">momentos únicos</span>
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" style={{ borderColor: "hsl(var(--champagne) / 0.5)" }} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4 py-6 border border-champagne/10">
              <p className="font-serif text-4xl md:text-6xl font-light text-shimmer mb-3 leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <div className="w-8 h-px bg-gold-light/40 mx-auto mb-3" />
              <p className="text-champagne/70 text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-sans leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
