# DOMAIN-MIGRATION-GUIDE

Migração de `https://ana.cerimonialcasamentos.com.br` para
`https://cerimonialcasamentos.com.br`.

> Regra principal: **não desativar o domínio antigo**. Ele deve continuar respondendo e
> redirecionando por, no mínimo, 6 a 12 meses.

## Etapa 1 — Preparação (já feita no código)

- [x] `SITE_URL` definido como `https://cerimonialcasamentos.com.br` (`src/lib/site.ts`)
- [x] Canonical de todas as páginas apontando para o domínio principal
- [x] `og:url` e Twitter Cards atualizados
- [x] `sitemap.xml` e `robots.txt` com o domínio principal
- [x] JSON-LD (`LocalBusiness`, `Service`, `Article`, `BreadcrumbList`) com o domínio principal
- [x] Links internos usando caminhos relativos (`/cerimonial-de-casamento`), válidos em qualquer domínio

## Etapa 2 — Publicação do domínio principal

1. Conectar `cerimonialcasamentos.com.br` no painel de publicação.
2. Configurar o DNS conforme as instruções exibidas.
3. Aguardar a propagação e o certificado HTTPS.
4. Testar: `https://cerimonialcasamentos.com.br/`, `/blog`, `/cerimonial-de-casamento`.

## Etapa 3 — Redirecionamento 301

- Definir uma única versão canônica (recomendado: apex, sem `www`).
- Redirecionar 301: `www` → apex; `http` → `https`.
- Após validar o novo domínio no Search Console, redirecionar 301
  `ana.cerimonialcasamentos.com.br/*` → `cerimonialcasamentos.com.br/*`, preservando o caminho.

## Etapa 4 — Search Console

1. Adicionar a nova propriedade e verificar.
2. Enviar `https://cerimonialcasamentos.com.br/sitemap.xml`.
3. Usar a ferramenta **Mudança de endereço** (Change of Address) do domínio antigo para o novo,
   quando o 301 estiver ativo.
4. Solicitar indexação das páginas principais.

## Etapa 5 — Atualizações externas

- Google Business Profile: campo "site"
- Instagram, Facebook, WhatsApp Business
- Anúncios, materiais impressos, assinatura de e-mail
- Parcerias e portais de fornecedores que linkam para o site

## Etapa 6 — Testes pós-migração

- [ ] Todas as rotas abrem no novo domínio
- [ ] Domínio antigo redireciona com 301 preservando o caminho
- [ ] `sitemap.xml` e `robots.txt` acessíveis no novo domínio
- [ ] Canonical de cada página aponta para o novo domínio
- [ ] Compartilhamento no WhatsApp/Facebook exibe título e descrição corretos
- [ ] Formulário e botões de WhatsApp funcionando
- [ ] Sem erros no relatório de cobertura do Search Console
