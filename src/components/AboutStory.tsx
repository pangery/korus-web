import React from 'react';
import { CheckCircle2, Shield, TrendingUp, Award } from './Icons';

export const AboutStory: React.FC = () => {
  const pillars = [
    {
      title: 'Efektivita a úspora času',
      desc: 'Automatizovaný B2B portál s EDI napojením na váš ERP systém a přímým schvalováním objednávek vedoucími středisek.',
      icon: <TrendingUp className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: '100% soulad s legislativou',
      desc: 'Veškeré zboží disponuje platnými certifikáty dle EN norem. Poskytujeme bezplatné audity rizik na pracovišti.',
      icon: <Shield className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: 'Ergonomie bez únavy',
      desc: 'Vlastní inovativní střihy a 4-směrné elastické materiály DYKENO®, které udržují zaměstnance svěží po celou směnu.',
      icon: <Award className="w-5 h-5 text-[#ff5a1f]" />,
    },
    {
      title: 'Zakázkový servis & Náhradní plnění',
      desc: 'Vlastní dílna na potisk a výšivku s odolností do 90 °C. Uplatnění náhradního plnění v plném rozsahu.',
      icon: <Award className="w-5 h-5 text-[#ff5a1f]" />,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-zinc-800" id="about">
      {/* Editorial Split Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
            Filozofie & Vize
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Každý pohyb při práci musí být bezpečný.
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
          <p>
            Pracujeme na tom, aby každý pohyb nejen při práci byl bezpečný a provázený nejvyšším možným komfortem. Zefektivňujeme výrobní procesy díky kompletnímu zajištění pracovních oděvů, certifikovaných ochranných pomůcek a průmyslového materiálu.
          </p>
          <p>
            Disponujeme moderním B2B portálem, optimalizovanou logistikou a komplexní nabídkou služeb. Jsme spolehlivou oporou od poradenství až po pravidelné systémové dodávky.
          </p>
        </div>
      </div>

      {/* 4 Pillars - Clean Typographic List (No identical card boxes!) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200 dark:border-zinc-800 mb-12">
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

      {/* European Scope Statement */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
            Mezinárodní export do 8 zemí Evropské unie
          </h4>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Česká republika • Slovensko • Německo • Polsko • Rakousko • Maďarsko • Rumunsko
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>Certifikovaný dodavatel dle norem EU</span>
        </div>
      </div>
    </section>
  );
};
