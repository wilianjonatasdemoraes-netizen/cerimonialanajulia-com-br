// Domínio oficial confirmado: ana.cerimonialcasamentos.com.br.
export const SITE_URL = "https://ana.cerimonialcasamentos.com.br";
export const SITE_NAME = "Ana Júlia Cerimonial";
export const LEGACY_URL = "https://cerimonialcasamentos.com.br";

export const WHATSAPP_NUMBER = "5537999265472";
export const PHONE_DISPLAY = "(37) 99926-5472";
export const INSTAGRAM_URL = "https://www.instagram.com/Anajuliacerimonialista";

export const CITY = "Pará de Minas";
export const REGION = "MG";

export const canonical = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
