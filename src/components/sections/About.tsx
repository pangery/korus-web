import React from 'react';
import { CheckCircle2, Shield, TrendingUp, Award, Layers } from '../Icons';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Optimalizace a úspora nákladů',
      desc: 'Předložíme individuální návrh řešení, zefektivníme procesy a aplikaci produktů na základě auditu vašeho prostředí.',
      icon: <TrendingUp className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: '100% shoda s legislativou a BOZP',
      desc: 'Veškeré zboží disponuje platnými certifikáty dle norem ČSN EN. Minimalizujeme rizika pracovních úrazů a sankcí.',
      icon: <Shield className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: 'Vlastní značka DYKENO® a ergonomie',
      desc: 'Vyvíjíme vlastní prémiové produkty, v nichž se setkává praktická znalost provozů s nejmodernějšími kompozitními materiály.',
      icon: <Layers className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: 'Zákaznický servis & Náhradní plnění',
      desc: 'Zákaznická hotline Po–Pá 07:00–16:30, vlastní dílna na potisk do 90 °C a možnost uplatnění náhradního plnění v plné výši.',
      icon: <Award className="w-5 h-5 text-[#ff5a1f]" />,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-zinc-800" id="about">
      {/* Editorial Split Narrative */}
      <div data-scroll-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
            O společnosti • Po vašem boku
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Již 25 let komplexně propojujeme efektivitu s ochranou a komfortem.
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
          <p>
            Pracujeme na tom, aby každý pohyb nejen při práci byl bezpečný a provázený nejvyšším možným komfortem. Zefektivňujeme výrobní procesy díky kompletnímu zajištění pracovních oděvů, ochranných pracovních prostředků a průmyslového materiálu.
          </p>
          <p>
            Disponujeme moderním B2B portálem, optimalizovanou logistikou v Podbořanech a komplexní nabídkou služeb. Neustále se posouváme kupředu. Jsme tu pro vás od profesionálních produktů přes servis až po každodenní zákaznickou podporu.
          </p>
        </div>
      </div>

      {/* 4 Pillars - Clean Typographic List */}
      <div data-scroll-reveal data-scroll-delay="100" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200 dark:border-zinc-800 mb-12">
        {pillars.map((p, idx) => (
          <div key={idx} className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center">
              {p.icon}
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {p.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              {p.desc}
            </p>
          </div>
        ))}
      </div>

      {/* European Scope Statement & EU Project Banner */}
      <div data-scroll-reveal data-scroll-delay="150" className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Spolufinancováno Evropskou unií
            </span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
            Projekt „Digitální transformace společnosti KORUS EU a.s.“
          </h4>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Registrační číslo projektu: <strong className="font-mono text-slate-700 dark:text-zinc-300">CZ.01.01.02/01/24_054/0006144</strong> • Implementace WMS, ERP automatizace a moderního B2B klientského portálu.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
          <CheckCircle2 className="w-4 h-4" />
          <span>Certifikovaný dodavatel dle norem EU</span>
        </div>
      </div>
    </section>
  );
};
