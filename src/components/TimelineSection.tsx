import React, { useState } from 'react';
import { CheckCircle2, Shield, TrendingUp, Package, Globe } from './Icons';

interface Milestone {
  year: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

export const TimelineSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number | null>(null);

  const milestones: Milestone[] = [
    {
      year: '1999',
      badge: 'Založení společnosti',
      title: 'Vznik společnosti KORUS a první kroky v Mostě',
      description:
        'Založení české rodinné společnosti s jasným cílem: dodávat průmyslovým podnikům v severních Čechách certifikované a funkční ochranné pomůcky s osobním přístupem.',
      highlights: [
        'Zahájení distribuce certifikovaných OOPP',
        'Budování přímých vztahů s výrobními provozy',
        'Důraz na testování vzorků přímo v dílnách',
      ],
      icon: <Shield className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      year: '2008',
      badge: 'Průmyslová expanze',
      title: 'Systémové dodávky pro velký průmysl',
      description:
        'Rozšíření sortimentu o technické materiály, brusivo a lepicí pásky. Přechod na komplexní smluvní zajištění pro velké závody v automotive a chemickém průmyslu.',
      highlights: [
        'Expanze do klíčových výrobních segmentů ČR',
        'Zavedení konsignačních skladů u zákazníků',
        'Vznik specializovaného technického poradenství',
      ],
      icon: <TrendingUp className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      year: '2016',
      badge: 'Vlastní značka',
      title: 'Uvedení vlajkové značky DYKENO®',
      description:
        'Na základě dlouholetých zkušeností z výroby vzniká vlastní značka DYKENO®. Cílem bylo odstranit kompromisy mezi bezpečností a pohodlím pomocí kompozitních materiálů a moderní ergonomie.',
      highlights: [
        'Vývoj bezpečnostní obuvi a technických oděvů',
        'Integrace ultralehkých karbonových a kevlarových komponent',
        'Uvedení produktových řad Work & Safety, Tech a Premium',
      ],
      icon: <Package className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      year: '2021',
      badge: 'Moderní logistika',
      title: 'Nový logistický areál o rozloze 5 000 m²',
      description:
        'Dokončení výstavby moderního logistického areálu s digitálně řízeným skladem (WMS). Plná automatizace skladových operací umožnila garantovat expedici objednávek do 24 hodin.',
      highlights: [
        '5 000 m² krytých moderních skladových ploch',
        'Digitalizace procesů a čárových kódů WMS',
        'Garantovaná expedice standardních položek do 24 h',
      ],
      icon: <Package className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      year: '2024',
      badge: 'Současnost & 25 let',
      title: '25 let partnerství a export do 8 zemí EU',
      description:
        'Dnes je KORUS jedním z nejrespektovanějších specialistů na trhu BOZP. Zajišťujeme ochranu statisíců pracovníků v České republice i zahraničí a spravujeme přes 15 000 položek.',
      highlights: [
        'Pravidelné dodávky do 8 států Evropské unie',
        'Více než 15 000 aktivních položek skladem',
        'Zakázkový potisk, výšivky a náhradní plnění',
      ],
      icon: <Globe className="w-5 h-5 text-[#ff5a1f]" />,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors" id="casova-osa">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl" data-scroll-reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
            1999 — 2024 • 25 let historie
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Vývoj a klíčové milníky společnosti
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            Čtvrtstoletí systematického růstu. Od lokálního dodavatele po spolehlivého partnera evropského průmyslu a tvůrce vlastní značky DYKENO®.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Track line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 dark:bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isSelected = activeMilestone === index;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  data-scroll-reveal
                >
                  {/* Timeline Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#ff5a1f] shadow-sm z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5a1f]" />
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2">
                    <div
                      onClick={() => setActiveMilestone(isSelected ? null : index)}
                      className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#ff5a1f] bg-orange-50/20 dark:bg-zinc-900 shadow-md'
                          : 'border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                            {item.year}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-[#ff5a1f] text-xs font-semibold">
                            {item.badge}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-slate-200/80 dark:border-zinc-800">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-[#ff5a1f] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
