import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from './Icons';

interface Industry {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  hazards: string[];
  recommended: string[];
}

export const IndustriesSection: React.FC = () => {
  const industries: Industry[] = [
    {
      id: 'auto',
      name: 'Automobilový průmysl & OEM',
      tag: 'Automotive & Dodavatelé',
      image: '/assets/prumysl-auto.jpg',
      description:
        'Komplexní ochrana pro lakovny, montážní linky a subdodavatele dílů. Přísné požadavky na bezprašnost, ochranu lakovaných povrchů a prevenci únavy při směnném provozu.',
      hazards: ['Elektrostatický výboj (ESD)', 'Riziko pořezání o plechy (úroveň D/F)', 'Zátěž kloubů a chodidel'],
      recommended: ['DYKENO S3S Carbon Shield ESD', 'DYKENO PureGrip Cut Level D rukavice', 'Antistatické pláště a ESD trika'],
    },
    {
      id: 'strojirenstvi',
      name: 'Strojírenství & Kovovýroba',
      tag: 'Těžký i lehký průmysl',
      image: '/assets/prumysl-strojirenstvi.jpg',
      description:
        'Práce s obráběcími stroji, lisovnami a svařovací technikou vyžaduje certifikované materiály odolné proti jiskrám, okujím, řezným kapalinám a mechanickému namáhání.',
      hazards: ['Svářečské jiskry a sálavé teplo', 'Odlétající kovové špony', 'Těžké padající předměty'],
      recommended: ['Nehořlavé svářečské oděvy EN ISO 11611', 'Svářečské kukly a brýle optické třídy 1', 'Obuv S3 s ocelovou či karbonovou špičkou'],
    },
    {
      id: 'stavba',
      name: 'Stavebnictví & Pozemní stavby',
      tag: 'Inženýrské i pozemní stavby',
      image: '/assets/prumysl-stavba.jpg',
      description:
        'Extrémní proměnlivost počasí, celoroční práce v terénu a vysoké nároky na viditelnost i mechanickou odolnost tkanin.',
      hazards: ['Práce ve výškách a pád předmětů', 'Zhoršená viditelnost techniky', 'Nepřízeň počasí a bláto'],
      recommended: ['Výstražné oděvy EN ISO 20471 třídy 3', 'Ochranné přilby s 4bodovým podbradním páskem', 'Zimní nepromokavé softshelly Cordura®'],
    },
    {
      id: 'energetika',
      name: 'Energetika & Rozvodné sítě',
      tag: 'Vysoké napětí & Distribuce',
      image: '/assets/prumysl-energetika.jpg',
      description:
        'Ochrana proti fatálním následkům elektrického oblouku (Arc Flash) a práce v elektromagnetických polích přenosových soustav.',
      hazards: ['Elektrický oblouk (teploty přes 10 000 °C)', 'Krokové napětí', 'Práce ve výškách na stožárech'],
      recommended: ['Obloukově odolné oděvy IEC 61482', 'Dielektrické rukavice třídy 0 až 4', 'Dielektrická obuv do 1 000 V'],
    },
    {
      id: 'chemie',
      name: 'Chemický & Farmaceutický průmysl',
      tag: 'Agresivní látky & Čisté prostory',
      image: '/assets/prumysl-chemie.jpg',
      description:
        'Práce s koncentrovanými kyselinami, zásadami i jemnými farmaceutickými aerosoly vyžaduje neprodyšné bariérové lamináty a filtrační systémy.',
      hazards: ['Kapalné a aerosolové chemikálie', 'Toxické výpary a plyny', 'Biologická kontaminace'],
      recommended: ['Kombinézy typu 3/4/5/6 EN 14605', 'Celoobličejové masky s filtry ABEK2P3', 'Chemicky odolné nitrilové a butylkaučukové rukavice'],
    },
    {
      id: 'drevo',
      name: 'Dřevozpracující průmysl & Lesnictví',
      tag: 'Těžba dřeva & Pily',
      image: '/assets/prumysl-drevo.jpg',
      description:
        'Ochrana při práci s motorovými pilami a katry. Extrémní prašnost a vysoké hladiny hluku vyžadují specializované útlumové prostředky.',
      hazards: ['Rotující řetězy pil (až 28 m/s)', 'Karcinogenní dřevný prach', 'Hluk přesahující 105 dB'],
      recommended: ['Protipořezové kalhoty EN 381-5 třídy 1–3', 'Mušlové chrániče sluchu s SNR 33 dB', 'Filtrační polomasky FFP3 s výdechovým ventilem'],
    },
  ];

  const [activeIndustryId, setActiveIndustryId] = useState<string>('auto');
  const activeIndustry = industries.find((i) => i.id === activeIndustryId)!;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-zinc-800" id="odvetvi">
      {/* Editorial Header */}
      <div className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
          Specializace • Průmyslová řešení
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Řešení certifikovaná pro vaše odvětví
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Každý průmyslový segment má specifická BOZP rizika a normy. Zvolte odvětví a prohlédněte si prověřenou sestavu certifikovaného vybavení.
        </p>
      </div>

      {/* Interactive Editorial Split Layout (Not a grid of 10 identical cards!) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Clean Industry Selector List */}
        <div className="lg:col-span-4 space-y-2">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                activeIndustryId === ind.id
                  ? 'border-[#ff5a1f] bg-orange-50/40 dark:bg-zinc-900 shadow-xs'
                  : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              <div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-0.5">
                  {ind.tag}
                </p>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {ind.name}
                </h3>
              </div>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${
                  activeIndustryId === ind.id ? 'text-[#ff5a1f] translate-x-1' : 'text-slate-300 dark:text-zinc-600'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right: Featured Industry Showcase Panel */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 sm:p-8 shadow-xs">
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-slate-100 dark:bg-zinc-950">
            <img
              src={activeIndustry.image}
              alt={activeIndustry.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-semibold text-[#ff4d4d] uppercase tracking-wider">
                {activeIndustry.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">{activeIndustry.name}</h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            {activeIndustry.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-slate-100 dark:border-zinc-800">
            {/* Hazards */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
                Klíčová bezpečnostní rizika:
              </h4>
              <ul className="space-y-2">
                {activeIndustry.hazards.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f] mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Equipment */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
                Doporučené certifikované vybavení:
              </h4>
              <ul className="space-y-2">
                {activeIndustry.recommended.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
            <span className="text-xs text-slate-500 dark:text-zinc-400">
              Připravíme pro váš závod vzorky a audit přímo v provozu.
            </span>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff5a1f] hover:bg-[#e04b12] text-white text-xs font-semibold transition-colors"
            >
              <span>Poptat audit pro toto odvětví</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
