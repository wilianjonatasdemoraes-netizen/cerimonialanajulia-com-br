import RealEventsPage from "@/pages/RealEventsPage";
import { realWeddings } from "@/content/realEvents";

const CasamentosReais = () => (
  <RealEventsPage
    path="/casamentos-reais"
    title="Casamentos Reais | Ana Júlia Cerimonial"
    description="Casamentos reais acompanhados pela Ana Júlia Cerimonial em Pará de Minas e região: histórias, locais, fornecedores e registros de cada celebração."
    h1="Casamentos Reais"
    eyebrow="Portfólio"
    intro="Histórias de casais que confiaram a organização do seu dia à Ana Júlia Cerimonial."
    events={realWeddings}
    emptyNote="Estamos organizando os registros e autorizações de imagem dos casamentos já realizados para publicá-los aqui, com nomes, cidade, local, fornecedores e depoimentos reais de cada casal."
    ctaMessage="Olá Ana Júlia! Gostaria de conhecer casamentos já realizados e solicitar um orçamento."
  />
);

export default CasamentosReais;
