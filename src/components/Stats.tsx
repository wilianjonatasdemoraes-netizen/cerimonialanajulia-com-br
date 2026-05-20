import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: 127, prefix: "+", suffix: "", label: "Casamentos realizados" },
  { value: 5, prefix: "", suffix: ".0★", label: "Avaliação no Google" },
  { value: 8, prefix: "", suffix: " anos", label: "Experiência no mercado" },
  { value: 100, prefix: "", suffix: "%", label: "Dedicação exclusiva" },
];

const Counter = ({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) => {
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
      {prefix}{n}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section id="prova" className="py-20 md:py-28 bg-warm-dark">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-2">
              <p
                className="font-serif font-light leading-none mb-4 text-[44px] md:text-[64px]"
                style={{ color: "hsl(var(--gold))" }}
              >
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-cream/60 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-sans font-light leading-snug">
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
