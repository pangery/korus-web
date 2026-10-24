import React, { useState } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Eye,
} from './Icons';

interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  x: number; // percentage from left
  y: number; // percentage from top
  norm: string;
  specs: string;
}

interface ProductShowcaseItem {
  id: 'shoe' | 'jacket';
  name: string;
  tagline: string;
  category: string;
  image: string;
  norm: string;
  description: string;
  hotspots: Hotspot[];
  specsTable: { label: string; value: string }[];
}

export const Product3DViewer: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<'shoe' | 'jacket'>('shoe');
  const [activeHotspotId, setActiveHotspotId] = useState<string>('carbon-toe');
  const [zoomDetail, setZoomDetail] = useState(false);

  const products: Record<'shoe' | 'jacket', ProductShowcaseItem> = {
    shoe: {
      id: 'shoe',
      name: 'DYKENO S3S Carbon Shield ESD',
      tagline: 'Ultralehká bezpečnostní polobotka z karbonového kompozitu',
      category: 'Bezpečnostní obuv • ČSN EN ISO 20345:2022',
      image: '/assets/dykeno_s3_shoe.jpg',
      norm: 'S3S ESD SR FO • Kat. II',
      description:
        'Vlajkový model vyvinutý ve spolupráci s technology předních automotive závodů. Karbonová tužinka snižuje hmotnost obuvi na pouhých 460 g a eliminuje únavu nohou při celodenním směnném provozu.',
      hotspots: [
        {
          id: 'carbon-toe',
          title: 'Karbonový kompozit 200 J',
          subtitle: 'Tužinka nové generace',
          x: 23,
          y: 63,
          norm: 'ČSN EN ISO 20345:2022',
          specs:
            'Nemagnetická, nevede teplo ani chlad. O 40 % lehčí než tradiční ocelová špička při zachování odolnosti nárazu 200 J a tlaku 15 kN.',
        },
        {
          id: 'esd-badge',
          title: 'ESD Antistatická ochrana',
          subtitle: 'Odvod statického náboje',
          x: 62,
          y: 49,
          norm: 'ČSN EN 61340-5-1',
          specs:
            'Garantovaný svodový odpor v rozsahu 100 kΩ až 35 MΩ. Bezpečné nasazení na lakovnách, v elektrotechnické výrobě a automotive montážích.',
        },
        {
          id: 'vibram-sole',
          title: 'Podešev Vibram® s protiskluzem SR',
          subtitle: 'Dvousložková PU / pryž',
          x: 68,
          y: 68,
          norm: 'ČSN EN ISO 20345 SR FO',
          specs:
            'Maximální přilnavost na keramických i ocelových podlahách s olejem a chladicí emulzí. Tlumicí zóna v patě pohlcuje rázovou energii až 20 J.',
        },
        {
          id: 'kevlar-insole',
          title: 'Kevlarová anti-perforační stélka',
          subtitle: 'Nulový propich (Zero Penetration)',
          x: 48,
          y: 62,
          norm: 'EN 12568 (PS)',
          specs:
            'Vícevrstvý balistický aramid kryjící 100 % plochy chodidla. Chrání před hřebíky a kovovými třískami bez omezení ohebnosti podrážky.',
        },
      ],
      specsTable: [
        { label: 'Hmotnost', value: '460 g (velikost 42)' },
        { label: 'Ochranná tužinka', value: 'Karbonový kompozit 200 J' },
        { label: 'Anti-perforace', value: 'Kevlar® textilní planžeta (1100 N)' },
        { label: 'Podešev', value: 'Vibram® pryž / PU tlumicí pěna' },
        { label: 'Certifikace ESD', value: 'ČSN EN 61340-5-1 (odpor < 35 MΩ)' },
        { label: 'Svršek', value: 'Hydrofobní mikrovlákno KetlarMesh' },
      ],
    },
    jacket: {
      id: 'jacket',
      name: 'Pracovní bunda DYKENO Tech Antracit',
      tagline: 'Zesílený pracovní oděv s Cordura® 500D Ripstop výztuží',
      category: 'Pracovní oděvy • Mechanická odolnost',
      image: '/assets/dykeno_tech_jacket.jpg',
      norm: 'ČSN EN ISO 13688 • OEKO-TEX®',
      description:
        'Průmyslová montérková bunda navržená pro těžké strojírenství, kovoobrábění a montáže. Ergonomický střih neomezuje zvedání paží a vysoce namáhané zóny loktů a ramen jsou chráněny originální Cordurou®.',
      hotspots: [
        {
          id: 'cordura-arm',
          title: 'Cordura® 500D Ripstop výztuž',
          subtitle: 'Maximální odolnost proti prodření',
          x: 23,
          y: 47,
          norm: 'ASTM D3884 (100 000+ cyklů)',
          specs:
            'Extrémně trvanlivá tkanina na loktech a ramenních partiích. Zabraňuje mechanickému prodření o kovové konstrukce a hrany obrobků.',
        },
        {
          id: 'chest-brand',
          title: 'DYKENO Tech výšivka & kapsy',
          subtitle: 'Odolnost průmyslovému praní do 90 °C',
          x: 60,
          y: 30,
          norm: 'ČSN EN ISO 15797',
          specs:
            'Možnost brandingu vlastním logem zákazníka. Barvy a reflexní prvky drží stálost i po 50 cyklech v průmyslových prádelnách.',
        },
        {
          id: 'ykk-zipper',
          title: 'YKK® Heavy-Duty zipy s krytím',
          subtitle: 'Prachotěsná mechanika',
          x: 50,
          y: 42,
          norm: 'ČSN EN 16732',
          specs:
            'Krytá léga zabraňuje poškrábání lakovaných povrchů a karosérií. Zesílené zuby s garancí plynulého chodu v zaprášeném prostředí.',
        },
        {
          id: 'reflective-piping',
          title: 'Reflexní bezpečnostní paspule',
          subtitle: '3M™ Scotchlite™ materiál',
          x: 65,
          y: 63,
          norm: 'ČSN EN ISO 20471',
          specs:
            'Diskrétní paspule zvyšující viditelnost pracovníka v halách se souběžným provozem vysokozdvižných vozíků.',
        },
      ],
      specsTable: [
        { label: 'Materiálové složení', value: '65 % polyester, 35 % bavlna (280 g/m²)' },
        { label: 'Zesílení partií', value: '100 % polyamid Cordura® 500D' },
        { label: 'Zipy a kování', value: 'YKK® s krytou ochrannou légou' },
        { label: 'Průmyslová údržba', value: 'Praní do 90 °C dle EN ISO 15797' },
        { label: 'Reflexní prvky', value: '3M™ Scotchlite™ paspule v švech' },
        { label: 'Kapsy', value: '8 multifunkčních kapes vč. pouzdra na smartphone' },
      ],
    },
  };

  const current = products[activeProduct];
  const activeSpot = current.hotspots.find((h) => h.id === activeHotspotId) || current.hotspots[0];

  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80"
      id="dykeno-showcase"
    >
      {/* Section Header */}
      <div data-scroll-reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-[#ff5a1f]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DYKENO® ENGINEERING • INŽENÝRSKÁ ANATOMIE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Inženýrská anatomie produktů DYKENO®
          </h2>
        </div>

        {/* Product Switcher Tabs */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shrink-0">
          <button
            onClick={() => {
              setActiveProduct('shoe');
              setActiveHotspotId('carbon-toe');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeProduct === 'shoe'
                ? 'bg-[#ff5a1f] text-white shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Obuv S3S Carbon
          </button>
          <button
            onClick={() => {
              setActiveProduct('jacket');
              setActiveHotspotId('cordura-arm');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeProduct === 'jacket'
                ? 'bg-[#ff5a1f] text-white shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Bunda DYKENO Tech
          </button>
        </div>
      </div>

      {/* Main Studio Card */}
      <div className="card-modern bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column: Interactive Photo Stage with Hotspot Pins (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between relative bg-slate-100/50 dark:bg-zinc-900/40 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-zinc-800/80">
            {/* Top Pill Info */}
            <div className="flex items-center justify-between mb-4 relative z-20">
              <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                {current.category}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                {current.norm}
              </span>
            </div>

            {/* Studio Product Image with Radar Hotspots */}
            <div className="relative aspect-[4/3] w-full flex items-center justify-center rounded-2xl overflow-hidden my-auto select-none">
              <img
                src={current.image}
                alt={current.name}
                className={`w-full h-full object-contain transition-transform duration-500 ${
                  zoomDetail ? 'scale-125' : 'scale-100'
                }`}
              />

              {/* Clickable Hotspot Pins with Animated Pulse Waves */}
              {current.hotspots.map((spot) => {
                const isActive = activeHotspotId === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full transition-transform z-30 cursor-pointer ${
                      isActive ? 'scale-125 ring-4 ring-[#ff5a1f]/30' : 'hover:scale-110'
                    }`}
                    title={spot.title}
                  >
                    <span className="relative flex h-5 w-5">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isActive ? 'bg-[#ff5a1f]' : 'bg-slate-900 dark:bg-white'
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center text-[10px] font-bold text-white shadow-md ${
                          isActive ? 'bg-[#ff5a1f]' : 'bg-slate-900 dark:bg-zinc-800 border border-white/20'
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-200/60 dark:border-zinc-800/60 relative z-20">
              <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                Kliknutím na body <strong>(+)</strong> zobrazíte detail technologie
              </div>
              <button
                onClick={() => setZoomDetail(!zoomDetail)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-zinc-300 hover:text-[#ff5a1f] bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{zoomDetail ? 'Oddálit' : 'Přiblížit detail'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Hotspot Inspection & Tech Specs (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-zinc-950">
            <div>
              {/* Product Header */}
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold text-[#ff5a1f] uppercase tracking-wider">
                  Vlajková specifikace
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {current.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 font-normal leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Active Hotspot Callout Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 dark:bg-orange-950/20 border border-[#ff5a1f]/30 mb-6 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff5a1f] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Inženýrský detail</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white dark:bg-zinc-900 border border-orange-200 dark:border-orange-900/60 text-slate-700 dark:text-zinc-300 font-semibold">
                    {activeSpot.norm}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {activeSpot.title}
                </h4>
                <p className="text-xs text-[#ff5a1f] font-mono font-medium mb-2">
                  {activeSpot.subtitle}
                </p>
                <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {activeSpot.specs}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="space-y-2 mb-6">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 font-bold mb-2">
                  Technické parametry položky:
                </p>
                {current.specsTable.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-zinc-900/60 text-xs"
                  >
                    <span className="text-slate-500 dark:text-zinc-400 font-medium">
                      {spec.label}
                    </span>
                    <span className="font-mono font-semibold text-slate-900 dark:text-white text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Sampling CTA */}
            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 dark:text-zinc-400">
                Chcete tento model otestovat ve vašem závodě?
              </div>
              <a
                href="#konfigurator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-bold text-xs transition-colors shadow-md hover:shadow-lg hover:shadow-[#ff5a1f]/20"
              >
                <span>Vyžádat testovací sadu zdarma</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
