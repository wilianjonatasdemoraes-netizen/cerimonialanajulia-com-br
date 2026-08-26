import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { RealEvent } from "@/content/realEvents";
import { canonical } from "@/lib/site";

interface RealEventsPageProps {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  events: RealEvent[];
  emptyNote: string;
  ctaMessage: string;
}

const RealEventsPage = ({
  path,
  title,
  description,
  h1,
  eyebrow,
  intro,
  events,
  emptyNote,
  ctaMessage,
}: RealEventsPageProps) => {
  const hasEvents = events.length > 0;

  const itemListJsonLd = hasEvents
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: events.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Event",
            name: e.names,
            startDate: e.date,
            url: canonical(path),
            location: {
              "@type": "Place",
              name: e.venue,
              address: { "@type": "PostalAddress", addressLocality: e.city, addressRegion: "MG" },
            },
          },
        })),
      }
    : null;

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        noindex={!hasEvents}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: h1, path },
          ]),
          ...(itemListJsonLd ? [itemListJsonLd] : []),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: h1, path },
        ]}
        eyebrow={eyebrow}
        title={h1}
        intro={intro}
        ctaMessage={ctaMessage}
      >
        {hasEvents ? (
          <div className="not-prose space-y-14">
            {events.map((e) => (
              <article key={e.slug} className="border border-gold-light/20 p-6 md:p-8">
                <h2 className="font-serif text-3xl font-light text-foreground">{e.names}</h2>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground">
                  {[e.city, e.venue, new Date(e.date).toLocaleDateString("pt-BR")]
                    .filter(Boolean)
                    .join(" · ")}
                  {e.guests ? ` · ${e.guests} convidados` : ""}
                </p>
                {e.story && <p className="mt-5 text-muted-foreground font-light leading-relaxed">{e.story}</p>}
                {e.description && (
                  <p className="mt-4 text-muted-foreground font-light leading-relaxed">{e.description}</p>
                )}
                {e.photos && e.photos.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2">
                    {e.photos.map((photo) => (
                      <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        width={600}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-[4/3] object-cover border border-gold-light/15"
                      />
                    ))}
                  </div>
                )}
                {e.suppliers && e.suppliers.length > 0 && (
                  <p className="mt-5 text-sm text-muted-foreground font-light">
                    <strong className="font-normal text-foreground">Fornecedores:</strong>{" "}
                    {e.suppliers.map((s) => `${s.role}: ${s.name}`).join(" · ")}
                  </p>
                )}
                {e.testimonial && (
                  <blockquote className="mt-6 border-l border-gold/50 pl-5 text-muted-foreground font-light italic">
                    “{e.testimonial.text}”
                    <footer className="mt-2 not-italic text-xs tracking-[0.2em] uppercase font-sans">
                      {e.testimonial.author}
                    </footer>
                  </blockquote>
                )}
              </article>
            ))}
          </div>
        ) : (
          <>
            <h2>Conteúdo em preparação</h2>
            <p>{emptyNote}</p>
            <p>
              Enquanto isso, veja registros de eventos na{" "}
              <Link to="/#portfolio">galeria da página inicial</Link> ou fale diretamente pelo
              WhatsApp para receber referências de trabalhos já realizados.
            </p>
          </>
        )}
      </PageShell>
    </>
  );
};

export default RealEventsPage;
