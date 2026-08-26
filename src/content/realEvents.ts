/**
 * Estrutura de cadastro de eventos reais.
 *
 * IMPORTANTE: nenhum evento deve ser inventado. Preencha os arrays abaixo
 * somente com informações reais fornecidas pela Ana Júlia Cerimonial
 * (nomes autorizados, fotos com direito de uso e depoimentos verdadeiros).
 */
export interface RealEvent {
  slug: string;
  /** Nomes dos noivos ou nome da debutante */
  names: string;
  city: string;
  venue: string;
  /** Data no formato ISO (AAAA-MM-DD) */
  date: string;
  guests?: number;
  /** História / contexto do casal ou da família */
  story?: string;
  description?: string;
  /** Caminhos de imagens já existentes no projeto ou URLs autorizadas */
  photos?: { src: string; alt: string }[];
  videos?: string[];
  suppliers?: { role: string; name: string }[];
  testimonial?: { text: string; author: string };
}

/** Casamentos reais — aguardando cadastro de conteúdo real. */
export const realWeddings: RealEvent[] = [];

/** Festas de 15 anos reais — aguardando cadastro de conteúdo real. */
export const realDebutantes: RealEvent[] = [];
