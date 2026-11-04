# LEAD.md — CLÍNICA ODONTOLIGHT (Olinda/PE, Brasil)

## Fatos verificados (fontes: registro público de CNPJ via cnpjcheck.com.br, consulta em 04/11/2026)
- **Razão social:** CLINICA ODONTOLIGHT LTDA
- **CNPJ:** 52.063.339/0001-30 — Situação: **Ativa**
- **Endereço:** Av. Pres. Kennedy 3528 Sl 01, Peixinhos, Olinda/PE — CEP 53260-640
- **Abertura:** 04/09/2023 · **Capital social:** R$ 300.000
- **Sócio-administrador:** Olano Tenorio Almeida de Lima (registro público)
- **Atividade (CNAE):** 8630-5/04 — atividade odontológica
- **E-mail público (registro CNPJ):** lanolimacia@gmail.com
- **Web atual:** NENHUMA — busca em 04/11/2026 por "Clínica Odontolight Olinda" retorna apenas listagens de CNPJ. Invisível no Google.

## Não verificado — NUNCA usar como fato
- Telefone / WhatsApp da clínica (não encontrado — nunca inventar)
- Horário de atendimento, preços, convênios
- Serviços efetivamente oferecidos, equipe, dentistas responsáveis, CRO
- Avaliações de pacientes, volume de clientes, qualquer métrica do negócio

## Proposta construída
- **Pilar:** Websites/CRO (site multipage conceito + página de auditoria SEO local)
- **Idioma:** português brasileiro (pt-BR)
- **Páginas:** index (herói com CTA de agendamento + FAQ), servicos (8 categorias numeradas), sobre (só fatos verificados + lista "o que ainda não sabemos"), agendamento (formulário demo com consentimento), auditoria-seo (4 achados reais + plano de correção mapeado ao Catálogo v3), contato, privacidade, termos, 404
- **Design:** "THE SMILE ARC" — clinical-modern com calor: branco + aqua-teal (#087B86), Sora/Inter (auto-hospedadas, zero embeds terceiros), máscara de imagem em arco, anel teal desenhado, glass nav leve. Nada parecido com os builds de encanador/mecânico.
- **Negócio como constante:** `CLINICA` em `js/config.js` (nome, endereço, CNPJ, e-mail…); atributos `data-clinica` atualizam o site todo
- **Honestidade aplicada:** serviços tagueados "Exemplo — confirmar com a clínica"; telefone/WhatsApp como "a confirmar"; imagens de IA rotuladas "conceitual"; JSON-LD Dentist só com dados verificados (sem avaliações/horários inventados); formulários simulados com aviso claro; preços da auditoria = Catálogo v3 real (site 72h US$ 150 · SEO Básico US$ 249/mês · WhatsApp Básico US$ 399 · GEO Básico US$ 299/mês)
- **SEO/estrutura:** JSON-LD Dentist, sitemap.xml, robots.txt, títulos/descrições únicos por página, OG tags, fontes auto-hospedadas, sem cookies/trackers

## Imagens (geradas por IA, originais — sem copyright de terceiros)
- `assets/hero-clinica.webp` — recepção clara em branco/verde-água (herói, máscara de arco)
- `assets/sorriso-detalhe.webp` — close de sorriso (banda da auditoria)
- `assets/consultorio.webp` — consultório moderno vazio (sobre)
- Todas rotuladas no site como "Imagem conceitual gerada por IA". Nenhuma pessoa identificável.

## Contato / outreach
- **Via:** cold e-mail para lanolimacia@gmail.com (e-mail público do registro CNPJ)
- **Idioma outreach:** português (BR)
- **Estado:** RASCUNHO em OUTREACH.md — NÃO enviado. Requer toque do fundador (approval card). Envio = decisão do main-run.

## Deploy
- **Estado:** site construído + QA aprovado no workspace. Git commit local preparado.
- **Pendente (precisa de browser task — fora do alcance deste subagente):** criar repo vazio `tiyandegital-hue/clinica-odontolight-olinda-proposal` na sessão GitHub do navegador → push via CLI → deploy Vercel (import, Preset Other) → Protection OFF → curl 200 anônimo em todas as páginas.
