import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Seo, { breadcrumbJsonLd } from "@/components/Seo";
import { SITE_NAME, SITE_URL, canonical } from "@/lib/site";

const path = "/cerimonial-de-casamento";

const CerimonialCasamento = () => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cerimonial de Casamento",
    serviceType: "Cerimonial e organização de casamento",
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Pará de Minas", "Divinópolis", "Nova Serrana", "Itaúna", "Minas Gerais"],
    url: canonical(path),
    description:
      "Planejamento, organização, coordenação de fornecedores e execução completa do dia do casamento em Pará de Minas e região.",
  };

  return (
    <>
      <Seo
        title="Cerimonial de Casamento | Ana Júlia Cerimonial"
        description="Cerimonial de casamento com planejamento, cronograma, coordenação de fornecedores e execução do dia do evento em Pará de Minas e região Centro-Oeste de MG."
        path={path}
        jsonLd={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Cerimonial de Casamento", path },
          ]),
        ]}
      />
      <PageShell
        breadcrumb={[
          { name: "Início", path: "/" },
          { name: "Cerimonial de Casamento", path },
        ]}
        eyebrow="Serviço"
        title="Cerimonial de Casamento"
        intro="Do planejamento à última música da festa: um trabalho de organização, cronograma e coordenação para que o casal e a família vivam o dia como convidados."
        ctaMessage="Olá Ana Júlia! Gostaria de um orçamento de cerimonial de casamento."
      >
        <h2>Planejamento</h2>
        <p>
          O planejamento começa com um diagnóstico simples: data, local, número de convidados,
          orçamento disponível e o que já foi contratado. A partir daí montamos um cronograma por
          etapas, com prazos e prioridades, para que as decisões aconteçam na ordem certa.
        </p>

        <h2>Organização e cronograma</h2>
        <p>
          Cada casamento recebe um roteiro detalhado do dia — horários de montagem, chegada de
          fornecedores, início da cerimônia, serviço, discursos, abertura da pista e encerramento.
          Esse documento é compartilhado com todos os envolvidos antes da data.
        </p>

        <h2>Fornecedores</h2>
        <p>
          Fazemos a conferência de contratos, o alinhamento de escopo e o briefing de cada
          fornecedor. Quando o casal pede indicações, sugerimos opções compatíveis com o estilo e o
          orçamento — a escolha final é sempre de vocês.
        </p>

        <h2>Acompanhamento até a data</h2>
        <ul>
          <li>Reuniões de acompanhamento ao longo do processo</li>
          <li>Visita técnica ao espaço da cerimônia e da recepção</li>
          <li>Conferência da lista de convidados e mapa de mesas</li>
          <li>Ensaio da cerimônia e alinhamento com a igreja ou celebrante</li>
          <li>Reconfirmação de todos os fornecedores na semana do evento</li>
        </ul>

        <h2>Execução: cerimônia, recepção e festa</h2>
        <p>
          No dia, a equipe chega antes da montagem e permanece até o encerramento. Coordenamos a
          recepção dos convidados, a entrada do cortejo, a condução da cerimônia, o serviço da
          recepção, o protocolo da festa e a saída dos fornecedores.
        </p>

        <h2>Suporte aos noivos</h2>
        <p>
          Durante todo o evento existe alguém dedicado ao casal: horários, água, alimentação, itens
          pessoais e a comunicação com a família. Imprevistos são resolvidos nos bastidores.
        </p>

        <h2>Próximos passos</h2>
        <p>
          Se você ainda está decidindo o formato do serviço, veja a{" "}
          <Link to="/assessoria-de-casamento">assessoria de casamento</Link> e entenda a diferença
          entre os modelos. Também organizamos{" "}
          <Link to="/cerimonial-debutantes">cerimonial de debutantes</Link> e{" "}
          <Link to="/festa-de-15-anos">festas de 15 anos</Link>.
        </p>
      </PageShell>
    </>
  );
};

export default CerimonialCasamento;
