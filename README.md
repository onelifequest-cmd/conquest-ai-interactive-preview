# Conquest AI — interactive preview (not live)

Lusion-style interactive preview of the Conquest AI offer page, built from the Scores OS interactive kit
(Three.js + GSAP ScrollTrigger + Lenis, theme in `config.json`).

- Static site, no build step. `noindex` meta + `robots.txt` (Disallow: /).
- Motif: blue signal-strand field, an automation network that lights up as busywork gets knocked away,
  and a glowing agent core labelled "Mission Control" at the end of the scroll story.
- `?static` (or prefers-reduced-motion) = static layout; `?nogl` = no-WebGL fallback.
- The lead form and chat are demo-only: the form makes no network request and the chat uses canned answers.
- The "Book a call" button is a placeholder anchor to the on-page form.
