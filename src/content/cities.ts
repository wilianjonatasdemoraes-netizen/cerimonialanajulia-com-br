export interface CityContent {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; list?: string[] }[];
}

export const cities: CityContent[] = [
  {
    slug: "cerimonial-para-de-minas",
    name: "Pará de Minas",
    title: "Cerimonialista em Pará de Minas | Ana Júlia Cerimonial",
    description:
      "Cerimonial e assessoria de casamento em Pará de Minas — MG. Planejamento, coordenação de fornecedores e execução do dia do evento com acompanhamento próximo.",
    h1: "Cerimonialista em Pará de Minas",
    intro:
      "Pará de Minas é a base da Ana Júlia Cerimonial. É aqui que acompanhamos de perto casamentos, festas de 15 anos e eventos sociais, das primeiras reuniões até o encerramento da festa.",
    sections: [
      {
        heading: "Atendimento presencial na cidade",
        paragraphs: [
          "Por atuarmos a partir de Pará de Minas, conseguimos fazer visitas técnicas aos espaços, acompanhar provas e reuniões com fornecedores sem custo adicional de deslocamento.",
          "Esse contato presencial facilita decisões práticas: posicionamento do altar, fluxo de convidados, montagem, horário de chegada de cada fornecedor e plano B em caso de chuva.",
        ],
      },
      {
        heading: "Conhecimento dos espaços e fornecedores locais",
        paragraphs: [
          "Já trabalhamos em igrejas, chácaras, salões e espaços de eventos da cidade e da zona rural do entorno. Conhecer o local antecipadamente encurta o cronograma de montagem e evita surpresas no dia.",
          "Também mantemos contato com fornecedores da região — buffet, decoração, som, iluminação, fotografia e cerimonialistas religiosos —, o que ajuda a montar uma equipe compatível com o estilo e o orçamento de cada casal.",
        ],
      },
      {
        heading: "Serviços disponíveis em Pará de Minas",
        paragraphs: [],
        list: [
          "Cerimonial completo de casamento",
          "Assessoria de casamento (parcial ou apenas no dia)",
          "Cerimonial de debutantes e festas de 15 anos",
          "Organização de eventos sociais e comemorações familiares",
        ],
      },
    ],
  },
  {
    slug: "cerimonial-divinopolis",
    name: "Divinópolis",
    title: "Cerimonialista em Divinópolis | Ana Júlia Cerimonial",
    description:
      "Cerimonial e assessoria de casamento em Divinópolis — MG. Coordenação de fornecedores, cronograma e execução do dia do evento com equipe da região Centro-Oeste.",
    h1: "Cerimonialista em Divinópolis",
    intro:
      "Divinópolis concentra grande parte dos fornecedores da região Centro-Oeste de Minas. Atendemos casamentos e festas de 15 anos na cidade com planejamento presencial nas etapas decisivas.",
    sections: [
      {
        heading: "Como funciona o atendimento em Divinópolis",
        paragraphs: [
          "O planejamento acontece em reuniões online e presenciais, concentrando as visitas em datas que realmente exigem presença: escolha e visita técnica do espaço, degustação, prova do vestido e ensaio da cerimônia.",
          "No dia do evento, a equipe chega antes da montagem e permanece até o encerramento, coordenando fornecedores e cronograma.",
        ],
      },
      {
        heading: "Casamentos em espaços urbanos e chácaras",
        paragraphs: [
          "Divinópolis oferece desde salões urbanos até chácaras nos arredores. Cada formato muda a logística: estacionamento, transporte de convidados, horário de som permitido e estrutura de energia.",
          "Avaliamos esses pontos ainda na fase de escolha do espaço, para que o orçamento não seja surpreendido por custos de infraestrutura no fim do processo.",
        ],
      },
      {
        heading: "Integração com fornecedores da cidade",
        paragraphs: [
          "Trabalhamos com os fornecedores que o casal já contratou e, quando solicitado, indicamos opções compatíveis com o estilo do evento. A escolha é sempre do casal — nosso papel é alinhar contratos, prazos e responsabilidades.",
        ],
      },
    ],
  },
  {
    slug: "cerimonial-nova-serrana",
    name: "Nova Serrana",
    title: "Cerimonialista em Nova Serrana | Ana Júlia Cerimonial",
    description:
      "Cerimonial e assessoria de casamento em Nova Serrana — MG. Planejamento, cronograma e coordenação completa do dia do casamento ou da festa de 15 anos.",
    h1: "Cerimonialista em Nova Serrana",
    intro:
      "Atendemos casamentos e festas de 15 anos em Nova Serrana com o mesmo padrão de acompanhamento da nossa base em Pará de Minas.",
    sections: [
      {
        heading: "Planejamento adaptado à rotina das famílias",
        paragraphs: [
          "Em Nova Serrana, muitos casais conciliam o planejamento com rotinas de trabalho intensas. Por isso, organizamos o cronograma em etapas curtas e objetivas, com decisões agrupadas por prioridade.",
          "Você recebe um roteiro do que precisa ser decidido em cada mês, evitando acúmulo de pendências nas últimas semanas.",
        ],
      },
      {
        heading: "Logística de fornecedores de fora da cidade",
        paragraphs: [
          "É comum que parte dos fornecedores venha de Divinópolis, Pará de Minas ou Belo Horizonte. Nesses casos, o alinhamento de horários de chegada e montagem é decisivo.",
          "Fazemos o contato prévio com cada fornecedor, confirmamos endereço, acesso e tempo de montagem, e mantemos um cronograma único compartilhado com todos.",
        ],
      },
      {
        heading: "No dia do evento",
        paragraphs: [
          "Coordenamos recepção dos convidados, entrada, cerimônia, protocolo da festa e encerramento, para que a família participe da celebração sem administrar imprevistos.",
        ],
      },
    ],
  },
  {
    slug: "cerimonial-itauna",
    name: "Itaúna",
    title: "Cerimonialista em Itaúna | Ana Júlia Cerimonial",
    description:
      "Cerimonial e assessoria de casamento em Itaúna — MG. Organização, cronograma e coordenação de fornecedores para casamentos e festas de 15 anos.",
    h1: "Cerimonialista em Itaúna",
    intro:
      "Itaúna está entre as cidades que atendemos com frequência na região Centro-Oeste de Minas Gerais, tanto em cerimônias religiosas quanto em celebrações ao ar livre.",
    sections: [
      {
        heading: "Cerimônias religiosas e civis",
        paragraphs: [
          "Cada paróquia tem seu próprio protocolo de horários, música e organização da entrada. Fazemos o alinhamento prévio com a igreja escolhida para que o ensaio e a cerimônia sigam exatamente o que foi combinado.",
          "Em cerimônias civis e ao ar livre, o foco passa a ser o conforto dos convidados, a acústica e o plano alternativo em caso de mudança de tempo.",
        ],
      },
      {
        heading: "Eventos em chácaras e espaços abertos",
        paragraphs: [
          "Boa parte dos eventos em Itaúna acontece em espaços abertos. Isso exige atenção a energia elétrica, iluminação de acesso, banheiros e transporte dos convidados.",
          "Levantamos essas necessidades na visita técnica e transformamos em uma lista objetiva de providências antes da data.",
        ],
      },
      {
        heading: "Acompanhamento até o encerramento",
        paragraphs: [
          "Permanecemos no evento até o final, coordenando o cronograma da festa, o momento dos discursos e homenagens e a saída dos fornecedores.",
        ],
      },
    ],
  },
];

export const getCity = (slug?: string) => cities.find((c) => c.slug === slug);
