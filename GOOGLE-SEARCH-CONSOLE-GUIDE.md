# GOOGLE-SEARCH-CONSOLE-GUIDE

Passo a passo para configurar e acompanhar o site no Google Search Console.

## 1. Adicionar o domínio

1. Acesse <https://search.google.com/search-console>.
2. Clique em **Adicionar propriedade**.
3. Escolha o tipo:
   - **Prefixo do URL**: `https://cerimonialcasamentos.com.br/` (mais simples, verificação por
     meta tag).
   - **Domínio**: `cerimonialcasamentos.com.br` (cobre `www`, `http` e subdomínios; exige
     registro TXT no DNS).

## 2. Verificar a propriedade

**Meta tag (prefixo de URL)**
1. Copie a tag fornecida pelo Google (`<meta name="google-site-verification" ...>`).
2. Insira no `<head>` do arquivo `index.html` (já existe uma tag do subdomínio atual — mantenha
   as duas).
3. Publique o site e clique em **Verificar**.

**DNS (propriedade de domínio)**
1. Copie o registro TXT informado.
2. Adicione no painel de DNS (Registro.br ou provedor).
3. Aguarde a propagação e clique em **Verificar**.

## 3. Enviar o sitemap

1. Menu lateral → **Sitemaps**.
2. Informe `sitemap.xml` e clique em **Enviar**.
3. Confirme o status **Sucesso** e o número de URLs descobertas.

## 4. Verificar indexação

- Use a barra superior (**Inspeção de URL**) para checar uma página específica.
- Resultado esperado: "URL está no Google".
- Relatório **Páginas** mostra o que está indexado e os motivos de exclusão.

## 5. Solicitar indexação das páginas principais

Inspecione e clique em **Solicitar indexação** para:

- `/`
- `/cerimonial-de-casamento`
- `/assessoria-de-casamento`
- `/cerimonial-debutantes`
- `/festa-de-15-anos`
- `/cerimonial-para-de-minas`
- `/cerimonial-divinopolis`
- `/cerimonial-nova-serrana`
- `/cerimonial-itauna`
- `/blog`

## 6. Acompanhar erros

- **Páginas** → erros de servidor, 404, redirecionamentos, `noindex`.
- **Experiência / Core Web Vitals** → LCP, INP e CLS por grupo de URLs.
- **Aprimoramentos** → validação dos dados estruturados.

## 7. Acompanhar desempenho

Menu **Desempenho** → filtros por consulta, página, país e dispositivo.

Indicadores para acompanhar mensalmente:

| Métrica | O que observa |
| --- | --- |
| Consultas | Termos que trazem visitantes (ex.: "cerimonialista em Pará de Minas") |
| Cliques | Visitas vindas da busca |
| Impressões | Quantas vezes o site apareceu |
| CTR | Cliques ÷ impressões — títulos e descrições influenciam diretamente |
| Posição média | Onde o site aparece, em média, para cada consulta |

**Rotina sugerida:** revisar mensalmente as consultas com muitas impressões e poucos cliques —
normalmente são oportunidades de melhorar o título/descrição ou criar um conteúdo específico.
