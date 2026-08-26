import RealEventsPage from "@/pages/RealEventsPage";
import { realDebutantes } from "@/content/realEvents";

const DebutantesReais = () => (
  <RealEventsPage
    path="/debutantes-reais"
    title="Debutantes Reais | Ana Júlia Cerimonial"
    description="Festas de 15 anos reais organizadas pela Ana Júlia Cerimonial em Pará de Minas e região: formato, local, fornecedores e registros de cada celebração."
    h1="Debutantes Reais"
    eyebrow="Portfólio"
    intro="Festas de 15 anos acompanhadas pela nossa equipe, do planejamento ao encerramento da noite."
    events={realDebutantes}
    emptyNote="Estamos reunindo os registros e as autorizações das famílias para publicar aqui as festas de 15 anos já realizadas, com local, formato, fornecedores e depoimentos reais."
    ctaMessage="Olá Ana Júlia! Gostaria de conhecer festas de 15 anos já realizadas e solicitar um orçamento."
  />
);

export default DebutantesReais;
