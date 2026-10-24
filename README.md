# KORUS EU • B2B Bezpečnost práce & OOPP

Oficiální moderní B2B webová prezentace společnosti **KORUS EU a.s.** – komplexní ochrana zdraví a bezpečnost práce již 25 let (od roku 1999). Výrobce prémiové značky **DYKENO®**, dodavatel 15 000+ položek skladem s centrálním logistickým areálem 5 000 m² v Podbořanech a partnerstvím s předními průmyslovými závody v ČR a Evropě (Toyota, ČEZ, Amazon, Zentiva aj.).

---

## 🚀 Jak web spustit lokálně

### 1. Klonování repozitáře
```bash
git clone https://github.com/pangery/korus-web.git
cd korus-web
```

### 2. Instalace závislostí
```bash
npm install
```

### 3. Spuštění vývojového serveru
```bash
npm start
# nebo
npm run dev
```
Aplikace poběží na adrese [http://localhost:5173](http://localhost:5173) s okamžitým hot-reloadem (HMR).

### 4. Sestavení pro produkci
```bash
npm run build
```
Výsledný optimalizovaný produkční bundle se vytvoří ve složce `dist/`.

Pro otestování produkčního buildu lokálně:
```bash
npm run preview
```

---

## 🛠️ Použité technologie & Architektura

- **Frontend framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev server:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + CSS proměnné pro téma a design systém
- **Smooth scrolling:** [Lenis](https://github.com/darkroomengineering/lenis) (setrvačné plynulé posouvání s hardwarovou akcelerací)
- **Typografie:** Google Fonts (Inter + JetBrains Mono)
- **Ikony:** SVG inženýrské a průmyslové ikony navržené na míru
- **Hosting / CI/CD:** GitHub Actions + GitHub Pages automatický deployment

---

## 🌟 Klíčové funkce aplikace

1. **Floating Island navigace (`Navbar`):**
   - Rychlé globální vyhledávání (`Cmd+K` / `Ctrl+K`) napříč produkty, službami a technickými normami ČSN EN.
   - Přepínač tmavého a světlého režimu (Dark / Light mode).
   - Výběr z 6 jazyků (CZ, EN, DE, SK, PL, HU) a přímá B2B hotline.
   - Modální okno pro okamžité stažení PDF brožury a katalogu.

2. **Asymetrický Bento Grid (`BentoGrid`):**
   - Vlajkový model polobotky DYKENO S3S Carbon Shield s interaktivním přepínáním specifikací (karbonová tužinka 200 J, kevlarová planžeta, Vibram® podešev, ESD standard).
   - Milníky 25leté historie od roku 1999 do 2024.
   - Přehled logistického areálu 5 000 m² s WMS, EDI integrace a zakázkového potisku textilu do 90 °C.

3. **Inženýrská anatomie produktů (`Product3DViewer`):**
   - Interaktivní rozbor technologií obuvi a oděvů s radarovými hotspoty a detailními technickými listy podle norem ČSN EN ISO.

4. **Interaktivní B2B konfigurátor & kalkulačka úspor (`B2BConfigurator` & `SavingsCalculator`):**
   - Dynamický výpočet ročních úspor při optimalizaci BOZP spotřeby.
   - Kalkulace potenciálu čerpání **Náhradního plnění** dle zákona o zaměstnanosti č. 435/2004 Sb.

5. **Matice 10 průmyslových odvětví (`Industries` & `IndustryModal`):**
   - Automotive, těžké strojírenství, energetika, chemie, potravinářství, stavebnictví aj. včetně podrobného rozboru bezpečnostních rizik a certifikovaných norem.

6. **Oficiální partneři & Reference (`Partners` & `PartnersMarquee`):**
   - Plynulý nekonečný marquee pruh i filtrovatelná galerie s logy výrobních závodů v ČR.

---

## 📁 Struktura projektu

```
korus-web/
├── public/
│   ├── assets/              # Loga partnerů, produktové fotografie, ikony
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/        # Samostatné sekce webu (Hero, BentoGrid, Services...)
│   │   ├── ui/              # Atomické komponenty (BentoCard, TechBadge, ProjectCard)
│   │   ├── Navbar.tsx       # Horní plovoucí navigace + vyhledávání
│   │   ├── Footer.tsx       # Korporátní patička s legislativou
│   │   ├── Icons.tsx        # Vektorové ikony
│   │   └── ...
│   ├── data/                # Datové modely (produkty, průmyslová odvětví, historie)
│   ├── hooks/               # Custom hooky (Lenis smooth scroll)
│   ├── App.tsx              # Hlavní layout aplikace
│   ├── index.css            # Tailwind CSS & globální design tokeny
│   └── main.tsx             # Vstupní bod React aplikace
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automatický build a nasazení na GitHub Pages
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 Licence

Tento projekt je vytvořen pro společnost **KORUS EU a.s.** Všechna práva vyhrazena.
