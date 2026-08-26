export interface Section {
  h: string;
  p?: string[];
  list?: string[];
}

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: "Casamento" | "15 Anos";
  updated: string; // ISO
  intro: string;
  sections: Section[];
}

export const posts: Post[] = [
  {
    slug: "quanto-custa-um-cerimonial-de-casamento",
    title: "Quanto custa um cerimonial de casamento em 2026?",
    metaTitle: "Quanto Custa um Cerimonial de Casamento em 2026? | Ana Júlia Cerimonial",
    description:
      "Entenda o que define o valor de um cerimonial de casamento em 2026: tipo de contrato, número de convidados, cidade, duração e equipe envolvida.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "Não existe um preço único de cerimonial: o valor muda conforme o formato contratado e a complexidade do evento. Abaixo estão os fatores que realmente pesam no orçamento, para você comparar propostas com critério.",
    sections: [
      {
        h: "O que faz o preço variar",
        list: [
          "Formato do serviço: apenas o dia do evento, assessoria parcial ou cerimonial completo desde o planejamento",
          "Número de convidados, que define o tamanho da equipe no dia",
          "Cidade e distância — eventos fora da região podem incluir deslocamento e hospedagem",
          "Duração do evento e horário de encerramento",
          "Quantidade de fornecedores a coordenar",
          "Existência de cerimônia religiosa, protocolos especiais ou mais de um local",
        ],
      },
      {
        h: "Cerimonial completo x assessoria do dia",
        p: [
          "O cerimonial completo acompanha o casal por meses: cronograma, seleção e alinhamento de fornecedores, reuniões, checklist e execução. Naturalmente é o formato de maior investimento, porque envolve horas de trabalho ao longo de todo o processo.",
          "A assessoria do dia concentra o trabalho na semana e no dia do evento. Custa menos, mas pressupõe que o casal já tenha contratado e organizado os fornecedores.",
        ],
      },
      {
        h: "Como comparar propostas de forma justa",
        p: [
          "Antes de olhar o valor, verifique o que está incluído: quantas pessoas da equipe estarão presentes, por quantas horas, quantas reuniões estão previstas e se há visita técnica ao espaço.",
          "Duas propostas com preços distantes muitas vezes descrevem serviços diferentes. A comparação só faz sentido quando o escopo é equivalente.",
        ],
      },
      {
        h: "Por que orçamentos são personalizados",
        p: [
          "Cada casamento tem um desenho próprio. Por isso, na Ana Júlia Cerimonial o orçamento é montado depois de uma conversa sobre data, cidade, local, número de convidados e nível de acompanhamento desejado — sem pacotes genéricos.",
        ],
      },
    ],
  },
  {
    slug: "o-que-faz-um-cerimonialista",
    title: "O que faz um cerimonialista de casamento?",
    metaTitle: "O Que Faz um Cerimonialista de Casamento? | Ana Júlia Cerimonial",
    description:
      "Entenda na prática o papel do cerimonialista: planejamento, cronograma, coordenação de fornecedores, condução da cerimônia e solução de imprevistos.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "O cerimonialista é quem transforma decisões espalhadas em um cronograma que funciona no dia. O trabalho começa muito antes da festa e termina depois do último convidado sair.",
    sections: [
      {
        h: "Antes do casamento",
        list: [
          "Organiza o cronograma geral do planejamento, por etapas e prazos",
          "Ajuda na definição de prioridades e na distribuição do orçamento",
          "Confere contratos e alinha o que cada fornecedor entregará",
          "Monta o roteiro do dia, minuto a minuto, e compartilha com todos os envolvidos",
          "Conduz o ensaio da cerimônia e o alinhamento com a igreja ou celebrante",
        ],
      },
      {
        h: "No dia do evento",
        p: [
          "Chega antes da montagem, recebe os fornecedores, confere a decoração, o som, a iluminação e a disposição das mesas conforme o combinado.",
          "Coordena a chegada dos convidados, a entrada do cortejo, a cerimônia, o momento das fotos, a abertura da pista, os discursos e o encerramento.",
        ],
      },
      {
        h: "O que muitas pessoas não veem",
        p: [
          "Boa parte do trabalho é resolver imprevistos sem que ninguém perceba: um atraso de fornecedor, uma mudança de clima, um ajuste de horário, um convidado que precisa de atenção especial.",
          "O objetivo é que a família participe da celebração como convidada, não como produção.",
        ],
      },
    ],
  },
  {
    slug: "quando-contratar-um-cerimonialista",
    title: "Quando contratar um cerimonialista?",
    metaTitle: "Quando Contratar um Cerimonialista? | Ana Júlia Cerimonial",
    description:
      "Descubra o momento ideal para contratar o cerimonial do seu casamento e o que muda quando a contratação acontece cedo ou perto da data.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "Quanto antes o cerimonial entra no processo, mais decisões podem ser organizadas com calma — e menos retrabalho aparece nos últimos meses.",
    sections: [
      {
        h: "O cenário ideal: entre 6 e 12 meses antes",
        p: [
          "Nesse intervalo ainda é possível influenciar escolhas estruturais: espaço, data, número de convidados e distribuição do orçamento. É quando o cerimonial gera mais economia, porque evita contratações apressadas.",
          "Datas muito procuradas, como fins de semana prolongados e meses de temporada, costumam esgotar antes. Se a sua data é concorrida, antecipe a conversa.",
        ],
      },
      {
        h: "Contratação com 2 a 4 meses",
        p: [
          "Ainda é um bom momento. O foco passa a ser organizar o que já foi contratado, revisar contratos, fechar lacunas e construir o roteiro do dia.",
        ],
      },
      {
        h: "Contratação nas últimas semanas",
        p: [
          "É possível, sobretudo no formato de assessoria do dia. Nesse caso, o trabalho se concentra em conferir tudo o que foi fechado e assumir a coordenação da execução.",
          "A disponibilidade depende da data, então vale consultar antes de descartar a possibilidade.",
        ],
      },
    ],
  },
  {
    slug: "checklist-completo-para-organizar-um-casamento",
    title: "Checklist completo para organizar um casamento",
    metaTitle: "Checklist Completo para Organizar um Casamento | Ana Júlia Cerimonial",
    description:
      "Checklist prático de organização de casamento, dividido por etapas: definição, contratações, ajustes finais e semana do evento.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "Organizar um casamento é uma sequência de decisões encadeadas. Este checklist separa as etapas para você avançar sem acúmulo de pendências.",
    sections: [
      {
        h: "Etapa 1 — Definições iniciais",
        list: [
          "Definir o orçamento total e o limite por categoria",
          "Escolher a data e ter uma segunda opção",
          "Estimar o número de convidados",
          "Definir o estilo do casamento e o local da cerimônia e da festa",
        ],
      },
      {
        h: "Etapa 2 — Contratações estruturais",
        list: [
          "Espaço, buffet e bebidas",
          "Cerimonial e assessoria",
          "Fotografia e vídeo",
          "Decoração e flores",
          "Música da cerimônia e da festa",
          "Traje dos noivos, beleza e documentação civil ou religiosa",
        ],
      },
      {
        h: "Etapa 3 — Ajustes (60 a 30 dias antes)",
        list: [
          "Fechar a lista definitiva de convidados e confirmar presenças",
          "Definir o mapa de mesas",
          "Realizar degustação e provas finais",
          "Revisar contratos, horários de montagem e formas de pagamento",
          "Montar o roteiro detalhado do dia",
        ],
      },
      {
        h: "Etapa 4 — Semana do casamento",
        list: [
          "Reconfirmar todos os fornecedores",
          "Realizar o ensaio da cerimônia",
          "Separar documentos, alianças e itens pessoais",
          "Combinar horários de chegada de cada pessoa envolvida",
          "Delegar as pendências e descansar",
        ],
      },
    ],
  },
  {
    slug: "como-organizar-um-casamento-com-orcamento-limitado",
    title: "Como organizar um casamento com orçamento limitado",
    metaTitle: "Como Organizar um Casamento com Orçamento Limitado | Ana Júlia Cerimonial",
    description:
      "Estratégias reais para casar gastando menos: prioridades, número de convidados, escolha de data e decisões que mais impactam o custo final.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "Casar com orçamento limitado é, antes de tudo, uma questão de prioridades bem definidas. Poucas decisões respondem pela maior parte do custo.",
    sections: [
      {
        h: "1. O número de convidados é a decisão mais cara",
        p: [
          "Cada convidado multiplica buffet, bebida, louça, mesa, cadeira e espaço. Reduzir a lista costuma gerar mais economia do que cortar vários itens pequenos.",
        ],
      },
      {
        h: "2. Escolha da data e do horário",
        p: [
          "Datas fora de alta temporada e horários que dispensam jantar completo tendem a ter valores mais acessíveis. Vale consultar disponibilidade em dias menos concorridos.",
        ],
      },
      {
        h: "3. Defina três prioridades inegociáveis",
        p: [
          "Escolha o que realmente marca a experiência para vocês — por exemplo, fotografia, comida e música — e concentre o investimento nesses pontos. Nos demais, aceite versões mais simples.",
        ],
      },
      {
        h: "4. Cuidado com o custo invisível",
        list: [
          "Taxas de serviço, rolha e horas extras",
          "Estrutura de energia, iluminação e banheiros em espaços abertos",
          "Transporte e hospedagem de fornecedores de outra cidade",
          "Impressões, lembrancinhas e itens de última hora",
        ],
      },
      {
        h: "5. Assessoria não é gasto supérfluo",
        p: [
          "Um cronograma bem feito evita contratações emergenciais, multas por atraso e serviços duplicados — que costumam custar mais do que o próprio planejamento.",
        ],
      },
    ],
  },
  {
    slug: "cerimonial-ou-assessoria-de-casamento",
    title: "Cerimonial ou assessoria de casamento: qual contratar?",
    metaTitle: "Cerimonial ou Assessoria de Casamento: Qual Contratar? | Ana Júlia Cerimonial",
    description:
      "Entenda a diferença entre cerimonial, assessoria completa e assessoria do dia, e descubra qual formato faz sentido para o seu casamento.",
    category: "Casamento",
    updated: "2026-08-01",
    intro:
      "Os termos se misturam no mercado. Na prática, o que muda entre eles é quando o serviço começa e quanto do planejamento fica sob responsabilidade da equipe.",
    sections: [
      {
        h: "Assessoria completa",
        p: [
          "Começa no início do planejamento. Envolve cronograma, definição de prioridades, seleção e alinhamento de fornecedores, reuniões periódicas e acompanhamento até o dia.",
          "Indicada para casais com pouco tempo disponível ou que preferem apoio em todas as decisões.",
        ],
      },
      {
        h: "Cerimonial",
        p: [
          "É a execução: roteiro do dia, coordenação de fornecedores, condução da cerimônia e do protocolo da festa. Em muitas contratações, o cerimonial vem incluído na assessoria completa.",
        ],
      },
      {
        h: "Assessoria do dia",
        p: [
          "Concentra o trabalho na reta final. A equipe assume o evento já contratado, confere tudo e coordena a execução.",
          "Indicada para quem organizou o casamento por conta própria, mas não quer administrar imprevistos na data.",
        ],
      },
      {
        h: "Como escolher",
        list: [
          "Tenho tempo e gosto de organizar? Assessoria do dia pode bastar.",
          "Estou perdida nas decisões e prazos? Assessoria completa.",
          "Já contratei tudo, mas quero segurança no dia? Cerimonial / assessoria do dia.",
        ],
      },
    ],
  },
  {
    slug: "quanto-custa-uma-festa-de-15-anos",
    title: "Quanto custa uma festa de 15 anos em 2026?",
    metaTitle: "Quanto Custa uma Festa de 15 Anos em 2026? | Ana Júlia Cerimonial",
    description:
      "Os fatores que definem o custo de uma festa de 15 anos em 2026: formato, convidados, espaço, decoração, produção e cerimonial.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro:
      "O valor de uma festa de 15 anos depende muito do formato escolhido. Uma celebração intimista e um baile tradicional têm estruturas completamente diferentes.",
    sections: [
      {
        h: "Principais componentes do orçamento",
        list: [
          "Espaço e estrutura (mesas, cadeiras, climatização, energia)",
          "Buffet, bebidas e equipe de serviço",
          "Decoração, flores e cenografia",
          "Som, iluminação, DJ ou banda",
          "Fotografia, vídeo e, quando desejado, ensaio prévio",
          "Vestido, beleza, coreografia e ensaio da valsa",
          "Cerimonial e coordenação do evento",
        ],
      },
      {
        h: "O que mais faz o valor subir",
        p: [
          "Número de convidados, duração da festa e complexidade da produção — especialmente quando há cenografia elaborada, efeitos, telão ou apresentações.",
          "Festas em espaços abertos exigem estrutura extra, o que precisa entrar na conta desde o início.",
        ],
      },
      {
        h: "Como planejar sem estourar",
        p: [
          "Defina o teto do orçamento antes de visitar fornecedores e reserve de 5% a 10% para imprevistos. Depois, distribua por prioridade: o que a debutante mais quer lembrar daquele dia.",
        ],
      },
      {
        h: "Orçamento sob medida",
        p: [
          "Fazemos o orçamento de cerimonial de 15 anos após entender data, cidade, local, número de convidados e formato da festa. Fale com a gente pelo WhatsApp para receber uma proposta.",
        ],
      },
    ],
  },
  {
    slug: "como-organizar-uma-festa-de-15-anos",
    title: "Como organizar uma festa de 15 anos",
    metaTitle: "Como Organizar uma Festa de 15 Anos | Ana Júlia Cerimonial",
    description:
      "Passo a passo para organizar uma festa de 15 anos: definição do formato, orçamento, fornecedores, protocolo, valsa e cronograma da noite.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro:
      "A festa de 15 anos combina celebração e protocolo. Organizar em etapas evita que decisões importantes fiquem para a última hora.",
    sections: [
      {
        h: "1. Defina o formato com a debutante",
        p: [
          "Baile tradicional com valsa, festa moderna com pista desde o início ou celebração intimista? Essa escolha orienta espaço, decoração, música e roteiro.",
        ],
      },
      {
        h: "2. Orçamento e lista de convidados",
        p: [
          "Estabeleça o valor total disponível e a quantidade de convidados antes de fechar o espaço — os dois números caminham juntos.",
        ],
      },
      {
        h: "3. Contratações principais",
        list: [
          "Espaço e buffet",
          "Decoração e iluminação",
          "DJ ou banda e som",
          "Fotografia e vídeo",
          "Vestido, beleza e coreógrafo, se houver valsa ou apresentação",
          "Cerimonial para coordenar tudo no dia",
        ],
      },
      {
        h: "4. Protocolo e momentos especiais",
        p: [
          "Entrada da debutante, valsa com o pai e familiares, homenagens, corte do bolo, troca de sapatilha e abertura da pista precisam de ordem definida e ensaio prévio.",
        ],
      },
      {
        h: "5. Cronograma da noite",
        p: [
          "Um roteiro com horários evita que a festa fique parada entre um momento e outro. É o que mantém o ritmo e a energia dos convidados.",
        ],
      },
    ],
  },
  {
    slug: "checklist-completo-para-festa-de-15-anos",
    title: "Checklist completo para festa de 15 anos",
    metaTitle: "Checklist Completo para Festa de 15 Anos | Ana Júlia Cerimonial",
    description:
      "Checklist de organização de festa de 15 anos dividido por etapas, do planejamento inicial até a semana da festa.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro: "Use este checklist como guia de acompanhamento ao longo do planejamento.",
    sections: [
      {
        h: "Planejamento inicial",
        list: [
          "Definir data, formato e orçamento",
          "Estimar o número de convidados",
          "Escolher e reservar o espaço",
          "Contratar o cerimonial",
        ],
      },
      {
        h: "Contratações",
        list: [
          "Buffet e bebidas",
          "Decoração, flores e bolo",
          "DJ, som e iluminação",
          "Fotografia e vídeo",
          "Vestido, sapatos e acessórios",
          "Beleza e coreografia",
        ],
      },
      {
        h: "30 dias antes",
        list: [
          "Confirmar presenças e definir mesas",
          "Fechar o roteiro do protocolo e das homenagens",
          "Ensaiar a valsa e a entrada",
          "Revisar contratos, horários e pagamentos",
        ],
      },
      {
        h: "Semana da festa",
        list: [
          "Reconfirmar todos os fornecedores",
          "Conferir vestido, sapatos e itens pessoais",
          "Definir horários de chegada da família e da equipe",
          "Repassar o cronograma com a debutante",
        ],
      },
    ],
  },
  {
    slug: "como-escolher-o-cerimonialista-da-festa-de-15-anos",
    title: "Como escolher o cerimonialista da sua festa de 15 anos?",
    metaTitle: "Como Escolher o Cerimonialista da Festa de 15 Anos | Ana Júlia Cerimonial",
    description:
      "O que avaliar antes de contratar o cerimonial de uma festa de debutante: escopo, equipe, experiência com protocolo e forma de comunicação.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro:
      "A escolha do cerimonial define como será a experiência da família no dia. Alguns critérios ajudam a decidir com segurança.",
    sections: [
      {
        h: "Perguntas que valem a pena fazer",
        list: [
          "O que exatamente está incluído na proposta?",
          "Quantas pessoas da equipe estarão presentes e por quanto tempo?",
          "Haverá visita técnica ao espaço antes da festa?",
          "Como funciona o ensaio da entrada e da valsa?",
          "Quem será o contato no dia do evento?",
        ],
      },
      {
        h: "Experiência com protocolo de debutante",
        p: [
          "Festa de 15 anos tem particularidades: ordem das homenagens, participação dos familiares, coreografias e apresentações. Experiência específica nesse formato faz diferença no ritmo da noite.",
        ],
      },
      {
        h: "Comunicação e afinidade",
        p: [
          "A debutante precisa se sentir à vontade para dizer o que quer. Uma conversa inicial já mostra se a comunicação flui e se as expectativas estão alinhadas.",
        ],
      },
    ],
  },
  {
    slug: "ideias-para-festa-de-15-anos",
    title: "Ideias para festa de 15 anos",
    metaTitle: "Ideias para Festa de 15 Anos | Ana Júlia Cerimonial",
    description:
      "Formatos, temas e momentos especiais para inspirar a festa de 15 anos — do baile tradicional às celebrações modernas e intimistas.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro:
      "Não existe um único jeito de comemorar 15 anos. Estas ideias ajudam a encontrar um formato que combine com a debutante.",
    sections: [
      {
        h: "Formatos possíveis",
        list: [
          "Baile clássico, com valsa, homenagens e protocolo completo",
          "Festa moderna, com pista aberta desde cedo e menos protocolo",
          "Celebração intimista, com jantar para família e amigos próximos",
          "Festa temática, com decoração e trilha sonora conectadas a um universo escolhido",
          "Comemoração ao ar livre, em chácara ou espaço aberto",
        ],
      },
      {
        h: "Momentos que marcam",
        list: [
          "Vídeo com fotos da infância exibido antes da entrada",
          "Valsa com o pai, avós e amigos escolhidos",
          "Troca de sapatilha por um sapato escolhido pela debutante",
          "Apresentação ou coreografia com as amigas",
          "Cabine de fotos, mural de recados ou cápsula do tempo",
        ],
      },
      {
        h: "Detalhes que elevam a experiência",
        p: [
          "Iluminação bem planejada, uma trilha sonora pensada por momento e um cronograma que evita pausas longas costumam impactar mais do que itens caros de decoração.",
        ],
      },
    ],
  },
  {
    slug: "cronograma-de-uma-festa-de-debutante",
    title: "Como montar o cronograma de uma festa de debutante",
    metaTitle: "Cronograma de Festa de Debutante: Como Montar | Ana Júlia Cerimonial",
    description:
      "Modelo de cronograma para festa de 15 anos: montagem, recepção, entrada, valsa, jantar, homenagens, pista e encerramento.",
    category: "15 Anos",
    updated: "2026-08-01",
    intro:
      "O cronograma é o documento que mantém a festa no ritmo. Ele começa horas antes da chegada do primeiro convidado.",
    sections: [
      {
        h: "Antes dos convidados",
        list: [
          "Montagem de decoração, som e iluminação",
          "Chegada do buffet e organização do serviço",
          "Conferência de mesas, bolo e áreas de circulação",
          "Preparação da debutante e fotos prévias",
        ],
      },
      {
        h: "Durante a festa",
        list: [
          "Recepção dos convidados com música ambiente",
          "Entrada da debutante e apresentação",
          "Valsa e homenagens",
          "Serviço de jantar ou ceia",
          "Corte do bolo e brinde",
          "Abertura da pista",
        ],
      },
      {
        h: "Encerramento",
        list: [
          "Último bloco musical e aviso de encerramento",
          "Agradecimentos da família",
          "Saída dos convidados e desmontagem dos fornecedores",
        ],
      },
      {
        h: "Regras de ouro",
        p: [
          "Deixe intervalos curtos entre os momentos e evite concentrar tudo no início. Compartilhe o cronograma final com todos os fornecedores e com a família alguns dias antes.",
        ],
      },
    ],
  },
];

export const getPost = (slug?: string) => posts.find((p) => p.slug === slug);
