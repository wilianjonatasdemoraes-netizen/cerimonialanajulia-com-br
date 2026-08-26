import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getPost, posts } from "@/content/blog";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    dateModified: post.updated,
    datePublished: post.updated,
    inLanguage: "pt-BR",
    mainEntityOfPage: canonical(path),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.description}
        path={path}
        ogType="article"
        jsonLd={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.category, path },
        ]}
        eyebrow={post.category}
        title={post.title}
        intro={post.intro}
        ctaMessage="Olá Ana Júlia! Li um artigo no site e gostaria de um orçamento."
      >
        {post.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
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

        {related.length > 0 && (
          <>
            <h2>Leia também</h2>
            <ul>
              {related.map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p>
          Precisa de ajuda com o seu evento? Conheça o{" "}
          <Link to="/cerimonial-de-casamento">cerimonial de casamento</Link> e o{" "}
          <Link to="/cerimonial-debutantes">cerimonial de debutantes</Link>.
        </p>
      </PageShell>
    </>
  );
};

export default BlogPost;
