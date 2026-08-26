# SEO-MIGRATION-GUIDE

Guia das configurações que **não podem ser feitas pelo código do site** e precisam ser
executadas no provedor de DNS / Registro.br / painel de publicação.

## 1. Domínio principal

- Principal (definitivo): `https://cerimonialcasamentos.com.br`
- Secundário (transição): `https://ana.cerimonialcasamentos.com.br`

O código já usa o domínio principal em canonical, `og:url`, sitemap, robots.txt e JSON-LD
(`src/lib/site.ts` → `SITE_URL`).

## 2. O que precisa ser feito fora do código

1. **Apontar o domínio principal para o projeto**
   - No painel de publicação, conectar `cerimonialcasamentos.com.br` (e `www`) como domínio
     personalizado do projeto.
   - Confirmar a emissão do certificado SSL (HTTPS) antes de divulgar o endereço.

2. **DNS (Registro.br ou provedor de DNS)**
   - Criar/ajustar os registros indicados pelo painel de publicação (normalmente `A`/`ALIAS`
     para o apex e `CNAME` para `www`).
   - Não remover os registros do subdomínio `ana.` durante a transição.

3. **Redirecionamento 301**
   - Configurar redirect 301 de `www.cerimonialcasamentos.com.br` → apex (ou o inverso,
     escolhendo apenas uma versão canônica).
   - Após o domínio principal estar estável e indexado, configurar 301 de
     `ana.cerimonialcasamentos.com.br` → `cerimonialcasamentos.com.br`.
   - **Não desative o domínio antigo** antes disso.

4. **Google Search Console**
   - Adicionar e verificar a propriedade do novo domínio e enviar o sitemap.
   - Ver `GOOGLE-SEARCH-CONSOLE-GUIDE.md`.

5. **Google Business Profile e redes sociais**
   - Atualizar o campo "site" para o domínio principal.
   - Ver `GOOGLE-BUSINESS-PROFILE-SEO.md`.

## 3. Como trocar o domínio no código (se necessário)

Basta alterar uma constante:

```ts
// src/lib/site.ts
export const SITE_URL = "https://cerimonialcasamentos.com.br";
```

E atualizar as URLs em `public/sitemap.xml`, `public/robots.txt` e `index.html`.

## 4. Pendências de conteúdo (não inventar dados)

- `/casamentos-reais` e `/debutantes-reais` estão publicadas com `noindex` até receberem
  eventos reais. Preencher `src/content/realEvents.ts` com nomes autorizados, fotos com
  direito de uso, fornecedores e depoimentos verdadeiros — depois disso, remover o `noindex`
  acontece automaticamente e as URLs devem ser adicionadas ao `sitemap.xml`.
- Endereço comercial completo: só deve ser publicado se houver endereço de atendimento real.
- Números exibidos no site (casamentos realizados, avaliações, anos de experiência) devem ser
  confirmados pela Ana Júlia — o código apenas reproduz o que já estava publicado.
