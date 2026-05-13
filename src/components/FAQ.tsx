import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual a diferença entre cerimonial e assessoria?",
    a: "A assessoria acompanha você desde o planejamento, ajudando em decisões, fornecedores e cronograma. O cerimonial é a coordenação no dia do evento, garantindo que tudo aconteça conforme planejado.",
  },
  {
    q: "Com quanto tempo de antecedência devo contratar?",
    a: "O ideal é entre 6 e 12 meses antes do evento, principalmente para datas concorridas. Mas também atendemos contratos com prazos menores conforme disponibilidade.",
  },
  {
    q: "Vocês atendem em quais cidades?",
    a: "Atendemos em toda a região e também viajamos para destinos especiais. Entre em contato com a data e cidade do evento para confirmarmos disponibilidade.",
  },
  {
    q: "Como funciona a lista de presença digital?",
    a: "É uma plataforma onde os convidados confirmam presença online (RSVP), informam preferências e visualizam todas as informações do evento. Você acompanha tudo em tempo real.",
  },
  {
    q: "O que está incluso no cerimonial do dia?",
    a: "Coordenação completa de fornecedores, gestão do cronograma, supervisão de cada etapa, resolução de imprevistos e acompanhamento integral do evento do início ao fim.",
  },
  {
    q: "Como solicito um orçamento?",
    a: "Você pode preencher o formulário de contato no site ou falar diretamente comigo pelo WhatsApp. Respondo o mais rápido possível com uma proposta personalizada.",
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
