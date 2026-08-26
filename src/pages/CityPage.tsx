import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { cities, getCity } from "@/content/cities";
import { PHONE_DISPLAY, SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const CityPage = () => {
  const { slug } = useParams();
  const city = getCity(slug);

  if (!city) return <NotFound />;

  const path = `/${city.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: canonical(path),
    telephone: `+55 37 99926-5472`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pará de Minas",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: city.name },
    sameAs: [SITE_URL],
  };

  const others = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      <Seo
        title={city.title}
        description={city.description}
        path={path}
        jsonLd={[
          jsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: `Cerimonialista em ${city.name}`, path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: city.name, path },
        ]}
        eyebrow="Regiões atendidas"
        title={city.h1}
        intro={city.intro}
        ctaMessage={`Olá Ana Júlia! Gostaria de um orçamento de cerimonial em ${city.name}.`}
      >
        {city.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <h2>Serviços que atendemos em {city.name}</h2>
        <p>
          <Link to="/cerimonial-de-casamento">Cerimonial de casamento</Link> ·{" "}
          <Link to="/assessoria-de-casamento">Assessoria de casamento</Link> ·{" "}
          <Link to="/cerimonial-debutantes">Cerimonial de debutantes</Link> ·{" "}
          <Link to="/festa-de-15-anos">Festa de 15 anos</Link>
        </p>

        <h2>Contato</h2>
        <p>
          WhatsApp e telefone: {PHONE_DISPLAY}. Atendimento a partir de Pará de Minas — MG, com
          cobertura na região Centro-Oeste de Minas Gerais.
        </p>

        <h2>Outras cidades</h2>
        <p>
          {others.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && " · "}
              <Link to={`/${c.slug}`}>{c.name}</Link>
            </span>
          ))}
        </p>
      </PageShell>
    </>
  );
};

export default CityPage;
