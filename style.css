/* ============================================================
   STYLE GLOBAL
   palette : anthracite / blanc cassé / vert fluo (#00ff95)
   ============================================================ */

/* Reset basique */
* { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #121212;
  --panel: #1a1a1a;
  --anthracite: #2b2b2b;
  --muted: #cfcfcf;
  --accent: #00ff95;
  --accent-soft: rgba(0,255,149,0.15);
  --accent-strong: rgba(0,255,149,0.9);
}

/* BODY */
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: #f5f5f5;
  line-height: 1.6;
}

/* LINKS & COMMON */
a { color: inherit; text-decoration: none; }
.btn-espace { border: 2px solid var(--accent); padding: 6px 10px; border-radius: 8px; color: #fff; display: inline-block; }
.btn-espace:hover {
  background: rgba(0,255,149,0.5); /* survol plus clair pour que le texte ressorte */
  color:#0b0b0b;
}

/* ---------- HEADER ---------- */
.header {
  background: var(--anthracite);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 0 rgba(255,255,255,0.02);
}
.nav-wrap {
  max-width: 1200px; margin: 0 auto; padding: 12px 20px; display: flex; align-items: center; gap: 20px; justify-content: center; position: relative;
}
.header-logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  margin-right: 8px;
}
.nav-logo { font-weight: 700; color: #fff; font-family: 'Playfair Display', serif; }
nav { display: block; }
.nav-links { display: flex; gap: 18px; list-style: none; align-items: center; justify-content: center; }
.nav-links a { padding: 8px 12px; border-radius: 6px; color: #f5f5f5; font-weight: 600; }
.nav-links a:hover {
  background: rgba(0,255,149,0.5);
  color: #0b0b0b;
  box-shadow: 0 10px 30px rgba(0,255,149,0.06);
}

/* BURGER */
.burger { position: absolute; right: 18px; display: none; background: none; border: none; padding: 6px; }
.burger span { display: block; width: 22px; height: 3px; background: #fff; margin: 4px 0; border-radius: 3px; }

/* ---------- HERO ---------- */
.hero {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 70px 20px 40px 20px;
  min-height: 460px;
  background: #000;
}
.hero-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-inner { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 12px; max-width: 1100px; margin: 0 auto; }
.hero h1 { font-family: 'Playfair Display', serif; font-size: 2.8rem; margin-bottom: 2px; }
.hero .slogan { font-size: 1.35rem; font-weight: 600; color: var(--muted); }

/* ---------- FORMATIONS ---------- */
.formations { background: var(--anthracite); padding: 48px 20px; }
.formations h2 { text-align: center; margin-bottom: 28px; font-size: 1.8rem; color: #fff; }
.cards { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(260px, 1fr)); gap: 14px; align-items: stretch; }
.card { background: var(--panel); padding: 28px; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.5); transition: transform .28s ease, box-shadow .28s ease; display: flex; flex-direction: column; }
.card h3 { font-size: 1.5rem; color: var(--accent); margin-bottom: 10px; }
.card p { font-size: 1.06rem; color: #ddd; line-height: 1.5; margin-bottom: 10px; }
.card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,255,149,0.08); }

/* ---------- CONTACT ---------- */
.contact { padding: 36px 20px; text-align: center; }
.contact h2 { margin-bottom: 18px; font-size: 1.6rem; }
.contact-form { max-width: 520px; margin: 0 auto 12px; }
.field { position: relative; margin-bottom: 10px; }
.field input, .field textarea { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: #0f0f0f; color: #fff; resize: vertical; cursor: not-allowed; }
.hover-warning { display: none; position: absolute; right: 8px; top: 50%; transform: translateY(-50%); color: #ff6666; font-size: 0.85rem; white-space: nowrap; }
.field:hover .hover-warning { display: inline-block; }
.contact-infos { display: flex; flex-direction: column; align-items: center; gap: 6px; margin-top: 8px; }
.contact-lines { display: flex; gap: 12px; align-items: center; justify-content: center; flex-wrap: wrap; }
.contact-lines p { margin: 0; color: #ddd; font-size: 0.96rem; }
.contact-lines a { color: #ddd; text-decoration: none; }
.socials { display: flex; gap: 10px; margin-top: 8px; }
.socials a { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 8px; background: #fff; color: #000; transition: all .25s; }
.socials a:hover { background: var(--accent); color: #0b0b0b; transform: translateY(-3px); }

/* ---------- FOOTER ---------- */
.footer { background: var(--anthracite); padding: 10px 18px; text-align: center; font-size: 0.92rem; }
.footer .footer-links a { color: #ddd; margin: 0 6px; }
.footer .signature { color: var(--accent); font-family: 'Playfair Display', serif; font-weight: 700; }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 900px) {
  .nav-links { display: none; position: absolute; left: 0; right: 0; top: 62px; background: var(--anthracite); flex-direction: column; padding: 12px 20px; gap: 8px; }
  .burger { display: block; }

  .cards { grid-template-columns: 1fr; gap: 16px; max-width: 720px; }
  .hero { padding: 56px 18px 36px 18px; min-height: 380px; }
  .apropos-grid { grid-template-columns: 1fr; grid-template-areas: "portrait" "description" "diplomes" "temoignages"; gap: 20px; padding: 28px; }
}
