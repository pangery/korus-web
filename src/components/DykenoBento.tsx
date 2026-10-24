import React, { useState } from 'react';
import { ExternalLink, Check, Shield, Wrench, Award, ChevronRight } from './Icons';

export const DykenoBento: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'worksafety' | 'tech' | 'premium'>('worksafety');

  const categories = [
    {
      id: 'worksafety' as const,
      tabTitle: 'Work & Safety',
      badge: 'Ochrana & BOZP',
      heading: 'DYKENO Work & Safety',
      desc: 'Spojení pohodlného nošení a bezpečnosti zároveň. To je DYKENO Work & Safety. Produkty, které chrání při práci a splňují nejen legislativní požadavky (BOZP), ale také se dobře nosí. Kvalita, design, funkčnost a zachování ergonomie do každého prostředí, ať pracujete venku nebo ve vnitřním provozu.',
      summary: 'Kompletní ochranné a pracovní oděvy, pracovní rukavice, ochrana zraku, sluchu a dýchání pro bezpečnost a ochranu zdraví při práci.',
      image: '/assets/worksafety-863x1024.jpg',
      url: 'https://www.dykeno.cz/produkty/work-and-safety/',
      icon: <Shield className="w-5 h-5" />,
      features: ['Pracovní oděvy & montérky', 'Pracovní rukavice s gripem', 'Ochrana zraku, sluchu a dechu', 'Certifikace dle platných norem'],
    },
    {
      id: 'tech' as const,
      tabTitle: 'Tech',
      badge: 'Inovace pro výrobu',
      heading: 'DYKENO Tech',
      desc: 'DYKENO Tech přináší inovaci do vaší výroby. Technické produkty vytvořené na základě zkušeností a testování přímo v technologických provozech, ověřené v praxi a podložené dlouholetými zkušenostmi. Vyvíjíme produkty, které usnadňují výrobu v každém odvětví a v každodenním provozu.',
      summary: 'Lepicí pásky, průmyslové čištění, brusivo i nástroje a nářadí do zakázkové i sériové výroby v různých průmyslových odvětvích.',
      image: '/assets/tech-863x1024.jpg',
      url: 'https://www.dykeno.cz/produkty/tech/',
      icon: <Wrench className="w-5 h-5" />,
      features: ['Průmyslové lepicí pásky', 'Profesionální čištění & odmašťování', 'Brusivo pro sériovou výrobu', 'Nástroje a nářadí'],
    },
    {
      id: 'premium' as const,
      tabTitle: 'Premium',
      badge: 'Styl & Funkčnost',
      heading: 'DYKENO Premium',
      desc: 'DYKENO Premium je zárukou TOP kvality a designu. Oblečení, ve kterém se budete cítit skvěle, ať už ve volném čase nebo v práci. Základem značky DYKENO Premium je funkční oblečení a produkty, které mají mnohostranné a praktické využití.',
      summary: 'Volnočasové oblečení a doplňky, které spojují pohodlí, funkčnost, atraktivní vzhled a styl.',
      image: '/assets/dykeno_premium-863x1024.jpg',
      url: 'https://www.dykeno.cz/produkty/premium/',
      icon: <Award className="w-5 h-5" />,
      features: ['Funkční materiály nejvyšší třídy', 'Moderní ergonomický střih', 'Outdoor i reprezentativní nošení', 'Dlouhá životnost a odolnost'],
    },
  ];

  const current = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="relative py-28 px-4 md:px-8 bg-[#050507] bg-tech-lines" id="dykeno">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-scroll-reveal>
          <div>
            <div className="text-xs font-mono text-[#ff5a1f] tracking-widest uppercase mb-2">
              // 03. VLAJKOVÁ ZNAČKA // DYKENO
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
              Produkty <span className="apple-red-gradient">DYKENO</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400 font-normal leading-relaxed">
            Produkty naší moderní a dravé značky splní vaše nejnáročnější požadavky na komfort, design a ochranu nejen při práci.
          </p>
        </div>

        {/* Segmented Tab Controls */}
        <div className="flex justify-center mb-12" data-scroll-reveal>
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-xl">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#ff5a1f] text-white shadow-lg shadow-[#ff5a1f]/30 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>[0{idx + 1}]</span>
                <span>{cat.tabTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Card (Bento Keynote Style) */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 p-6 md:p-12 transition-all relative" data-scroll-reveal>
          {/* Tech crosshairs */}
          <span className="absolute top-4 left-4 text-white/20 font-mono text-xs select-none">+</span>
          <span className="absolute top-4 right-4 text-white/20 font-mono text-xs select-none">+</span>
          <span className="absolute bottom-4 left-4 text-white/20 font-mono text-xs select-none">+</span>
          <span className="absolute bottom-4 right-4 text-white/20 font-mono text-xs select-none">+</span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5a1f]/15 text-[#ff4d4d] text-xs font-mono tracking-wider mb-4 border border-[#ff5a1f]/30">
                  <span>TAG // {current.badge}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  {current.heading}
                </h3>
                <p className="text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                  {current.desc}
                </p>
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 mb-8">
                  <h4 className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase mb-1">
                    // SORTIMENT ŘADY
                  </h4>
                  <p className="text-sm text-zinc-200 font-medium leading-relaxed">
                    {current.summary}
                  </p>
                </div>

                {/* Features Check Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#ff5a1f]/20 text-[#ff5a1f] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-xl group"
                >
                  <span>Přejít na produkty {current.tabTitle}</span>
                  <ExternalLink className="w-4 h-4 text-[#ff5a1f] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-950 border border-white/10 shadow-2xl">
                <img
                  src={current.image}
                  alt={current.heading}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white pointer-events-none">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#ff4d4d]">DYKENO // KOLEKCE</span>
                    <p className="text-sm font-semibold">{current.tabTitle}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Triple Quick Grid for remaining cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                activeTab === cat.id
                  ? 'bg-zinc-900/80 border-[#ff5a1f]/60 shadow-lg shadow-[#ff5a1f]/10'
                  : 'bg-zinc-900/30 border-white/5 hover:border-white/20'
              }`}
              data-scroll-reveal
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${activeTab === cat.id ? 'bg-[#ff5a1f] text-white' : 'bg-white/5 text-zinc-400'}`}>
                    {cat.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base">{cat.heading}</h4>
                </div>
                <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
              </div>
              <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {cat.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
