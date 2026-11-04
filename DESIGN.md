# DESIGN.md — Clínica Odontolight · Olinda/PE (concept proposal site)

Lead: **Clínica Odontolight** — CLINICA ODONTOLIGHT LTDA · CNPJ 52.063.339/0001-30 (Ativa)
Av. Pres. Kennedy 3528 Sl 01, Peixinhos, Olinda/PE — CEP 53260-640. Abertura 04/09/2023.
Sócio-administrador: Olano Tenorio Almeida de Lima. CNAE 8630-5/04 (atividade odontológica).
NO website exists (verified 2026-11-04 — only CNPJ directory listings: cnpjcheck.com.br).
Public business email (CNPJ record): lanolimacia@gmail.com.
This is a CONCEPT demo by Tiyan Digital. Business name is ONE swappable constant
(js/config.js → CLINICA.*; `data-clinica` attributes update the whole site).

## VERIFIED FACTS (the only real data — everything else is honest placeholder)
- Razão: CLINICA ODONTOLIGHT LTDA · CNPJ 52.063.339/0001-30 · Situação: Ativa
- Endereço: Av. Pres. Kennedy 3528 Sl 01, Peixinhos, Olinda/PE, CEP 53260-640
- Abertura: 04/09/2023 · Capital social: R$ 300.000 · CNAE 8630-5/04
- Sócio-administrador: Olano Tenorio Almeida de Lima (public CNPJ record)
- Email público (registro CNPJ): lanolimacia@gmail.com
- Web atual: NENHUMA — invisível online além de listagens de CNPJ (verified via search 2026-11-04)

## NOT verified — never stated as fact
- Telefone/WhatsApp da clínica · horário de atendimento · preços · convênios
- Serviços efetivamente oferecidos (listados como categorias gerais, marcados "exemplo — confirmar")
- Equipe, dentistas responsáveis, CRO, especializações, avaliações de pacientes
- Qualquer métrica: pacientes atendidos, anos de experiência, "melhor", "#1"

## Niche research (2026-11-04 — read before designing)
Sources: ueni.com/blog/dental-websites (20 examples, 2026), krishaweb.com (12 best 2026),
dentalwebai.com (10 trends 2026), digitalmarketingagency.sg (16 examples), delmain.co (20 best 2026).
Patterns that win in dental:
1. Booking CTA ABOVE THE FOLD + sticky on mobile — 70% of patients prefer booking online; the site decides which clinic they call.
2. Anxiety reduction is the job: warm-and-modern beats clinical-sterile; calming palettes — soft teals, warm whites.
3. Hero = real smile / patient interaction, never stock "business handshake" teeth.
4. Cost question answered proactively near hero (price-anxious patients don't dig).
5. Google reviews visible without scrolling — we have NONE, so: omit the block entirely, never fake it.
6. Local SEO: consistent NAP + specific category ("Clínica odontológica"), FAQ patient-education content for AI search.
7. Friendly sans + refined tone; transparent, honest, calm.
Competitor-test: swap the logo — this must still read as a Brazilian dental clinic, not a template.
The verified CNPJ/address facts + the smile-arc motif are what survive the swap.

## Psychology brief (5 lines)
- Visitor: morador de Olinda (Peixinhos e região), mobile-first; ou com dor, ou querendo estética do sorriso — ansioso com dentista, sensível a preço, movido a confiança.
- Pain: dor de dente agora; vergonha do sorriso; medo de ser enrolado no orçamento; "essa clínica é confiável?" (zero presença online hoje).
- One action: AGENDAR. Tudo leva ao agendamento; WhatsApp-first (Brasil = 92% WhatsApp).
- Trust gap: invisível no Google — então a prova É o papel: CNPJ ativo, endereço real na Pres. Kennedy, sócio nomeado, CEP.
- Emotion: alívio calmo — "cuidado gentil, sem julgamento, sem dor."

## Mood (3 words)
Calm · Clean · Warm  (clinical-modern com calor humano)

## Signature idea — THE SMILE ARC (one per page, §18)
Um arco de sorriso recorrente: imagens mascaradas em arco (arch top, como um sorriso),
divisórias de seção em curva ascendente (SVG), o fluxo de agendamento desenhado sobre um arco,
e um anel em arco teal que se desenha no hero (stroke draw-in). Distintivo, odontológico,
impossível de confundir com os builds de encanador/mecânico (placa de latão / laranja industrial).
Page signatures:
- index — split hero assimétrico + foto em máscara de arco + anel teal desenhado; H1 masked line-rise; faixa de fatos verificados; FAQ accordion (the one live element).
- servicos — lista editorial numerada 01–08 com hairlines; cada item: categoria geral + tag "Exemplo — confirmar com a clínica".
- sobre — o "cartão de confiança": CNPJ/endereço/sócio como fatos verificados em card; lista explícita "o que ainda não sabemos".
- agendamento — 3 passos sobre um arco + formulário demo (consentimento explícito, submit simulado, estado de sucesso claro).
- auditoria-seo — single-purpose: 4 achados (problema → impacto → correção) + plano de correção em tabela mapeada aos tiers do Catálogo v3.
- contato — cartão de endereço + email público do registro + "ver no mapa" (link, sem embed tracker) + formulário demo.
- privacidade/termos/404 — páginas quietas na mesma voz; 404 com motivo do arco + links úteis.

## Tokens (zero hardcoded hex — all in :root)
- --bg: #FFFFFF · --mist: #F1F8F8 (surface fria) · --warm: #FFF4E4 (surface quente, quarentena)
- --ink: #0B2B32 (14.94:1 no branco) · --body: #33484E (9.64:1) · --muted: #5C767D (4.84:1 no branco)
- --line: #DCE9E9 (hairlines 1px) · --warm-line: #F0DFC2
- --accent: #087B86 (CTA — branco sobre ele 5.01:1 ✓) · --accent-deep: #066A75 (hover)
- --accent-bright: #0C99A6 (gráficos/tipo grande/arcos — 3.43:1, só ≥24px ou UI ≥3:1)
- --accent-soft: #E3F4F5 (fundos tintados) · --accent-ink: #FFFFFF
- Radius: cards 22px, pills 999px, arco-sorriso 999px 999px 24px 24px. Depth = hairlines + surface ladder; sombras pretas ≤10%.
- Type: **Sora** 600/700 (display) + **Inter** 400/500/600 (body). Mono: ui-monospace 11px labels uppercase +0.18em.
  H1: clamp(42px, 6.4vw, 84px), lh 1.04, tracking −0.03em, quebrado à mão em 2–3 linhas.
  H2: clamp(28px, 3.6vw, 44px). Body 17px/1.65. Label: 11px mono uppercase, muted.
- Glass (niche-appropriate, leve): nav sticky com backdrop-blur 14px + bg branco/72%; card de agendamento frosted sobre mist. Sem blobs animados sob vidro no mobile.
- Motion: ordem nav → eyebrow → H1 → sub → CTA → mídia, passos 0.12s, tudo até ~1.5s; translateY(22px)+opacity 0.8s cubic-bezier(0.16,1,0.3,1). H1: masked line rise. Arco: stroke draw-in 1.4s. Hover ≤1.04 200ms; :active 0.97. prefers-reduced-motion: rest total; no-JS safe (nada fica em opacity 0 sem classe JS).
- Primeira regra CSS define o background (sem flash branco). Selection: teal tint.

## Layout ideas
Home: micro-strip (CNPJ ativa · Olinda/PE) → glass nav → split hero (esq: eyebrow/H1/sub/CTAs; dir: foto em arco + anel teal) → faixa fatos verificados → bento serviços (6 tiles) → banda "como funciona" 3 passos → banda warm: auditoria (link) → FAQ → CTA final → footer com nota de conceito + legal.
Phone = segunda composição: hero empilha, arco vira banner, CTA "Agendar" sticky bottom, margens 16–20px, alvos ≥44px.

## Copy rules (pt-BR)
Headlines 3–9 palavras, two-beat; ênfase via cor teal ou itálico, nunca bold. Nav ≤6 links. CTA 2–3 palavras, verbo primeiro: "Agendar avaliação", "Ver serviços", "Falar no WhatsApp". Sem "lorem", sem emoji como ícone. Perda honesta: "Dor de dente não espera. Seu agendamento também não deveria."
Formulário: consentimento explícito; submit simulado — mensagem clara "Demonstração — nada é enviado. O agendamento real será pelo WhatsApp da clínica."

## Honesty checklist
- [ ] CNPJ/endereço/sócio/CEP/abertura = registro público (cnpjcheck 2026-11-04) — honesto.
- [ ] Nenhum telefone, horário, preço, convênio, avaliação ou credencial inventados.
- [ ] Serviços = categorias gerais da odontologia, cada um tagueado "Exemplo — confirmar com a clínica".
- [ ] Imagens: IA original, rotuladas "Imagem conceitual gerada por IA" — nunca pessoas falsas como equipe.
- [ ] JSON-LD Dentist só com dados verificados (sem aggregateRating, sem hours inventados).
- [ ] Uma única prova real: bluedhaka.com como trabalho verificado da Tiyan Digital (nota de conceito + auditoria).
- [ ] privacidade/termos: honestos — site conceito, zero coleta, formulário simulado.

## Known gaps
- Sem fotos reais da clínica/equipe (aguardar o dono) — placeholders de IA claramente rotulados.
- Sem WhatsApp/telefone verificado — CTAs de agendamento levam à página demo; número real entra como constante.
- Preços e convênios ausentes até confirmação do dono.
- Auditoria SEO: "zero visibilidade" baseado em busca web 2026-11-04 (só listagens de CNPJ); sem acesso ao GBP para afirmar status do perfil — redigido como "sem sinais de otimização visíveis".
