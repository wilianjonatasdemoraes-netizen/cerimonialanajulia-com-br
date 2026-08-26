import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>Página Não Encontrada | Ana Júlia Cerimonial</title>
        <meta name="description" content="A página que você procura não existe. Volte para o início e conheça os serviços de cerimonial da Ana Júlia." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`https://ana.cerimonialcasamentos.com.br${location.pathname}`} />
        <meta property="og:title" content="Página Não Encontrada | Ana Júlia Cerimonial" />
        <meta property="og:description" content="A página que você procura não existe." />
        <meta property="og:url" content={`https://ana.cerimonialcasamentos.com.br${location.pathname}`} />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground/80">Oops! Página não encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
