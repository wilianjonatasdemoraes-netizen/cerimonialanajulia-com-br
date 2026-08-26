import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { cities } from "@/content/cities";

const servicos = [
  { label: "Cerimonial de Casamento", to: "/cerimonial-de-casamento" },
  { label: "Assessoria de Casamento", to: "/assessoria-de-casamento" },
  { label: "Cerimonial de Debutantes", to: "/cerimonial-debutantes" },
  { label: "Festa de 15 Anos", to: "/festa-de-15-anos" },
];

const Regioes = () => {
  return (
    <section id="regioes" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Regiões atendidas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Onde Atendemos
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
          <p className="mt-6 text-muted-foreground text-sm font-light max-w-2xl mx-auto leading-relaxed">
            Atendemos Pará de Minas e cidades da região Centro-Oeste de Minas Gerais, com
            planejamento presencial nas etapas decisivas e coordenação completa no dia do evento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}`}
              className="group border border-gold-light/20 hover:border-gold-light/50 bg-card/40 p-5 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gold/80 mb-3" strokeWidth={1.3} />
              <p className="font-serif text-xl font-light text-foreground">{c.name}</p>
              <p className="mt-1 text-[11px] tracking-[0.2em] uppercase font-sans text-muted-foreground group-hover:text-foreground/70 transition-colors">
                Ver atendimento
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs tracking-[0.25em] uppercase font-sans text-muted-foreground mb-4">
            Serviços
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {servicos.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="text-sm font-light text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/casamentos-reais"
              className="text-sm font-light text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              Casamentos Reais
            </Link>
            <Link
              to="/debutantes-reais"
              className="text-sm font-light text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              Debutantes Reais
            </Link>
            <Link
              to="/blog"
              className="text-sm font-light text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regioes;
