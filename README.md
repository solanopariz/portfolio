# Portfólio · Solano

Página pessoal de apresentação (HTML/CSS/JS puro), com tema escuro, bilíngue (PT/EN)
e links para os meus projetos no GitHub.

🔗 **Online:** https://SEU_USUARIO.github.io  _(disponível depois de publicar — veja abaixo)_

## Estrutura

```
portfólio/
├── index.html          # conteúdo e seções
├── css/style.css       # estilo (tema escuro, responsivo)
├── js/script.js        # idioma PT/EN, menu mobile, animações
└── assets/             # foto, currículo (cv.pdf), favicon
```

## Como personalizar

Procure e substitua estes placeholders pelos seus dados reais:

| Onde | O quê |
|------|-------|
| `index.html` e `README.md` | Trocar **`SEU_USUARIO`** pelo seu usuário do GitHub/LinkedIn |
| `index.html` (links de projeto) | Ajustar `projeto-1`, `projeto-2`, `projeto-3` para os repositórios reais e os títulos dos cards |
| `assets/foto.jpg` | Adicionar sua foto e apontar `index.html` → `<img src="assets/foto.jpg">` (hoje usa `avatar-placeholder.svg`) |
| `assets/cv.pdf` | Adicionar seu currículo em PDF (o botão "Baixar CV" já aponta pra cá) |
| `js/script.js` | Editar os textos em `translations` (PT e EN): pitch, descrições dos projetos, etc. |
| `index.html` | E-mail já configurado: `solanosaberpariz@gmail.com` |

> As descrições dos projetos ficam em dois lugares: o texto inicial no `index.html`
> e a versão traduzida em `js/script.js`. Edite os dois para manter PT e EN iguais.

## Rodar localmente

Basta abrir o `index.html` no navegador. Ou, para servir com um servidor local:

```bash
# Python
python -m http.server 8000
# depois abra http://localhost:8000
```

## Publicar no GitHub Pages (grátis)

1. Crie um repositório no GitHub. Para a URL `seu_usuario.github.io`, dê esse nome exato ao repositório.
2. Suba os arquivos:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_USUARIO.github.io.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Branch: `main` / pasta `/ (root)` → Save**.
4. Aguarde ~1 minuto e acesse `https://SEU_USUARIO.github.io`.

Cole essa URL no seu LinkedIn e no currículo. ✅
