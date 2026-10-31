import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que faz um cerimonialista?",
    a: "O cerimonialista organiza o cronograma do evento, alinha e coordena os fornecedores, conduz a cerimônia e o protocolo da festa e resolve imprevistos nos bastidores, para que os noivos e a família aproveitem a celebração.",
  },
  {
    q: "Com quanto tempo de antecedência devo contratar o cerimonial?",
    a: "O ideal é contratar entre 6 e 12 meses antes do evento, principalmente para datas concorridas. Também atendemos prazos menores conforme disponibilidade.",
  },
  {
    q: "Vocês fazem festas de 15 anos?",
    a: "Sim. Fazemos cerimonial e organização de festas de debutantes, incluindo protocolo de entrada, valsa, homenagens, cronograma da noite e coordenação dos fornecedores.",
  },
  {
    q: "Vocês fazem cerimonial para colações de grau?",
    a: "Sim. A assessoria para colações de grau pode incluir planejamento do roteiro, protocolo da solenidade, alinhamento com a comissão e fornecedores, organização de entradas e homenagens e coordenação da equipe no dia do evento.",
  },
  {
    q: "Vocês fazem cerimonial para colações de grau?",
    a: "Sim. A assessoria para colações de grau pode incluir planejamento do roteiro, protocolo da solenidade, alinhamento com a comissão e fornecedores, organização de entradas e homenagens e coordenação da equipe no dia do evento.",
  },
  {
    q: "Quanto custa um cerimonial?",
    a: "O valor depende do formato contratado (assessoria do dia, parcial ou cerimonial completo), do número de convidados, da cidade e da duração do evento. Por isso, o orçamento é montado sob medida após uma conversa inicial.",
  },
  {
    q: "Como solicitar orçamento?",
    a: "Basta enviar uma mensagem pelo WhatsApp (37) 99926-5472 ou preencher o formulário do site com data, cidade, tipo de evento e número aproximado de convidados. Retornamos com uma proposta personalizada.",
  },
  {
    q: "Qual a diferença entre assessoria do dia e organização completa?",
    a: "A assessoria do dia coordena tudo na data do evento — fornecedores, cronograma e bastidores. A organização completa acompanha você desde o planejamento, com reuniões, escolhas e alinhamentos durante todo o processo.",
  },
  {
    q: "Vocês acompanham os fornecedores?",
    a: "Sim. Fazemos alinhamento prévio, conferência de contratos, briefings e coordenação dos fornecedores antes e durante o evento, garantindo que cada um cumpra o combinado.",
  },
  {
    q: "Atendem fora de Pará de Minas?",
    a: "Sim. Atendemos toda a região e também viajamos para casamentos e eventos em outras cidades de Minas Gerais. Entre em contato com a cidade e data para confirmarmos disponibilidade.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "É personalizado. Após uma conversa inicial pelo WhatsApp para entender o tipo de evento, data, local e nível de assessoria desejado, enviamos uma proposta sob medida.",
  },
  {
    q: "O atendimento é personalizado?",
    a: "Totalmente. Cada noiva, debutante ou família tem um perfil único, e o atendimento é desenhado para acolher o seu momento, com proximidade e cuidado em cada decisão.",
  },
];

const FAQ = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="duvidas" className="py-24 md:py-32 bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="heading-ornament text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Dúvidas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
            Perguntas Frequentes
          </h2>
          <div className="premium-divider mt-6">
            <div className="ornament" />
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gold-light/20 bg-card/40 px-5 md:px-6 transition-colors hover:border-gold-light/40"
            >
              <AccordionTrigger className="font-serif text-base md:text-lg font-normal text-foreground text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-light leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
