# Domínio oficial e checklist de publicação

Domínio oficial confirmado: https://ana.cerimonialcasamentos.com.br.

O código deve usar esse endereço em canonical, Open Graph, JSON-LD, sitemap e robots. O domínio https://cerimonialcasamentos.com.br é tratado como endereço secundário/antigo; não deve receber canonical nem ser destino de redirecionamento do domínio oficial.

## Alterações no repositório
- SITE_URL definido para o domínio oficial.
- Metadados, sitemap e robots atualizados.
- Sitemap mantém rotas presentes no projeto; validar cada URL antes de enviar ao Search Console.

## Pendências fora do código
1. Confirmar DNS, hospedagem e HTTPS no provedor.
2. Enviar sitemap pelo Search Console após publicação.
3. Atualizar Google Business Profile, Instagram, anúncios e materiais.
4. Decidir separadamente qualquer redirecionamento do domínio secundário; não foi configurado.
5. Configurar GA4, Google Ads e Meta Pixel apenas com IDs reais.
6. O .gitignore agora evita novos commits de .env, mas não remove arquivos/segredos do histórico. Revogar e rotacionar credenciais reais que possam ter sido expostas.

## Testes pós-publicação
- Abrir a home e rotas do sitemap.
- Conferir canonical, OG, JSON-LD, robots e sitemap no domínio oficial.
- Testar formulário, WhatsApp, navegação mobile e links.
- Executar build, lint, testes e Lighthouse/Core Web Vitals.
