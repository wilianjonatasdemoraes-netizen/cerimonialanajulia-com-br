import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/site";

interface PageShellProps {
  breadcrumb: { name: string; path: string }[];
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaMessage?: string;
}

const PageShell = ({
  breadcrumb,
  eyebrow,
  title,
  intro,
  children,
  ctaLabel = "Solicitar orçamento",
  ctaMessage = "Olá Ana Júlia! Gostaria de solicitar um orçamento.",
}: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-36 md:pt-44 pb-14 md:pb-20 bg-secondary">
        <div className="container max-w-4xl mx-auto px-6">
          <nav aria-label="Trilha de navegação" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-sans text-muted-foreground">
              {breadcrumb.map((item, i) => (
                <li key={item.path} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="w-3 h-3 opacity-50" />}
                  {i === breadcrumb.length - 1 ? (
                    <span aria-current="page" className="text-foreground/80">{item.name}</span>
                  ) : (
                    <Link to={item.path} className="hover:text-foreground transition-colors">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {eyebrow && (
            <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-muted-foreground text-base font-light leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
          <a
            href={whatsappLink(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            <span className="wa-icon">
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
            </span>
            {ctaLabel}
          </a>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6 seo-prose">{children}</div>
      </main>

      <section className="pb-20">
        <div className="container max-w-4xl mx-auto px-6 text-center border-t border-gold-light/20 pt-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            Vamos conversar sobre o seu evento?
          </h2>
          <p className="mt-4 text-muted-foreground text-sm font-light">
            Envie uma mensagem com a data e a cidade do evento e receba uma proposta personalizada.
          </p>
          <a
            href={whatsappLink(ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-7"
          >
            <span className="wa-icon">
              <MessageCircle className="w-4 h-4" strokeWidth={1.6} />
            </span>
            {ctaLabel}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageShell;
