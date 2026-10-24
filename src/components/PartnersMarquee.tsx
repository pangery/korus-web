import React from 'react';

interface PartnerPlant {
  name: string;
  plant: string;
  industry: string;
  logoLight: string;
  logoDark: string;
}

export const PartnersMarquee: React.FC = () => {
  // Official partners in exact order as on korus.eu
  const partners: PartnerPlant[] = [
    {
      name: 'Amazon',
      plant: 'Fulfillment logistická centra',
      industry: 'E-commerce & Logistika',
      logoLight: '/assets/amazon.png',
      logoDark: '/assets/amazon-dark.png',
    },
    {
      name: 'Bosal ČR',
      plant: 'Výfukové & emisní systémy Brandýs',
      industry: 'Těžké strojírenství',
      logoLight: '/assets/bosal.png',
      logoDark: '/assets/bosal-dark.png',
    },
    {
      name: 'Skupina ČEZ',
      plant: 'Jaderná & uhelná energetika',
      industry: 'Energetika & Utility',
      logoLight: '/assets/cez.png',
      logoDark: '/assets/cez-dark.png',
    },
    {
      name: 'Gestamp',
      plant: 'Lisovna & svařovna karoserií Louny',
      industry: 'Automotive lisovny',
      logoLight: '/assets/gestamp.png',
      logoDark: '/assets/gestamp-dark.png',
    },
    {
      name: 'Hunter',
      plant: 'Přesná průmyslová mechanika',
      industry: 'Strojírenská výroba',
      logoLight: '/assets/hunter.png',
      logoDark: '/assets/hunter-dark.png',
    },
    {
      name: 'Keihin / Hitachi',
      plant: 'Klimatizační systémy Klášterec',
      industry: 'Thermal & HVAC systémy',
      logoLight: '/assets/keihin.png',
      logoDark: '/assets/keihin-dark.png',
    },
    {
      name: 'Koito Czech',
      plant: 'Výrobní závod světlometů Žatec',
      industry: 'Automotive osvětlení',
      logoLight: '/assets/koito.png',
      logoDark: '/assets/koito-dark.png',
    },
    {
      name: 'Procter & Gamble',
      plant: 'Výrobní závod Rakona Rakovník',
      industry: 'Spotřební chemie',
      logoLight: '/assets/procter.png',
      logoDark: '/assets/procter-dark.png',
    },
    {
      name: 'Toyoda Gosei',
      plant: 'Výrobní závod Klášterec n. Ohří',
      industry: 'Těsnění & bezpečnostní díly',
      logoLight: '/assets/toyoda.png',
      logoDark: '/assets/toyoda-dark.png',
    },
    {
      name: 'Toyota Motor',
      plant: 'TPCA Kolín',
      industry: 'Automotive výroba vozů',
      logoLight: '/assets/toyota.png',
      logoDark: '/assets/toyota-dark.png',
    },
    {
      name: 'Witte Automotive',
      plant: 'Závody Nejdek & Ostrov',
      industry: 'Zámkové systémy vozidel',
      logoLight: '/assets/witte.png',
      logoDark: '/assets/witte-dark.png',
    },
    {
      name: 'Zentiva',
      plant: 'Farmaceutický výrobní závod Praha',
      industry: 'Farmacie & Chemie',
      logoLight: '/assets/zentiva.png',
      logoDark: '/assets/zentiva-dark.png',
    },
    {
      name: 'Tiberina Automotive',
      plant: 'Kovové výlisky Bělá p. Bezdězem',
      industry: 'Automotive lisovna',
      logoLight: '/assets/tiberina-logo-2-1.png',
      logoDark: '/assets/tiberina-logo-2-1-dark.png',
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="py-12 sm:py-16 border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-100/40 dark:bg-zinc-950/40 overflow-hidden relative" id="obchodni-partneri">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Naši obchodní partneři
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-2xl mx-auto">
          Spolupracujeme s více než 200 mezinárodními společnostmi a předními průmyslovými závody v ČR a Evropě.
        </p>
      </div>

      {/* Edge Gradient Masks for Smooth Fade In/Out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-100/90 dark:from-[#0c0d10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-100/90 dark:from-[#0c0d10] to-transparent z-10 pointer-events-none" />

      {/* Infinite Seamless Marquee Ribbon with Hover Pause */}
      <div className="flex overflow-hidden select-none py-2 group/track">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 group-hover/track:[animation-play-state:paused]">
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="h-16 sm:h-18 px-5 sm:px-6 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-zinc-900/90 backdrop-blur-md flex items-center gap-4 shrink-0 shadow-xs hover:shadow-md hover:border-[#ff5a1f]/60 dark:hover:border-[#ff5a1f]/60 transition-all duration-300 group cursor-default"
            >
              {/* Logo Container with Light/Dark contrast versions */}
              <div className="flex items-center justify-center shrink-0 min-w-[90px] max-w-[130px] h-8">
                {/* Light Mode: Slate Dark Charcoal Logo */}
                <img
                  src={item.logoDark}
                  alt={item.name}
                  className="max-h-7 sm:max-h-8 max-w-[110px] sm:max-w-[125px] object-contain dark:hidden opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                  loading="lazy"
                />
                {/* Dark Mode: Crisp Pure White Logo */}
                <img
                  src={item.logoLight}
                  alt={item.name}
                  className="max-h-7 sm:max-h-8 max-w-[110px] sm:max-w-[125px] object-contain hidden dark:block opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                  loading="lazy"
                />
              </div>

              {/* Plant Location & Industry Tag */}
              <div className="border-l border-slate-200 dark:border-zinc-800/90 pl-3.5 flex flex-col justify-center">
                <span className="text-[12px] font-bold text-slate-800 dark:text-zinc-100 group-hover:text-[#ff5a1f] transition-colors whitespace-nowrap">
                  {item.plant}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 whitespace-nowrap">
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
