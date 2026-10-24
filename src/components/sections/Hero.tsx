import React, { useState } from 'react';
import { ArrowRight, Download, ShieldCheck, Truck, CheckCircle2 } from '../Icons';

export interface HeroProps {
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure }) => {
  const [activeSegment, setActiveSegment] = useState<'auto' | 'energy' | 'logistics'>('auto');

  const segmentPreviews = {
    auto: {
      tag: 'Automotive standard',
      rec: 'DYKENO ProGrip Cut 5 + ESD S3S Carbon',
      metric: '-28 % roční spotřeba rukavic',
      norm: 'ČSN EN 388 (4X43D) • EN ISO 20345',
    },
    energy: {
      tag: 'Energetika & Utility',
      rec: 'Nehořlavé oděvy s ochranou proti oblouku APC 2',
      metric: '100% shoda s ČSN EN 61482',
      norm: 'ČSN EN ISO 11612 • EN 1149-5',
    },
    logistics: {
      tag: 'E-commerce & Logistika',
      rec: 'DYKENO Air S1PS lehká obuv (410 g) + reflexní vesty',
      metric: 'Prevence únavy při 20 000 krocích/směnu',
      norm: 'ČSN EN ISO 20345:2022 SR FO',
    },
  };

  const clients = [
    { name: 'Toyota', plant: 'TPCA Kolín', dark: 'toyota-dark.png', light: 'toyota.png' },
    { name: 'ČEZ', plant: 'Skupina ČEZ', dark: 'cez-dark.png', light: 'cez.png' },
    { name: 'Amazon', plant: 'Fulfillment CZ', dark: 'amazon-dark.png', light: 'amazon.png' },
    { name: 'Zentiva', plant: 'Závod Praha', dark: 'zentiva-dark.png', light: 'zentiva.png' },
    { name: 'Witte', plant: 'Nejdek & Ostrov', dark: 'witte-dark.png', light: 'witte.png' },
    { name: 'Koito', plant: 'Žatec Czech', dark: 'koito-dark.png', light: 'koito.png' },
    { name: 'Gestamp', plant: 'Louny Lisovna', dark: 'gestamp-dark.png', light: 'gestamp.png' },
    { name: 'Toyoda Gosei', plant: 'Klášterec n. O.', dark: 'toyoda-dark.png', light: 'toyoda.png' },
  ];

  return (
    <div className="hero-pinned-content relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col justify-center flex-1">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#ff5a1f]/[0.04] dark:bg-[#ff5a1f]/[0.08] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pb-8 lg:pb-10 border-b border-slate-200/80 dark:border-zinc-800/80">
        {/* Left Column: Bold Editorial Typography */}
        <div className="lg:col-span-7">
          {/* Status Badge */}
          <div
            data-scroll-reveal
            data-scroll-delay="50"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 text-[11px] font-semibold uppercase tracking-wider text-[#ff5a1f] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] animate-pulse" />
            <span>KORUS EU • 25 LET TRADICE V ČR (OD ROKU 1999)</span>
          </div>

          <h1
            data-scroll-reveal
            data-scroll-delay="100"
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.04] mb-5"
          >
            Bezpečnost.<br />
            Efektivita.<br />
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
              Komfort při práci.
            </span>
          </h1>

          <p
            data-scroll-reveal
            data-scroll-delay="150"
            className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 font-normal leading-relaxed mb-7 max-w-xl"
          >
            Čtvrtstoletí propojujeme ochranu lidského zdraví v průmyslu s maximálním ergonomickým pohodlím. Vlastní prémiová značka <strong className="text-slate-900 dark:text-white font-semibold">DYKENO®</strong>, 15 000+ položek skladem a distribuční centrum 5 000 m².
          </p>

          {/* Action CTAs */}
          <div
            data-scroll-reveal
            data-scroll-delay="200"
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#bento-prehled"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-medium text-sm transition-all shadow-sm hover:shadow-lg hover:shadow-[#ff5a1f]/25 group"
            >
              <span>Prozkoumat řešení</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={onOpenBrochure}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-900 dark:text-white font-medium text-sm border border-slate-200 dark:border-zinc-800 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-500 dark:text-zinc-400" />
              <span>Brožura (PDF)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Modern Live Ecosystem Console */}
        <div data-scroll-reveal data-scroll-delay="150" className="lg:col-span-5">
          <div className="card-modern p-5 sm:p-6 relative overflow-hidden">
            {/* Top Header of Console */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  KORUS B2B HUB
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full">
                WMS Live: 100 %
              </span>
            </div>

            {/* Warehouse Dispatch Indicator */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-zinc-400 font-medium mb-1">
                  <Truck className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Expedice</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Do 24 hodin
                </div>
                <div className="text-[10px] text-slate-400 dark:text-zinc-500 mt-0.5">
                  Centrální sklad Podbořany
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800/60">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-zinc-400 font-medium mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Skladová zásoba</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  15 480 položek
                </div>
                <div className="text-[10px] text-slate-400 dark:text-zinc-500 mt-0.5">
                  Okamžitě k odeslání
                </div>
              </div>
            </div>

            {/* Interactive Industry Standard Selector */}
            <div className="mb-4">
              <p className="text-[11px] font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                Přednastavené sestavy pro provozy:
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'auto', label: 'Automotive' },
                  { id: 'energy', label: 'Energetika' },
                  { id: 'logistics', label: 'Logistika' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSegment(s.id as any)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center ${
                      activeSegment === s.id
                        ? 'bg-[#ff5a1f] text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Segment Card */}
            {(() => {
              const seg = segmentPreviews[activeSegment];
              return (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/80 border border-slate-200/80 dark:border-zinc-800/80 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {seg.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#ff5a1f] font-semibold">
                      {seg.norm}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium mb-2">
                    {seg.rec}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-2 border-t border-slate-200/60 dark:border-zinc-800/60">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{seg.metric}</span>
                  </div>
                </div>
              );
            })()}

            {/* Direct Audit Callout */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-zinc-400">Vzorkování přímo u linek:</span>
              <a
                href="#kontakt"
                className="font-semibold text-[#ff5a1f] hover:underline flex items-center gap-1"
              >
                <span>Nezávazná poptávka</span>
                <span className="text-[11px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Typographic Key Metrics Strip */}
      <div
        data-scroll-reveal
        data-scroll-delay="250"
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-7 border-b border-slate-200/80 dark:border-zinc-800/80"
      >
        <div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
            25+ let
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
            Stabilní partnerství na trhu od roku 1999
          </p>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
            15 000+
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
            Položek certifikovaných OOPP a techniky
          </p>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
            5 000 m²
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
            Centrální sklad s digitálním WMS systémem
          </p>
        </div>

        <div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
            8 zemí
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-medium">
            Pravidelný evropský export a systémový servis
          </p>
        </div>
      </div>

      {/* Client Logos Trust Strip */}
      <div data-scroll-reveal data-scroll-delay="300" className="pt-6 sm:pt-7">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
          Důvěřují nám lídři evropského průmyslu a výrobních závodů:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5 items-center">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800/80 hover:border-[#ff5a1f]/60 dark:hover:border-[#ff5a1f]/60 hover:shadow-xs transition-all duration-200 group"
              title={`${c.name} • ${c.plant}`}
            >
              <div className="h-7 w-full flex items-center justify-center">
                <img
                  src={`/assets/${c.dark}`}
                  alt={c.name}
                  className="max-h-6 w-auto max-w-[85px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 dark:hidden"
                  loading="lazy"
                />
                <img
                  src={`/assets/${c.light}`}
                  alt={c.name}
                  className="max-h-6 w-auto max-w-[85px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 hidden dark:block"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-zinc-400 mt-1.5 text-center truncate max-w-full group-hover:text-[#ff5a1f] transition-colors">
                {c.plant}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
