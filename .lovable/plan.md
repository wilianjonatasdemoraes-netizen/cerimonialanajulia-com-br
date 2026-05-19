## Reestruturação Premium — Ana Júlia Cerimonial

Vou reconstruir o site em uma experiência cinematográfica, emocional e altamente conversiva, mantendo a paleta atual (champanhe, off-white, nude, dourado) e elevando todos os elementos.

### Escopo do trabalho

**1. Hero cinematográfica**
- Vídeo de fundo emocional em loop (slow motion) com overlay sofisticado
- Headline: "Transformamos sonhos em momentos inesquecíveis."
- Subheadline com posicionamento local (Pará de Minas e região)
- CTAs emocionais: "QUERO REALIZAR MEU SONHO" + "VER EVENTOS"
- Micro animações de entrada (fade-up escalonado), scroll indicator refinado

**2. Storytelling emocional (nova seção)**
- História da marca + missão + propósito
- Layout editorial em duas colunas (texto + imagem) com tipografia serifada grande
- Tom acolhedor, feminino, sofisticado

**3. Prova social premium ampliada**
- Depoimentos em cards com foto, nome e tipo de evento
- Bloco de estatísticas animadas (counters): eventos realizados, clientes, anos
- Estilo "review Google" e "print WhatsApp" estilizado
- Avaliação 5 estrelas com selo de confiança

**4. CTAs de alta conversão**
- Substituir todos os "Fale conosco" por CTAs emocionais
- CTA flutuante WhatsApp já existe — refinar visual premium
- Barra CTA sticky elegante após scroll do hero

**5. SEO avançado + local**
- Schema markup expandido: LocalBusiness com endereço, geo, openingHours, priceRange, aggregateRating, areaServed (Pará de Minas, Divinópolis, Itaúna, etc.)
- Schema FAQPage automatizado a partir do componente FAQ
- Schema Service para cada serviço oferecido
- Headings semânticas revisadas (um H1, hierarquia limpa)
- Meta description otimizada com palavra-chave local
- Open Graph e Twitter cards refinados
- Alt text descritivo em todas as imagens
- Lazy loading + dimensões explícitas (CLS)

**6. Seção final emocional**
- "Seu momento merece ser inesquecível."
- CTA "QUERO COMEÇAR" destacado

**7. Rodapé premium**
- Instagram, WhatsApp, localização (Pará de Minas/MG), horário de atendimento
- Links rápidos de navegação
- Copyright elegante

**8. Refinamentos visuais transversais**
- Animações de scroll (fade-in on view) com IntersectionObserver
- Transições mais suaves entre seções
- Hierarquia tipográfica revisada
- Mobile-first: revisar spacing, tap targets, legibilidade

### Fora do escopo desta entrega (peço confirmação separada)

- **Vídeo de fundo real do Hero**: o repo só tem um vídeo placeholder. Vou implementar a estrutura e usar o vídeo atual `apresentacao.mp4` como fundo, mas você precisará me enviar (ou indicar URL) de um vídeo cinematográfico real de casamentos para substituir.
- **Sistema de blog completo**: criar blog com CMS, páginas dinâmicas, rotas, banco de posts é um projeto separado (requer Lovable Cloud + ~6-10 posts iniciais). Posso fazer numa próxima rodada — confirme se quer agora.
- **Fotos profissionais reais de eventos**: usarei as imagens já presentes no projeto. Novas fotos requerem upload.

### Detalhes técnicos

- Stack mantida: React + Vite + Tailwind + design tokens existentes em `index.css`
- Animações com Tailwind keyframes + IntersectionObserver hook (sem nova dependência pesada)
- JSON-LD adicionado em `index.html` (sitewide) e via `react-helmet-async` quando contextual
- Sem mudanças de backend; site permanece estático
- Manter telefone (37) 99926-5472 e @Anajuliacerimonialista

### Ordem de execução

1. Atualizar SEO base (index.html schema, meta, OG)
2. Refazer Hero com vídeo de fundo + novos CTAs
3. Criar componente Storytelling emocional
4. Criar componente Stats animadas
5. Refinar Testimonials (estilo Google + WhatsApp)
6. Atualizar FinalCTA com novo copy
7. Refinar Footer (premium)
8. Passe final: animações de scroll, mobile QA

Posso prosseguir? Confirme também se quer que eu já comece o **blog** nesta mesma rodada ou em uma próxima.