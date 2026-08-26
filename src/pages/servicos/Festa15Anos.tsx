import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const path = "/festa-de-15-anos";

const Festa15Anos = () => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organização de Festa de 15 Anos",
    serviceType: "Organização de festa de debutante",
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Pará de Minas", "Divinópolis", "Nova Serrana", "Itaúna", "Minas Gerais"],
    url: canonical(path),
    description:
      "Organização de festa de 15 anos em Pará de Minas e região: formato, orçamento, fornecedores, cronograma e execução da noite.",
  };

  return (
    <>
      <Seo
        title="Festa de 15 Anos em Pará de Minas | Cerimonial de Debutantes"
        description="Organização de festa de 15 anos em Pará de Minas e região: escolha do formato, orçamento, fornecedores, protocolo e cronograma da noite com cerimonial completo."
        path={path}
        jsonLd={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Festa de 15 Anos", path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Festa de 15 Anos", path },
        ]}
        eyebrow="Serviço"
        title="Festa de 15 Anos"
        intro="Um guia prático para famílias e debutantes que estão começando a planejar — e o apoio profissional para executar tudo com tranquilidade."
        ctaMessage="Olá Ana Júlia! Quero planejar uma festa de 15 anos."
      >
        <h2>Por onde começar</h2>
        <p>
          Três definições orientam todo o resto: o formato da festa, o orçamento total e o número de
          convidados. Com esses pontos fechados, a escolha do espaço e dos fornecedores fica muito
          mais simples — e mais barata.
        </p>

        <h2>Formatos mais comuns</h2>
        <ul>
          <li>Baile tradicional, com valsa, homenagens e protocolo completo</li>
          <li>Festa moderna, com pista aberta desde o início e protocolo reduzido</li>
          <li>Celebração intimista, com jantar para família e amigos próximos</li>
          <li>Festa temática, com decoração e trilha conectadas a um universo escolhido</li>
        </ul>

        <h2>O que costuma entrar no orçamento</h2>
        <ul>
          <li>Espaço, estrutura e climatização</li>
          <li>Buffet, bebidas e equipe de serviço</li>
          <li>Decoração, flores e bolo</li>
          <li>Som, iluminação e DJ ou banda</li>
          <li>Fotografia e vídeo</li>
          <li>Vestido, beleza e coreografia</li>
          <li>Cerimonial e coordenação do evento</li>
        </ul>

        <h2>O papel do cerimonial</h2>
        <p>
          O cerimonial organiza o cronograma, alinha os fornecedores, conduz o ensaio da entrada e da
          valsa e coordena a noite inteira, para que a família aproveite a festa. Veja os detalhes na
          página de <Link to="/cerimonial-debutantes">cerimonial de debutantes</Link>.
        </p>

        <h2>Atendimento em Pará de Minas e região</h2>
        <p>
          Atendemos festas de 15 anos em{" "}
          <Link to="/cerimonial-para-de-minas">Pará de Minas</Link>,{" "}
          <Link to="/cerimonial-divinopolis">Divinópolis</Link>,{" "}
          <Link to="/cerimonial-nova-serrana">Nova Serrana</Link>,{" "}
          <Link to="/cerimonial-itauna">Itaúna</Link> e demais cidades da região Centro-Oeste de
          Minas Gerais.
        </p>

        <h2>Conteúdos úteis</h2>
        <p>
          <Link to="/blog/checklist-completo-para-festa-de-15-anos">Checklist completo</Link> ·{" "}
          <Link to="/blog/quanto-custa-uma-festa-de-15-anos">Quanto custa uma festa de 15 anos</Link>{" "}
          · <Link to="/blog/ideias-para-festa-de-15-anos">Ideias para a festa</Link>
        </p>
      </PageShell>
    </>
  );
};

export default Festa15Anos;
