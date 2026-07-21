# IAI Produções — Homepage

**Não criamos produtos. Criamos mundos.**

Portal principal da IAI Produções, um selo criativo que transforma ideias em experiências multiformato: livros, música, quadrinhos e RPG.

## 🌌 Estrutura

- `index.html` — Homepage principal (Mapa do Multiverso)
- `assets/css/style.css` — Estilos compartilhados
- `assets/js/script.js` — Interações dinâmicas
- `assets/img/` — Imagens e logos (adicione seus arquivos)

## 📍 Universos

1. **Ebooks & Livros** — `ebooks/`
2. **Música** — `musica/`
3. **Quadrinhos** — `quadrinhos/`
4. **RPG** — `rpg/`

## 🚀 Deploy no Cloudflare Pages

### Via GitHub

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Vá para **Pages** → **Conectar a repositório Git**
3. Autorize sua conta GitHub e selecione `commercer-iaiproducoes/homepage`
4. Configure:
   - **Build command:** (deixe vazio — site estático)
   - **Build output directory:** `/` (raiz)
5. Clique em **Deploy**

### Domínio

- **URL automática:** `https://homepage-xxxxx.pages.dev`
- **Seu domínio customizado:** `https://iaiproducoes.pages.dev`

Para conectar seu domínio Cloudflare:
1. Vá para **Pages** → **Configurações** → **Domínios**
2. Adicione seu domínio existente

## 💡 Como atualizar

1. Faça mudanças localmente
2. Commit e push para `main`
3. Cloudflare Pages detecta e redeployed automaticamente em ~1 min

## 🎨 Customização

### Imagens

Adicione suas imagens em `assets/img/`:

- `logo-producoes.png` — Logo principal
- `bg-universo-02.jpg` — Background
- `logo-fantasy.png`, `logo-cltsia.png`, `logo-comics.png` — Logos dos universos

### Cores

Edite as variáveis CSS em `assets/css/style.css`:

```css
:root {
  --orange: #ff8b20;    /* Cor primária */
  --rose: #ee24cc;      /* Destaque */
  --blue: #3386ff;      /* Secundária */
}
```

## 📝 Licença

© 2026 IAI Produções — Todos os direitos reservados
