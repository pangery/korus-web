import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from './Icons';

interface ProductItem {
  id: string;
  category: 'footwear' | 'clothing' | 'gloves' | 'head' | 'services';
  categoryLabel: string;
  series: string;
  title: string;
  summary: string;
  image: string;
  chips: string[];
  specs: { label: string; value: string }[];
  primaryActionUrl?: string;
}

export const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('dykeno-carbon');

  const categories = [
    { id: 'all', label: 'Všechny produkty' },
    { id: 'footwear', label: 'Bezpečnostní obuv' },
    { id: 'clothing', label: 'Pracovní oděvy' },
    { id: 'gloves', label: 'Rukavice' },
    { id: 'head', label: 'Zrak & Hlava' },
    { id: 'services', label: 'B2B Služby' },
  ];

  const products: ProductItem[] = [
    {
      id: 'dykeno-carbon',
      category: 'footwear',
      categoryLabel: 'Bezpečnostní obuv',
      series: 'DYKENO Work & Safety',
      title: 'DYKENO S3S Carbon Shield',
      summary:
        'Vlajková bezpečnostní polobotka navržená pro automotive, logistiku a moderní provozy. Spojuje ultralehkou karbonovou tužinku s nekovovou kevlarovou planžetou proti propichu.',
      image: '/assets/worksafety-863x1024.jpg',
      chips: ['ČSN EN ISO 20345:2022', 'S3S ESD SR FO', 'Karbonový kompozit', 'Kevlar®', 'Vibram®'],
      specs: [
        { label: 'Bezpečnostní norma', value: 'ČSN EN ISO 20345:2022 (S3S ESD SR FO)' },
        { label: 'Ochranná špička', value: 'Ultralehký karbonový kompozit (nemagnetická)' },
        { label: 'Ochrana proti propichu', value: 'Flexibilní textilní kevlarová planžeta' },
        { label: 'Podešev', value: 'Dvojhustotní PU / pryž Vibram® s protiskluzem SR' },
        { label: 'Hmotnost', value: 'Pouze 460 g (vel. 42)' },
        { label: 'ESD ochrana', value: 'Odpor 100 kΩ až 35 MΩ dle EN 61340-5-1' },
      ],
      primaryActionUrl: 'https://www.dykeno.cz/produkty/work-and-safety/',
    },
    {
      id: 'dykeno-motion-jacket',
      category: 'clothing',
      categoryLabel: 'Pracovní oděvy',
      series: 'DYKENO Premium',
      title: 'DYKENO Motion Pro Stretch Bunda',
      summary:
        'Ergonomická montérková bunda z inovativního 4-směrného elastického materiálu. Zajišťuje neomezený pohyb a v namáhaných zónách je zesílena extrémně odolnou Cordurou®.',
      image: '/assets/dykeno_premium-863x1024.jpg',
      chips: ['4-Way Stretch', 'Cordura® 500D', 'YKK® Zipy', 'Vodoodpudivá úprava'],
      specs: [
        { label: 'Materiál těla', value: '92% Polyamid, 8% Elastan (gramáž 260 g/m²)' },
        { label: 'Výztuhy', value: 'Cordura® 500D na ramenou, loktech a lemu kapes' },
        { label: 'Funkční prvky', value: '6 multifunkčních kapes, větrací otvory v podpaží' },
        { label: 'Bezpečnost', value: 'Diskrétní reflexní prvky 3M™ Scotchlite™' },
        { label: 'Údržba', value: 'Průmyslové praní na 60 °C bez ztráty elasticity' },
      ],
      primaryActionUrl: 'https://www.dykeno.cz/produkty/premium/',
    },
    {
      id: 'dykeno-puregrip-gloves',
      category: 'gloves',
      categoryLabel: 'Ochranné rukavice',
      series: 'DYKENO Tech',
      title: 'DYKENO PureGrip Cut Level D',
      summary:
        'Vysoce citlivé protiprořezové rukavice z 18-gauge jemného úpletu. Ideální pro přesné montáže v automotive s požadavkem na cit v prstech a ovládání dotykových displejů.',
      image: '/assets/tech-863x1024.jpg',
      chips: ['EN 388: 4X42D', 'HPPE 18-Gauge', 'Mikropěnový nitril', 'Touchscreen'],
      specs: [
        { label: 'Ochrana proti prořezu', value: 'Třída D dle EN ISO 13997 (vysoká odolnost)' },
        { label: 'Mechanická odolnost', value: 'EN 388:2016 (úroveň 4X42D)' },
        { label: 'Povrstvení', value: 'Prodyšná nitrilová mikropěna odolná vůči olejům' },
        { label: 'Úplet', value: '18 gauge HPPE vlákno s ocelovým mikrojádrem' },
      ],
      primaryActionUrl: 'https://www.dykeno.cz/produkty/tech/',
    },
    {
      id: 'dykeno-visionsafe-evo',
      category: 'head',
      categoryLabel: 'Zrak & Hlava',
      series: 'DYKENO Work & Safety',
      title: 'DYKENO VisionSafe EVO Brýle',
      summary:
        'Panoramatické bezpečnostní brýle s hmotností pouhých 24 gramů. Prémiová povrchová úprava garantuje trvalou ochranu proti poškrábání i zamlžení.',
      image: '/assets/hp-1.jpg',
      chips: ['EN 166 1FT', 'UV400 Filtr', 'Anti-Fog Plus', 'Optická třída 1', '24 g'],
      specs: [
        { label: 'Certifikace', value: 'ČSN EN 166 (označení 1FT KN CE)' },
        { label: 'Optická třída', value: 'Třída 1 (pro trvalé celodenní nošení)' },
        { label: 'Mechanická odolnost', value: 'Odolnost proti nárazu částic do 45 m/s' },
        { label: 'Ochrana UV', value: 'Filtruje 99.9% UVA/UVB záření (UV400)' },
      ],
      primaryActionUrl: 'https://www.dykeno.cz/produkty/work-and-safety/',
    },
    {
      id: 'korus-branding-service',
      category: 'services',
      categoryLabel: 'B2B Služby',
      series: 'KORUS Servis',
      title: 'Potisk a výšivka oděvů',
      summary:
        'Vlastní profesionální dílna pro aplikaci firemních log na pracovní oděvy. Sítotisk, transferový tisk, DTF technologie i reprezentativní strojní výšivka.',
      image: '/assets/kariera-cta-1024x366.jpg',
      chips: ['Vlastní dílna', 'Sítotisk & DTF', 'Strojní výšivka', 'Praní do 90 °C'],
      specs: [
        { label: 'Týdenní kapacita', value: 'Až 1 500 označených oděvů týdně' },
        { label: 'Odolnost', value: 'Garance stálosti pro průmyslové praní' },
        { label: 'Grafická příprava', value: 'Vizualizace zdarma před zahájením výroby' },
      ],
      primaryActionUrl: 'https://www.korus.eu/',
    },
    {
      id: 'korus-b2b-portal',
      category: 'services',
      categoryLabel: 'B2B Služby',
      series: 'KORUS Digital',
      title: 'KORUS B2B Portál & Systémová integrace',
      summary:
        'Platforma pro správu osobních ochranných pomůcek ve velkých podnicích. Přímé napojení přes EDI, limity na pracovníky a schvalovací workflow.',
      image: '/assets/plocha-1.svg',
      chips: ['EDI Integrace', 'Katalogy na míru', 'Limity na pracovníky', 'Náhradní plnění'],
      specs: [
        { label: 'ERP integrace', value: 'SAP, Helios Inuvio, QI, Pohoda, Money' },
        { label: 'Řízení nákupu', value: 'Hierarchické schvalování vedoucími středisek' },
        { label: 'Legislativa', value: 'Plné uplatnění náhradního plnění' },
      ],
      primaryActionUrl: 'https://www.korus.eu/',
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-zinc-800" id="katalog">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
            Katalog produktů & certifikovaných řešení
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Vybrané produkty KORUS & DYKENO®
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeFilter === cat.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Horizontal List with Progressive Disclosure */}
      <div className="space-y-4">
        {filteredProducts.map((product) => {
          const isExpanded = expandedId === product.id;

          return (
            <div
              key={product.id}
              className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 sm:p-6 transition-all hover:border-slate-300 dark:hover:border-zinc-700 shadow-xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Product Thumbnail */}
                <div className="md:col-span-3 sm:md:col-span-2">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-zinc-950">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Product Meta & Description */}
                <div className="md:col-span-6 sm:md:col-span-7">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#ff5a1f]">
                      {product.series}
                    </span>
                    <span className="text-slate-300 dark:text-zinc-700">•</span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-3">
                    {product.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {product.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-[11px] font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-zinc-800">
                  <button
                    onClick={() => toggleExpand(product.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-[#ff5a1f] transition-colors py-1.5 px-3 rounded-lg bg-slate-50 dark:bg-zinc-800/60"
                  >
                    <span>{isExpanded ? 'Skrýt specifikace' : 'Zobrazit parametry'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#ff5a1f]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    )}
                  </button>

                  {product.primaryActionUrl && (
                    <a
                      href={product.primaryActionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-[#ff5a1f] hover:text-[#e04b12]"
                    >
                      <span>Web produktu</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Progressive Disclosure: Technical Datasheet */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-slate-100 dark:border-zinc-800 animate-fade-in">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-3">
                      <ShieldCheck className="w-4 h-4 text-[#ff5a1f]" />
                      <span>Certifikované technické parametry výrobku:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                          <p className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">
                            {spec.label}
                          </p>
                          <p className="font-medium text-slate-800 dark:text-zinc-200">
                            {spec.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
