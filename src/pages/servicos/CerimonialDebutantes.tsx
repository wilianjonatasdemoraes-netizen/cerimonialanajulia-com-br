import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const path = "/cerimonial-debutantes";

const CerimonialDebutantes = () => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cerimonial de Debutantes",
    serviceType: "Cerimonial de festa de 15 anos",
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Pará de Minas", "Divinópolis", "Nova Serrana", "Itaúna", "Minas Gerais"],
    url: canonical(path),
    description:
      "Cerimonial de debutantes: protocolo, entrada, valsa, homenagens, cronograma e coordenação de fornecedores na festa de 15 anos.",
  };

  return (
    <>
      <Seo
        title="Cerimonial de Debutantes e Festa de 15 Anos | Ana Júlia Cerimonial"
        description="Cerimonial de debutantes em Pará de Minas e região: planejamento, protocolo de entrada e valsa, homenagens, cronograma e coordenação completa da festa de 15 anos."
        path={path}
        jsonLd={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Cerimonial de Debutantes", path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Cerimonial de Debutantes", path },
        ]}
        eyebrow="Serviço"
        title="Cerimonial de Debutantes"
        intro="Organização e condução da festa de 15 anos, do planejamento ao encerramento — com atenção especial ao protocolo e aos momentos que a debutante vai lembrar."
        ctaMessage="Olá Ana Júlia! Gostaria de um orçamento de cerimonial de debutante."
      >
        <h2>Planejamento da festa de 15 anos</h2>
        <p>
          Começamos definindo o formato com a debutante e a família: baile tradicional, festa moderna
          ou celebração intimista. A partir dessa escolha, organizamos orçamento, lista de convidados,
          espaço e cronograma de contratações.
        </p>

        <h2>Entrada e valsa</h2>
        <p>
          A entrada é o momento de maior expectativa da noite. Definimos ordem, trilha sonora,
          posicionamento e tempo de cada etapa, e conduzimos o ensaio com a debutante, a família e os
          convidados que participam da valsa.
        </p>

        <h2>Homenagens e protocolo</h2>
        <ul>
          <li>Ordem das homenagens aos pais, avós e padrinhos</li>
          <li>Troca de sapatilha e demais rituais escolhidos pela família</li>
          <li>Corte do bolo, brinde e discursos</li>
          <li>Apresentações, coreografias e exibição de vídeos</li>
        </ul>

        <h2>Organização e fornecedores</h2>
        <p>
          Alinhamos buffet, decoração, som, iluminação, fotografia e equipe de apoio: horários de
          montagem, escopo contratado e responsabilidades de cada um. Tudo consolidado em um único
          cronograma.
        </p>

        <h2>Recepção, pista e encerramento</h2>
        <p>
          Coordenamos a recepção dos convidados, o serviço, a transição para a pista e o encerramento,
          mantendo o ritmo da noite sem intervalos vazios.
        </p>

        <h2>Veja também</h2>
        <p>
          Conheça a página sobre <Link to="/festa-de-15-anos">festa de 15 anos</Link>, veja{" "}
          <Link to="/debutantes-reais">festas reais que acompanhamos</Link> e leia o{" "}
          <Link to="/blog/como-organizar-uma-festa-de-15-anos">guia de organização</Link>.
        </p>
      </PageShell>
    </>
  );
};

export default CerimonialDebutantes;
