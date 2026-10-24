import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from '../Icons';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const services = [
    {
      id: 'optimization',
      title: 'Optimalizace produktů a procesů',
      summary: 'Audity pracovního prostředí, minimalizace rizik a úspora nákladů.',
      description:
        'Předložíme individuální návrh řešení, zefektivníme procesy a aplikaci ochranných pomůcek. Vše na základě auditu vašeho reálného prostředí a analýzy rizik na linkách. Seznámíme vás s aktuálně platnou legislativou a normami EU. Ušetříte čas i náklady a potenciální rizika minimalizujete.',
      badge: 'Audit & Legislativa',
      metrics: 'Až 28 % snížení roční spotřeby OOPP',
    },
    {
      id: 'customer-care',
      title: 'Profesionální zákaznický servis',
      summary: 'Dlouhodobý partner a osobní technický konzultant pro váš provoz.',
      description:
        'Nejsme pouhým dodavatelem zboží. Jsme vaším strategickým partnerem, na kterého se můžete kdykoliv obrátit. Proškolený personál zákaznického servisu a obchodní zástupci vám poskytnou odborné poradenství a praktickou pomoc při jakémkoliv technickém či provozním problému.',
      badge: 'Osobní péče',
      metrics: 'Zákaznická linka Po–Pá 07:00–16:30',
    },
    {
      id: 'rd-innovation',
      title: 'Vlastní vývoj a neustálá inovace',
      summary: 'Testování přímo v technologických provozech a vlastní značka DYKENO®.',
      description:
        'Kontinuálně se posouváme kupředu. Investujeme do neustálého vývoje a inovace vlastních produktů, materiálů a technologických platforem. Vyvíjíme řešení na základě testování přímo v reálných podmínkách náročných průmyslových provozů.',
      badge: 'Značka DYKENO®',
      metrics: 'Unikátní kevlarové & kompozitní technologie',
    },
    {
      id: 'portfolio',
      title: 'Široké portfolio kvalitních produktů',
      summary: '15 000+ položek certifikovaného sortimentu okamžitě k dispozici.',
      description:
        'V našem sortimentu naleznete pracovní a bezpečnostní obuv, oděvy, ochranné rukavice, ochranu zraku a sluchu, lepicí pásky, brusivo, obalový materiál, průmyslové utěrky a technický materiál. Vše splňuje nejpřísnější evropské normy.',
      badge: 'Skladem 15 000+',
      metrics: 'Komplexní dodavatel pro celý závod',
    },
    {
      id: 'b2b-portal',
      title: 'Pohodlný B2B portál & EDI napojení',
      summary: 'Přímá integrace do vašeho ERP (SAP, Helios, ABRA) a limity na profese.',
      description:
        'Vše pohodlně na jednom místě. B2B portál KORUS slouží k rychlému a jednoduchému výběru z individualizovaného katalogu vašeho podniku. Umožňuje nastavení schvalovacích procesů pro vedoucí středisek, sledování čerpání limitů na zaměstnance i automatické EDI objednávky.',
      badge: 'Digitalizace ERP',
      metrics: 'Úspora až 70 % administrativního času nákupu',
    },
    {
      id: 'custom-mfg',
      title: 'Zakázková výroba na míru',
      summary: 'Individuální střihy, materiály a funkční úpravy dle specifikace provozu.',
      description:
        'Zajišťujeme zakázkovou výrobu přesně na míru vašim specifickým provozním požadavkům. Díky vlastnímu testovacímu zázemí a oddělení technické podpory vyjdeme vstříc i nejnáročnějším přáním – ať už jde o speciální ochranu proti chemikáliím, elektrickému oblouku či specifické střihy.',
      badge: 'Custom Made',
      metrics: 'Vzorkování a testování přímo ve výrobě',
    },
    {
      id: 'logistics',
      title: 'Optimální logistika & Konsignační sklady',
      summary: 'Centrální areál 5 000 m² v Podbořanech a výdejní automaty u linek.',
      description:
        'S námi máte jistotu, že své zboží obdržíte vždy v nejkratší možné lhůtě. Zřizujeme konsignační sklady přímo ve vašich halách, dodáváme automatizované výdejní boxy a díky logistickému centru garantujeme expedici do 24 hodin bez zbytečných prodlev.',
      badge: 'Expedice 24h',
      metrics: 'Centrální areál Podbořany 5 000 m²',
    },
    {
      id: 'branding-embroidery',
      title: 'Univerzální potisk a strojní výšivka',
      summary: 'Vlastní dílna s odolností při průmyslovém praní až do 90 °C.',
      description:
        'Od kusových zakázek až po tisícové série. Aplikujeme firemní vizuální identitu moderními technologiemi: transferový potisk, sítotisk, lithotransfer, flex, sublimaci, digitální tisk a trvanlivou strojní výšivku s garantovanou barevnou stálostí.',
      badge: 'Odolnost do 90 °C',
      metrics: 'Kapacita 1 500 ks týdně',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="sluzby">
      {/* Editorial Header */}
      <div data-scroll-reveal className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
          Komplexní portfolio služeb • KORUS EU
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.12] mb-4">
          KORUS nejsou jen produkty. Je to komplexní jistota a servis pro váš provoz.
        </h2>
        <p className="text-base text-slate-600 dark:text-zinc-400 font-normal max-w-2xl leading-relaxed">
          Naší hlavní hodnotou je komplexnost, kterou vkládáme do všeho, co děláme. Propojujeme bezpečnost s efektivitou na každém kroku.
        </p>
      </div>

      {/* Services Grid with Interactive Accordion / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, idx) => (
          <div
            key={s.id}
            data-scroll-reveal
            data-scroll-delay={((idx % 4) * 100 + 50).toString()}
            className={`card-modern p-6 flex flex-col justify-between group transition-all cursor-pointer ${
              activeTab === idx ? 'ring-2 ring-[#ff5a1f] border-transparent' : 'hover:border-[#ff5a1f]/40'
            }`}
            onClick={() => setActiveTab(idx)}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#ff5a1f] bg-orange-50 dark:bg-orange-950/40 px-2.5 py-1 rounded-full">
                  {s.badge}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-zinc-600 font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ff5a1f] transition-colors leading-snug">
                {s.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-zinc-400 font-normal leading-relaxed mb-4">
                {s.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px]">{s.metrics}</span>
              </div>

              <a
                href="#kontakt"
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-[#ff5a1f] transition-colors"
              >
                <span>Poptat službu</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
