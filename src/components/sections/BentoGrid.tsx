import React, { useState } from 'react';
import { BentoCard } from '../ui/BentoCard';
import { TechBadge } from '../ui/TechBadge';
import { ArrowRight, ShieldCheck, Truck, ExternalLink, Calendar, Users, Award } from '../Icons';

export const BentoGrid: React.FC = () => {
  const [activeShoeSpec, setActiveShoeSpec] = useState<'toe' | 'puncture' | 'sole' | 'esd'>('toe');
  const [activeYear, setActiveYear] = useState('2024');

  const shoeSpecs = {
    toe: {
      title: 'Ultralehká karbonová tužinka',
      desc: 'Nekovová kompozitní špička s certifikací na 200 J. Nevede chlad ani teplo a je o 40 % lehčí než tradiční ocel.',
      tag: 'EN ISO 20345:2022',
    },
    puncture: {
      title: 'Kevlarová planžeta proti propichu',
      desc: 'Vícevrstvý balistický aramid zajišťuje 100% ochranu chodidla při zachování plné ohebnosti boty.',
      tag: 'Nulová perforace',
    },
    sole: {
      title: 'Dvojhustotní Vibram® podešev',
      desc: 'Protiskluznost nejvyšší třídy SR s tlumicí mezivrstvou z měkčeného polyuretanu pro celodenní komfort.',
      tag: 'Třída SR FO',
    },
    esd: {
      title: 'Elektrostatická ESD ochrana',
      desc: 'Disipativní vlastnosti s odporem 100 kΩ až 35 MΩ splňující přísnou normu ČSN EN 61340-5-1.',
      tag: 'ESD standard',
    },
  };

  const timelineMilestones = [
    { year: '1999', label: 'Založení v Mostě', desc: 'Zahájení distribuce certifikovaných OOPP pro průmysl.' },
    { year: '2008', label: 'B2B Expanze', desc: 'Komplexní smluvní zajištění výrobních závodů v ČR.' },
    { year: '2016', label: 'Značka DYKENO®', desc: 'Uvedení vlastní prémiové řady bezpečnostní obuvi a oděvů.' },
    { year: '2021', label: 'Areál 5 000 m²', desc: 'Otevření moderního logistického centra s WMS automatizací.' },
    { year: '2024', label: 'Export do 8 zemí', desc: 'Čtvrtstoletí na trhu a partnerství s nadnárodními korporacemi.' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="bento-prehled">
      {/* Editorial Section Header */}
      <div data-scroll-reveal className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
          Bento Grid • Klíčové pilíře KORUS
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.12]">
          Vlastní vývoj, špičková logistika a partnerství prověřené 25 lety.
        </h2>
      </div>

      {/* Asymmetric Bento Mosaic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Block 1: Flagship Product Spotlight (7 cols, 2 rows) */}
        <BentoCard data-scroll-reveal data-scroll-delay="100" className="lg:col-span-7 lg:row-span-2 overflow-hidden relative group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <TechBadge label="Vlajkový model DYKENO®" variant="accent" dot />
              <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                S3S ESD SR FO
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              DYKENO S3S Carbon Shield
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-xl font-normal">
              Prémiová certifikovaná bezpečnostní polobotka navržená pro automotive, čisté provozy a logistiku. Karbonový kompozit, kevlarová ochrana a hmotnost pouhých 460 g.
            </p>

            {/* Spec Switcher Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {[
                { id: 'toe', label: 'Karbonová tužinka' },
                { id: 'puncture', label: 'Kevlarová planžeta' },
                { id: 'sole', label: 'Vibram® podešev' },
                { id: 'esd', label: 'ESD ochrana' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveShoeSpec(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeShoeSpec === tab.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Spec Info Card */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 mb-6">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  {shoeSpecs[activeShoeSpec].title}
                </h4>
                <span className="text-[10px] font-mono font-semibold text-[#ff5a1f]">
                  {shoeSpecs[activeShoeSpec].tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {shoeSpecs[activeShoeSpec].desc}
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-zinc-950 mt-2">
            <img
              src="/assets/worksafety-863x1024.jpg"
              alt="DYKENO S3S Carbon Shield"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg text-white text-xs">
              <span>Hmotnost pouze 460 g (vel. 42)</span>
              <a
                href="https://www.dykeno.cz/produkty/work-and-safety/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-semibold text-[#ff5a1f] hover:text-white transition-colors"
              >
                <span>Katalog dykeno.cz</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </BentoCard>

        {/* Block 2: 25-Year Milestone Widget (5 cols, row 1) */}
        <BentoCard data-scroll-reveal data-scroll-delay="200" className="lg:col-span-5">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                1999 — 2024
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-[#ff5a1f]">
                <Calendar className="w-3.5 h-3.5" />
                25 let růstu
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Klíčové milníky společnosti
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mb-4 font-normal">
              Od lokálního distributora po technologického partnera klíčových průmyslových podniků.
            </p>

            {/* Year Selector Pills */}
            <div className="grid grid-cols-5 gap-1.5 mb-4">
              {timelineMilestones.map((m) => (
                <button
                  key={m.year}
                  onClick={() => setActiveYear(m.year)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeYear === m.year
                      ? 'bg-[#ff5a1f] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>

            {/* Active Milestone Card */}
            {(() => {
              const current = timelineMilestones.find((m) => m.year === activeYear)!;
              return (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80">
                  <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    {current.label}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {current.desc}
                  </p>
                </div>
              );
            })()}
          </div>

          <a
            href="#casova-osa"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#ff5a1f] hover:text-[#e04b12] mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800/80"
          >
            <span>Zobrazit kompletní 25letou historii</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </BentoCard>

        {/* Block 3: Modern Logistics Hub 5 000 m² (5 cols, row 2) */}
        <BentoCard data-scroll-reveal data-scroll-delay="250" className="lg:col-span-5">
          <div>
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <Truck className="w-5 h-5" />
            </div>

            <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
              5 000 m²
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Centrální sklad s digitálním WMS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-4">
              Díky modernímu logistickému areálu a digitalizovanému řízení zásob držíme přes 15 000 certifikovaných položek skladem a garantujeme expedici do 24 hodin.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
            <span className="text-slate-500 dark:text-zinc-400">Garantovaná expedice:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Do 24 hodin</span>
          </div>
        </BentoCard>

        {/* Block 4: B2B Portal & EDI Integration (4 cols, row 3) */}
        <BentoCard data-scroll-reveal data-scroll-delay="150" className="lg:col-span-4">
          <div>
            <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#ff5a1f] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              KORUS B2B Portál & EDI
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Automatizovaná správa OOPP. Přímé EDI napojení na SAP i Helios, individuální katalogy a limity spotřeby na jednotlivé profese.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 mt-4 text-xs font-medium text-slate-700 dark:text-zinc-300">
            Úspora až 25 % nákladů na nákup OOPP
          </div>
        </BentoCard>

        {/* Block 5: Branding & Custom Embroidery (4 cols, row 3) */}
        <BentoCard data-scroll-reveal data-scroll-delay="250" className="lg:col-span-4">
          <div>
            <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-[#ff5a1f]" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Zakázkový potisk & Výšivka
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Vlastní dílna pro aplikaci firemních log. Sítotisk, DTF i strojní výšivka s garantovanou stálostí při průmyslovém praní až do 90 °C.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 mt-4 text-xs font-medium text-slate-700 dark:text-zinc-300">
            Kapacita 1 500 ks týdně • Vzorkování zdarma
          </div>
        </BentoCard>

        {/* Block 6: Corporate Client Trust (4 cols, row 3) */}
        <BentoCard data-scroll-reveal data-scroll-delay="350" className="lg:col-span-4">
          <div>
            <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-slate-700 dark:text-zinc-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Důvěra lídrů průmyslu
            </h3>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-3">
              Dlouhodobý dodavatel pro automobilky, energetiku a přední evropské výrobce.
            </p>

            <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-zinc-300">
              <TechBadge label="Toyota" />
              <TechBadge label="ČEZ" />
              <TechBadge label="Amazon" />
              <TechBadge label="Zentiva" />
              <TechBadge label="Witte" />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 mt-4 text-xs font-medium text-[#ff5a1f]">
            Náhradní plnění v plné výši
          </div>
        </BentoCard>
      </div>
    </section>
  );
};
