import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { posts } from "@/content/blog";
import { canonical } from "@/lib/site";

const path = "/blog";

const Blog = () => {
  const groups = [
    { label: "Casamento", items: posts.filter((p) => p.category === "Casamento") },
    { label: "15 Anos", items: posts.filter((p) => p.category === "15 Anos") },
  ];

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Dicas para Casamentos e Debutantes",
    url: canonical(path),
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: canonical(`/blog/${p.slug}`),
      dateModified: p.updated,
    })),
  };

  return (
    <>
      <Seo
        title="Dicas para Casamentos e Debutantes | Ana Júlia Cerimonial"
        description="Guias práticos sobre organização de casamento e festa de 15 anos: custos, checklists, cronogramas e quando contratar um cerimonialista."
        path={path}
        jsonLd={[
          listJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Blog", path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Blog", path },
        ]}
        eyebrow="Central de conteúdo"
        title="Dicas para Casamentos e Debutantes"
        intro="Conteúdos práticos para quem está organizando um casamento ou uma festa de 15 anos em Pará de Minas e região."
        ctaMessage="Olá Ana Júlia! Li o blog e gostaria de um orçamento."
      >
        <div className="not-prose space-y-14">
          {groups.map((group) => (
            <section key={group.label}>
              <h2 className="font-serif text-3xl font-light text-foreground mb-6">{group.label}</h2>
              <ul className="space-y-4">
                {group.items.map((p) => (
                  <li key={p.slug} className="border border-gold-light/20 hover:border-gold-light/45 transition-colors">
                    <Link to={`/blog/${p.slug}`} className="block p-5 md:p-6">
                      <h3 className="font-serif text-xl md:text-2xl font-light text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground font-light leading-relaxed">
                        {p.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </PageShell>
    </>
  );
};

export default Blog;
