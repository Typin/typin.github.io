# Typin site

Static HTML/CSS/JS site compatible with GitHub Pages.

## Assets used by the Cupiclaw section

- `assets/logo.png`
- `assets/favicon.png`
- `assets/cupiclaw/keyart.png`
- `assets/cupiclaw/ss1.png`
- `assets/cupiclaw/ss2.png`
- `assets/cupiclaw/ss3.png`
- `assets/cupiclaw/ss4.png`

To add more screenshots, duplicate one `.screenshot` button in `index.html`, change the file path and number, and the gallery will wrap automatically.

## YouTube error 153 when testing locally

Do not test YouTube embeds by double-clicking `index.html` and opening it as a `file://` URL. YouTube may reject the player because there is no valid HTTP referrer.

Test through GitHub Pages, VS Code Live Server, or a local HTTP server, e.g. from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
