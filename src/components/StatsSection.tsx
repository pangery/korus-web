import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '25+',
      label: 'Let na trhu',
      desc: 'Stabilní a ověřený partner průmyslových podniků a bezpečnosti práce od roku 1999.',
    },
    {
      value: '15 000+',
      label: 'Produktů skladem',
      desc: 'Kompletní certifikované portfolio OOPP od hlavy až k patě pro každou průmyslovou profesi.',
    },
    {
      value: '100+',
      label: 'Specialistů v týmu',
      desc: 'Tým zkušených odborníků připravených navrhnout optimální řešení a vzorkování.',
    },
    {
      value: '5 000 m²',
      label: 'Skladové kapacity',
      desc: 'Moderní logistické centrum s digitalizovaným řízením WMS zaručující expedici do 24 hodin.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors" id="cisla">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6" data-scroll-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
              KORUS v číslech
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Zázemí, na které se můžete spolehnout
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md font-normal leading-relaxed">
            Čtvrtstoletí investic do automatizace logistiky, rozšiřování sortimentu a vývoje vlastní prémiové značky DYKENO®.
          </p>
        </div>

        {/* 4-Column Minimalist Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
              data-scroll-reveal
            >
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                {item.value}
              </div>
              <h3 className="text-base font-semibold text-slate-800 dark:text-zinc-200 mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
