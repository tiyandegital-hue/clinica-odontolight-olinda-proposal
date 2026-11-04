# QA LOG — Clínica Odontolight proposal site
Data: 2026-11-04 · Rodadas: 3 (Playwright Chromium headless, viewports 1440px e 390px)

## Rodada 1 — baseline (9 páginas × 2 viewports)
- Overflow horizontal: NENHUM em nenhuma página/viewport ✓
- Links internos quebrados: NENHUM ✓
- Erros de console: apenas `ERR_TUNNEL_CONNECTION_FAILED` no fonts.googleapis.com
  (artefato do sandbox — rede externa bloqueada no headless; irrelevante em produção)
- Ação: fontes auto-hospedadas (Sora + Inter variable, latin, woff2) — zero embeds de terceiros

## Correções aplicadas
1. **Fontes auto-hospedadas** (`assets/fonts/`, @font-face com weight-range variável).
   Melhoria real: privacidade (checklist §3 — zero conexões externas), confiabilidade no BR.
2. **Bug de caminho** corrigido: `../fonts/` → `../assets/fonts/` (CSS está em /css/).
3. **privacidade.html**: texto atualizado — "zero conexões externas" em vez de "só Google Fonts".

## Rodada 2 — pós-correções
- Overflow: NENHUM ✓ · Links quebrados: NENHUM ✓ · Console: ZERO erros ✓
- Formulários (agendamento + contato): preenchimento + submit simulado → estado de sucesso exibido ✓
- Navegação mobile (burger → menu abre) ✓
- FAQ accordion: alarme falso no teste automatizado (`get_attribute("open")` retorna "" );
  verificação manual confirmou `el.open === true` — funciona ✓

## Rodada 3 — tipografia real + teclado
- H1 renderiza em Sora (confirmado via getComputedStyle) ✓
- Tab order: skip link → brand → nav — foco visível ✓
- Screenshots finais revisados (desktop + mobile): composição, hierarquia e ritmo aprovados

## Look-and-fix (§18 — 10 critérios)
| Critério | Nota |
|---|---|
| Primeira impressão (3s) | 9 |
| Assinatura (smile arc) | 9 |
| Tipografia | 8 |
| Composição/espaço | 8 |
| Cor/luz | 9 |
| Integração de mídia | 9 |
| Motion (especificado; verificado em código) | 8 |
| Mobile (segunda composição) | 8 |
| Copy (pt-BR, honesto) | 9 |
| Polish (favicon, 404, legal, sitemap) | 9 |
| **Média** | **8.6 — nada abaixo de 7 ✓** |

## Contraste WCAG AA (calculado)
- #0B2B32 no branco: 14.94 ✓ · #33484E no branco: 9.64 ✓ · #5C767D no branco: 4.84 ✓
- Branco sobre #087B86 (CTAs): 5.01 ✓ · #087B86 sobre branco: 5.01 ✓
- #0C99A6 reservado a gráficos/tipo grande (3.43:1) ✓

## Checklist honestidade
- [x] Zero stats/testemunhos/reviews/preços inventados
- [x] Zero credenciais médicas inventadas
- [x] Serviços = categorias gerais, tagueados "Exemplo — confirmar"
- [x] Telefone/WhatsApp/horários: "a confirmar", nunca inventados
- [x] Imagens IA rotuladas como conceituais; nenhuma pessoa identificável
- [x] JSON-LD só com dados verificados (sem aggregateRating, sem horários)
- [x] Formulários simulados com aviso explícito; consentimento LGPD
- [x] Preços da auditoria = Catálogo v3 real
- [x] Nome do negócio = 1 constante (`js/config.js` + `data-clinica`)

## Pendente (fora do escopo deste QA — requer deploy)
- Verificação 200 anônima pós-deploy em todas as páginas (curl)
- Confirmação de Deployment Protection OFF
