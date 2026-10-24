import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Phone, Mail, ShieldCheck, Calendar } from '../Icons';

interface PartnerItem {
  name: string;
  plant: string;
  industry: string;
  category: 'auto' | 'energy_chem' | 'logistics_tech';
  categoryLabel: string;
  logoLight: string;
  logoDark: string;
}

export const Partners: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Complete official 13 partners from korus.eu
  const partnersList: PartnerItem[] = [
    {
      name: 'Amazon',
      plant: 'Fulfillment logistická centra PRG',
      industry: 'E-commerce & Logistika',
      category: 'logistics_tech',
      categoryLabel: 'Logistika & Technika',
      logoLight: '/assets/amazon.png',
      logoDark: '/assets/amazon-dark.png',
    },
    {
      name: 'Bosal ČR',
      plant: 'Výfukové & emisní systémy Brandýs n. L.',
      industry: 'Těžké strojírenství & automotive',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/bosal.png',
      logoDark: '/assets/bosal-dark.png',
    },
    {
      name: 'Skupina ČEZ',
      plant: 'Jaderná & uhelná energetika',
      industry: 'Energetika & Utility',
      category: 'energy_chem',
      categoryLabel: 'Energetika & Chemie',
      logoLight: '/assets/cez.png',
      logoDark: '/assets/cez-dark.png',
    },
    {
      name: 'Gestamp',
      plant: 'Lisovna & svařovna karoserií Louny',
      industry: 'Automotive lisovny',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/gestamp.png',
      logoDark: '/assets/gestamp-dark.png',
    },
    {
      name: 'Hunter',
      plant: 'Přesná průmyslová mechanika',
      industry: 'Strojírenská výroba & nástroje',
      category: 'logistics_tech',
      categoryLabel: 'Logistika & Technika',
      logoLight: '/assets/hunter.png',
      logoDark: '/assets/hunter-dark.png',
    },
    {
      name: 'Keihin / Hitachi',
      plant: 'Klimatizační systémy Klášterec n. O.',
      industry: 'Thermal & HVAC komponenty',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/keihin.png',
      logoDark: '/assets/keihin-dark.png',
    },
    {
      name: 'Koito Czech',
      plant: 'Výrobní závod světlometů Žatec',
      industry: 'Automotive osvětlení',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/koito.png',
      logoDark: '/assets/koito-dark.png',
    },
    {
      name: 'Procter & Gamble',
      plant: 'Výrobní závod Rakona Rakovník',
      industry: 'Spotřební chemie & hygiena',
      category: 'energy_chem',
      categoryLabel: 'Energetika & Chemie',
      logoLight: '/assets/procter.png',
      logoDark: '/assets/procter-dark.png',
    },
    {
      name: 'Toyoda Gosei',
      plant: 'Výrobní závod Klášterec n. O.',
      industry: 'Těsnění & bezpečnostní airbagy',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/toyoda.png',
      logoDark: '/assets/toyoda-dark.png',
    },
    {
      name: 'Toyota Motor',
      plant: 'TPCA Kolín (TMMCZ)',
      industry: 'Automotive výroba vozů',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/toyota.png',
      logoDark: '/assets/toyota-dark.png',
    },
    {
      name: 'Witte Automotive',
      plant: 'Závody Nejdek & Ostrov',
      industry: 'Zámkové systémy vozidel',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/witte.png',
      logoDark: '/assets/witte-dark.png',
    },
    {
      name: 'Zentiva',
      plant: 'Farmaceutický výrobní závod Praha',
      industry: 'Farmacie & čisté provozy',
      category: 'energy_chem',
      categoryLabel: 'Energetika & Chemie',
      logoLight: '/assets/zentiva.png',
      logoDark: '/assets/zentiva-dark.png',
    },
    {
      name: 'Tiberina Automotive',
      plant: 'Kovové výlisky Bělá p. Bezdězem',
      industry: 'Automotive lisovna',
      category: 'auto',
      categoryLabel: 'Automotive & Výroba dílů',
      logoLight: '/assets/tiberina-logo-2-1.png',
      logoDark: '/assets/tiberina-logo-2-1-dark.png',
    },
  ];

  // Full 12 official partnership benefits from korus.eu/partneri/
  const benefits = [
    {
      num: '01',
      title: 'Česká společnost s 25letou tradicí',
      desc: 'Naše bohatá historie je zárukou odbornosti. Jsme profesionálové, kterým můžete věřit.',
    },
    {
      num: '02',
      title: 'Vývoj, inovace a zakázková výroba',
      desc: 'Naši značku kontinuálně posouváme, produkty a služby inovujeme. Vyrábíme také na míru.',
    },
    {
      num: '03',
      title: 'Komplexní portfolio produktů',
      desc: 'Od pracovního oblečení, přes ochranné pracovní prostředky, až k technickým produktům.',
    },
    {
      num: '04',
      title: 'Vlastní značka produktů DYKENO',
      desc: 'Vyvíjíme vlastní značku. Je výsledkem naší tradice, odbornosti a unikátního know-how.',
    },
    {
      num: '05',
      title: 'Certifikace produktů dle norem EU',
      desc: 'Staráme se o vaši bezpečnost za dodržení přísných standardů, norem a s platnými certifikacemi.',
    },
    {
      num: '06',
      title: 'Logistické centrum 5 000 m²',
      desc: 'Většinu produktů máme skladem v dostatečném množství. Zboží tak obdržíte přesně dle potřeby.',
    },
    {
      num: '07',
      title: 'Pohodlný B2B portál',
      desc: 'Jednoduchost a přehlednost. Tím je specifický KORUS B2B portál pro vaši správu objednávek a faktur.',
    },
    {
      num: '08',
      title: 'Technická podpora na provozech',
      desc: 'Jsme tu pro vás i jako partner pro řešení problémů technického rázu. Nenecháme vás v tom.',
    },
    {
      num: '09',
      title: 'Technická školení a audity BOZP',
      desc: 'Rádi vám předáváme potřebné vědomosti. Věříme ve vzájemnou podporu a spolupráci napříč obory.',
    },
    {
      num: '10',
      title: 'Kvalitní potisk a výšivka textilu',
      desc: 'Od kusových zakázek až po velké série. Přizpůsobíme se vašim nejnáročnějším potřebám.',
    },
    {
      num: '11',
      title: 'Konsignační sklady',
      desc: 'Optimalizujte skladové zásoby. Vždy dostupné zboží. Ve vlastních prostorách, s obsluhou či bez.',
    },
    {
      num: '12',
      title: 'Náhradní plnění garantované zákonem',
      desc: 'Partnerům v České republice poskytujeme tuto možnost jako další z našich klíčových benefitů.',
    },
  ];

  const filteredPartners = selectedCategory === 'all'
    ? partnersList
    : partnersList.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="partneri">
      {/* 1. Header: Naši obchodní partneři */}
      <div data-scroll-reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-[11px] font-semibold uppercase tracking-wider text-[#ff5a1f] mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>KORUS EU • REFERENCE & PARTNEŘI</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
          Naši obchodní partneři
        </h2>
        <p className="text-base text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
          Spolupracujeme s více než 200 mezinárodními společnostmi a předními průmyslovými závody v ČR a Evropě. Dodáváme spolehlivou ochranu, technické materiály a systémový servis.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#ff5a1f] text-white shadow-sm shadow-[#ff5a1f]/30'
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300'
            }`}
          >
            Všichni partneři ({partnersList.length})
          </button>
          <button
            onClick={() => setSelectedCategory('auto')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'auto'
                ? 'bg-[#ff5a1f] text-white shadow-sm shadow-[#ff5a1f]/30'
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300'
            }`}
          >
            Automotive & Výroba dílů (7)
          </button>
          <button
            onClick={() => setSelectedCategory('energy_chem')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'energy_chem'
                ? 'bg-[#ff5a1f] text-white shadow-sm shadow-[#ff5a1f]/30'
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300'
            }`}
          >
            Energetika & Chemie (3)
          </button>
          <button
            onClick={() => setSelectedCategory('logistics_tech')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'logistics_tech'
                ? 'bg-[#ff5a1f] text-white shadow-sm shadow-[#ff5a1f]/30'
                : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300'
            }`}
          >
            Logistika & Technika (3)
          </button>
        </div>
      </div>

      {/* 2. Interactive Enterprise Logo Cards Grid (Gallery from korus.eu) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
        {filteredPartners.map((item, idx) => (
          <div
            key={item.name}
            data-scroll-reveal
            data-scroll-delay={((idx % 4) * 80).toString()}
            className="group relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 hover:border-[#ff5a1f]/60 dark:hover:border-[#ff5a1f]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500 truncate">
                {item.categoryLabel}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="Aktivní dlouhodobé partnerství" />
            </div>

            {/* Logo Area */}
            <div className="h-16 flex items-center justify-center my-2">
              <img
                src={item.logoDark}
                alt={item.name}
                className="max-h-9 sm:max-h-10 max-w-[130px] sm:max-w-[140px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 dark:hidden"
                loading="lazy"
              />
              <img
                src={item.logoLight}
                alt={item.name}
                className="max-h-9 sm:max-h-10 max-w-[130px] sm:max-w-[140px] object-contain opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 hidden dark:block"
                loading="lazy"
              />
            </div>

            {/* Bottom Facility & Plant Info */}
            <div className="border-t border-slate-100 dark:border-zinc-800/80 pt-3 mt-2 text-center">
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#ff5a1f] transition-colors truncate">
                {item.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-0.5">
                {item.plant}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Section: Proč naše společnost? (12 Official Benefits from korus.eu/partneri/) */}
      <div data-scroll-reveal className="mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
              Výhodná spolupráce • Pro partnery
            </p>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Proč naše společnost? 12 výhod spolupráce
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-md">
            Každý aspekt práce bude pro vaše zaměstnance efektivní, bezpečný a pohodlný. Využívejte mnoha benefitů plynoucích z naší spolupráce.
          </p>
        </div>

        {/* 12 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {benefits.map((b, idx) => (
            <div
              key={b.num}
              data-scroll-reveal
              data-scroll-delay={((idx % 3) * 80).toString()}
              className="card-modern p-6 sm:p-7 flex flex-col justify-between hover:border-[#ff5a1f]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-[#ff5a1f]">
                    {b.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-700 group-hover:bg-[#ff5a1f] transition-colors" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#ff5a1f] transition-colors">
                  {b.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Special Box: Náhradní plnění & B2B Hotline (Direct from korus.eu) */}
      <div data-scroll-reveal data-scroll-delay="200" className="card-modern p-8 sm:p-10 bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff5a1f]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Garantováno zákonem o zaměstnanosti</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Uplatněte náhradní plnění v plné výši
            </h3>
            <p className="text-sm text-zinc-300 font-normal leading-relaxed max-w-2xl mb-4">
              Odběrem produktů a služeb od KORUS EU a.s. můžete jednoduše splnit svou zákonnou povinnost zaměstnávání osob se zdravotním postižením (OZP) a vyhnout se tak zbytečným odvodům do státního rozpočtu.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#ff5a1f]" />
                <span>Hotline: Po–Pá (07:00–16:30 hod.)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#ff5a1f]" />
                <span>info@korus.eu</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-[#ff5a1f]/25 cursor-pointer"
            >
              <span>Chci se stát partnerem</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+420411135111"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
              <span>Zavolat na hotline: +420 411 135 111</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
