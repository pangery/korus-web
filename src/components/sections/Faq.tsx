import React, { useState } from 'react';
import { ChevronDown, Phone } from '../Icons';

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'Zákonné úspory & Legislativa',
      q: 'Jak přesně funguje uplatnění Náhradního plnění u KORUS EU a.s.?',
      a: 'Dle zákona o zaměstnanosti č. 435/2004 Sb. má každý zaměstnavatel s více než 25 zaměstnanci povinnost zaměstnávat osoby se zdravotním postižením (min. 4 % z celkového počtu), zaplatit odvod do státního rozpočtu (cca 100 000+ Kč ročně za každou chybějící OZP), nebo odebrat výrobky a služby formou Náhradního plnění. Odběrem OOPP a služeb od KORUS EU a.s. tuto povinnost splníte v plné výši bez nutnosti sankčních odvodů státu.',
    },
    {
      category: 'Logistika & Sklady',
      q: 'Jak probíhá zřízení konsignačního skladu a výdejních automatů ve výrobě?',
      a: 'Přímo ve vašich halách nebo u výrobních linek nainstalujeme automatizované výdejní boxy KORUS Vending nebo zřídíme konsignační sklad. Veškeré naskladněné zboží zůstává v majetku KORUS. Zaměstnanci si pomůcky vyzvedávají pomocí svých firemních čipů dle limitů své profese. Fakturace probíhá hromadně 1× měsíčně pouze za reálně odebrané kusy – nevážete tak žádný kapitál v zásobách.',
    },
    {
      category: 'Testování & Značka DYKENO',
      q: 'Můžeme si produkty prémiové značky DYKENO® nezávazně otestovat?',
      a: 'Ano, nabízíme bezplatný vzorkovací program pro průmyslové provozy. Náš technický konzultant vám dodá testovací sadu (pracovní obuv, bezešvé rukavice Cut 5, montérky Cordura) na 14 až 30 dní přímo na linky. Získáte reálnou zpětnou vazbu od zaměstnanců dříve, než se zavážete k odběru.',
    },
    {
      category: 'Digitalizace & B2B Portál',
      q: 'Podporuje B2B portál přímé napojení na náš ERP systém (SAP, Helios, ABRA)?',
      a: 'Ano, propojujeme systémy prostřednictvím standardizovaného EDI (zprávy ORDERS, DESADV, INVOIC) nebo moderního REST API. B2B portál KORUS navíc umožňuje nastavit hierarchické schvalovací matice pro vedoucí středisek, rozpočtové stropy i automatické párování faktur s příjemkami.',
    },
    {
      category: 'Dostupnost & Expedice',
      q: 'Jaké jsou garantované dodací lhůty z centrálního skladu Podbořany?',
      a: 'V moderním logistickém areálu o ploše 5 000 m² v Podbořanech držíme většinu z 15 000 položek skladem. Běžné skladové objednávky přijaté do 12:00 expedujeme ještě týž den s doručením do 24 hodin po celé České republice.',
    },
    {
      category: 'Zakázkový potisk',
      q: 'Zajišťujete firemní potisk a strojní výšivku s odolností při průmyslovém praní?',
      a: 'Ano, disponujeme vlastní moderní potiskovou dílnou. Aplikujeme reflexní transfery, sítotisk i pevnou strojní výšivku. Naše technologie garantují barevnou stálost a trvanlivost i při náročném průmyslovém praní až do 90 °C.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Title & Hotline Box */}
        <div data-scroll-reveal className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
            Odpovědi na klíčové otázky • KORUS EU
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Často kladené otázky k B2B spolupráci
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 font-normal leading-relaxed mb-8">
            Přehled nejčastějších dotazů nákupčích, ředitelů provozu a BOZP techniků ohledně norem, konsignačních skladů a náhradního plnění.
          </p>

          {/* Quick Help Box */}
          <div className="card-modern p-6 bg-slate-50/70 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
              Nenašli jste odpověď na váš dotaz?
            </h4>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed font-normal">
              Náš zákaznický servis a technologové jsou připraveni zodpovědět jakýkoliv technický dotaz týkající se norem či provozních testů.
            </p>
            <a
              href="tel:+420411135111"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff5a1f] hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>Zavolat na zákaznickou linku: +420 411 135 111</span>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion Items */}
        <div data-scroll-reveal data-scroll-delay="100" className="lg:col-span-7 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-modern overflow-hidden transition-all border border-slate-200/80 dark:border-zinc-800/80"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-zinc-900/50 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff5a1f] mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-200 text-slate-500 dark:text-zinc-400 ${
                      isOpen ? 'rotate-180 text-[#ff5a1f]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-slate-100 dark:border-zinc-800/60 animate-fade-in">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
