# IAI PRODUTOR — Biblioteca de Mundos — Livros & E-books

## Conceito & Identidade

A "Biblioteca de Mundos" é a vitrine digital de livros e e-books da IAI Produções. Concebida como uma biblioteca futurista e minimalista, cada livro é tratado como um universo independente, onde o visitante explora conhecimento e não adquire produtos. A identidade visual permanece fiel à Home principal, criando uma experiência coesa e imersiva.

A metáfora central "Não criamos produtos. Criamos mundos." sustenta toda a experiência, transformando a navegação em uma jornada de descoberta cultural e intelectual.

## Design Language

### Paleta de Cores

| Função | Cor | Hex |
|--------|-----|-----|
| Background principal | Escuro profundo | #070708 |
| Background secundário | Superfície | #101014 |
| Texto primário | Branco | #FFFFFF |
| Texto secundário | Cinza suave | #A5A5B0 |
| Acento primário (Livros) | Laranja | #FF8A1F |
| Hover glow | Laranja translúcido | rgba(255, 138, 31, 0.3) |
| Bordas | Linha sutil | rgba(255, 255, 255, 0.08) |

### Tipografia

- **Títulos e headlines:** Space Grotesk (700, 600, 500) — impactante e contemporâneo
- **Corpo de texto:** Inter (400, 300) — legível e moderno
- **Fallback:** system-ui, sans-serif

### Sistema Espacial

- Container máximo: 1280px
- Padding lateral: 24px (mobile) / 48px (desktop)
- Gap entre cards: 24px
- Seções: 120px de espaçamento vertical

### Filosofia de Motion

- Transições suaves de 250-350ms
- Hover states com scale(1.02) e glow effect
- Revelação em scroll com fade + translate
- Partículas flutuantes no hero para atmosfera cósmica

## Layout & Estrutura

### 1. Header

Header fixo transparente que ganha background blur ao scroll, mantendo navegação limpa com links para seções da página e link para home principal.

### 2. Hero Section

Hero em tela cheia (100vh) com:
- Título "LIVROS & E-BOOKS" em destaque
- Subtítulo poético
- Texto descritivo organizado em versos
- Background animado com partículas (estrelas) e glow laranja
- Padrão de linhas finas formando constelação sutil

### 3. Barra de Filtros

Filtros horizontais com scroll horizontal em mobile:
- Todos | Inteligência Artificial | Cloudflare | Linux | Programação | Negócios | RPG | Quadrinhos
- Botões com estados ativos e hover
- Animações de transição suaves
- Preparado para filtragem JavaScript futura

### 4. Grade de Livros

Grid responsivo de cards de livros:
- Desktop: 4 colunas
- Tablet: 2 colunas  
- Mobile: 1 coluna

Cada card contém:
- Imagem da capa (proporção 3:4)
- Badge de categoria
- Título do livro
- Descrição curta
- Botão "Ver Mundo →"

Estados do card:
- Default: Fundo surface com borda sutil
- Hover: Elevação, glow laranja, scale na imagem da capa

### 5. Newsletter Section

Seção com fundo diferenciado:
- Título impactante
- Texto explicativo
- Campo de email + botão de envio
- Validação de email client-side

### 6. Footer

Footer idêntico à home principal com:
- Logo e tagline
- Links de navegação
- Links de projetos
- Contato e redes sociais
- Newsletter
- Copyright

## Features & Interações

### Partículas do Hero

- 60 partículas pequenas flutuando suavemente
- Tamanhos variados (1-3px)
- Opacidade diversa (0.2-0.7)
- Animação de twinkle contínua
- Posicionamento aleatório

### Filtros de Categoria

- Click ativa/desativa filtro
- Apenas um filtro ativo por vez (exceto "Todos")
- Transição visual suave entre estados
- Ready for JavaScript filter integration

### Cards de Livros

- Hover: elevação + glow laranja na borda
- Imagem da capa faz scale(1.05) no hover
- Botão muda cor no hover
- Cursor pointer em todo card
- Transição de 250ms ease

### Newsletter

- Validação de email required
- Feedback visual de sucesso ao enviar
- Reset do formulário após sucesso

### Scroll Reveal

- Elementos aparecem com fade + translate-y
- Threshold de 12% para trigger
- Unobserve após animação (performance)

## Component Inventory

### Card de Livro

| Estado | Descrição |
|--------|-----------|
| Default | Fundo #101014, borda rgba(255,255,255,0.08), border-radius 16px |
| Hover | Box-shadow glow laranja, elevação, borda laranja |
| Imagem | Proporção 3:4, object-fit cover, scale 1.05 no hover |

### Botão de Filtro

| Estado | Descrição |
|--------|-----------|
| Default | Fundo transparente, borda sutil, texto #A5A5B0 |
| Hover | Fundo rgba(255,138,31,0.1), texto branco |
| Active | Fundo #FF8A1F, texto #070708 |

### Campo de Email

| Estado | Descrição |
|--------|-----------|
| Default | Fundo rgba(255,255,255,0.04), borda sutil |
| Focus | Borda laranja, glow sutil |
| Invalid | Borda vermelha (native validation) |

### Botão Primário

| Estado | Descrição |
|--------|-----------|
| Default | Fundo #FF8A1F, texto branco |
| Hover | Fundo #FF9A3F, elevação sutil |

## Technical Approach

### Stack

- HTML5 semântico
- CSS3 puro (CSS Variables, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Sem dependências externas

### Arquitetura de Arquivos

```
ebooks/
├── index.html          (Página completa)
├── ../assets/css/style.css  (Compartilhado com home)
└── ../assets/js/script.js   (Compartilhado com home)
```

### Performance

- CSS crítico inline potential
- Lazy loading para imagens (future)
- IntersectionObserver para animações
- Debounce em resize events

### Acessibilidade

- Semantic HTML landmarks
- ARIA labels em elementos interativos
- Focus states visíveis
- Contraste adequado (WCAG AA)
