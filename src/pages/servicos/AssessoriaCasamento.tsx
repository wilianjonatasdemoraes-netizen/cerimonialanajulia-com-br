import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const path = "/assessoria-de-casamento";

const AssessoriaCasamento = () => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Assessoria de Casamento",
    serviceType: "Assessoria e planejamento de casamento",
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Pará de Minas", "Divinópolis", "Nova Serrana", "Itaúna", "Minas Gerais"],
    url: canonical(path),
    description:
      "Assessoria de casamento completa ou apenas no dia do evento, com apoio nas decisões, cronograma e coordenação dos fornecedores.",
  };

  return (
    <>
      <Seo
        title="Assessoria de Casamento | Ana Júlia Cerimonial"
        description="Assessoria de casamento em Pará de Minas e região: apoio no planejamento, escolha de fornecedores, cronograma e coordenação do dia. Entenda a diferença para o cerimonial."
        path={path}
        jsonLd={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Assessoria de Casamento", path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Assessoria de Casamento", path },
        ]}
        eyebrow="Serviço"
        title="Assessoria de Casamento"
        intro="Apoio profissional nas decisões do casamento — do primeiro orçamento ao último detalhe da semana do evento."
        ctaMessage="Olá Ana Júlia! Gostaria de um orçamento de assessoria de casamento."
      >
        <h2>O que é assessoria de casamento</h2>
        <p>
          A assessoria acompanha o casal durante o planejamento. É um trabalho de orientação e
          organização: definir prioridades, distribuir o orçamento, escolher fornecedores, revisar
          contratos e manter o cronograma em dia.
        </p>

        <h2>Assessoria, cerimonial, organização e planejamento</h2>
        <p>
          Esses termos costumam ser usados como sinônimos, mas descrevem etapas diferentes:
        </p>
        <ul>
          <li>
            <strong>Planejamento</strong> — a fase de decisões: orçamento, data, local, estilo do
            evento e lista de convidados.
          </li>
          <li>
            <strong>Organização</strong> — a execução do planejamento: contratações, prazos,
            documentos, pagamentos e logística.
          </li>
          <li>
            <strong>Assessoria</strong> — o acompanhamento profissional dessas duas fases, com
            reuniões e orientação contínua.
          </li>
          <li>
            <strong>Cerimonial</strong> — a condução do dia do evento: roteiro, coordenação de
            fornecedores, cerimônia e protocolo da festa.
          </li>
        </ul>
        <p>
          Na prática, quem contrata assessoria completa recebe também o cerimonial no dia. Quem já
          organizou tudo sozinho pode contratar apenas a assessoria do dia.
        </p>

        <h2>Formatos disponíveis</h2>
        <ul>
          <li>
            <strong>Assessoria completa</strong> — acompanhamento desde o início do planejamento.
          </li>
          <li>
            <strong>Assessoria parcial</strong> — entrada no processo já em andamento, para
            reorganizar prazos e fechar pendências.
          </li>
          <li>
            <strong>Assessoria do dia</strong> — conferência final e coordenação completa da data.
          </li>
        </ul>

        <h2>Qual formato escolher</h2>
        <p>
          Se você tem pouco tempo ou está no início, a assessoria completa evita retrabalho. Se já
          contratou tudo e quer apenas segurança no dia, a assessoria do dia costuma ser suficiente.
          Podemos avaliar juntos pelo WhatsApp.
        </p>

        <h2>Veja também</h2>
        <p>
          Conheça o <Link to="/cerimonial-de-casamento">cerimonial de casamento</Link>, os{" "}
          <Link to="/casamentos-reais">casamentos reais</Link> que acompanhamos e o{" "}
          <Link to="/blog">blog com dicas de organização</Link>.
        </p>
      </PageShell>
    </>
  );
};

export default AssessoriaCasamento;
