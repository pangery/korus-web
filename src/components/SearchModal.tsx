import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from './Icons';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const searchableItems = [
    { title: 'DYKENO S3S Carbon Shield', category: 'Bezpečnostní obuv', norm: 'ČSN EN ISO 20345 (S3S ESD SR FO)', href: '#katalog' },
    { title: 'DYKENO Air S1PS Lehká obuv', category: 'Logistika & E-commerce', norm: 'EN ISO 20345 (410 g)', href: '#katalog' },
    { title: 'DYKENO ProGrip Cut 5', category: 'Ochranné rukavice', norm: 'ČSN EN 388 (4X43D)', href: '#katalog' },
    { title: 'DYKENO ArcProtect APC 2', category: 'Nehořlavé oděvy', norm: 'ČSN EN 61482 • EN 1149-5', href: '#katalog' },
    { title: 'DYKENO Vision Pro', category: 'Ochrana zraku & Hlava', norm: 'EN 166 1FT KN', href: '#katalog' },
    { title: 'Kvantifikovaný audit BOZP', category: 'Služba KORUS', norm: 'Optimalizace nákladů a rizik', href: '#sluzby' },
    { title: 'KORUS B2B Portál & EDI', category: 'Digitální řešení', norm: 'Integrace SAP / Helios / ABRA', href: '#bento-prehled' },
    { title: 'Zakázkový potisk & Výšivka', category: 'Služba KORUS', norm: 'Odolnost do 90 °C • DTF / Sítotisk', href: '#sluzby' },
    { title: 'Konsignační sklady & Výdejní automaty', category: 'Logistika', norm: 'Expedice 24h • Podbořany', href: '#sluzby' },
    { title: 'Automobilový průmysl', category: 'Odvětví', norm: 'ESD & Antistatika', href: '#odvetvi' },
    { title: 'Energetika & Utility', category: 'Odvětví', norm: 'Ochrana proti oblouku', href: '#odvetvi' },
    { title: 'Potravinářský průmysl', category: 'Odvětví', norm: 'HACCP normy', href: '#odvetvi' },
    { title: 'Chemický průmysl', category: 'Odvětví', norm: 'EN 13034 Typ 6', href: '#odvetvi' },
    { title: 'Náhradní plnění v plné výši', category: 'B2B Partnerství', norm: 'Zákon o zaměstnanosti', href: '#partneri' },
    { title: 'Inženýrská anatomie DYKENO® Carbon', category: 'Technologie & Materiály', norm: 'Detailní rozbor • Certifikace & Hotspoty', href: '#dykeno-showcase' },
    { title: 'B2B Konfigurátor úspor a vzorkování', category: 'Interaktivní nástroj', norm: 'Kalkulace nákladů a náhradního plnění', href: '#konfigurator' },
    { title: 'Často kladené otázky (FAQ)', category: 'B2B Informace', norm: 'Náhradní plnění • Konsignace • EDI', href: '#faq' },
    { title: 'Logistické centrum Podbořany', category: 'Areál', norm: '5 000 m² s WMS automatizací', href: '#kontakt' },
  ];

  const results = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.norm.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems.slice(0, 6);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(target, { offset: -75, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      history.pushState(null, '', href);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#12141a] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-white/10">
          <Search className="w-5 h-5 text-[#ff5a1f] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hledejte v produktech, normách (S3, ESD, ČSN EN), službách KORUS..."
            className="w-full text-sm bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white px-1.5 py-0.5 rounded"
            >
              Vymazat
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
            aria-label="Zavřít"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5">
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
            {query.trim() ? `Nalezeno výsledků (${results.length})` : 'Doporučené položky'}
          </div>

          {results.length > 0 ? (
            results.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.href)}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800/80 transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#ff5a1f] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">
                    {item.norm}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-zinc-600 group-hover:text-[#ff5a1f] group-hover:translate-x-1 transition-all" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-zinc-400">
              Pro výraz „{query}“ nebyl nalezen žádný výsledek. Zkuste hledat např. „DYKENO“, „S3S“, „audit“, „rukavice“ nebo „potisk“.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-950/40 flex items-center justify-between text-[11px] text-slate-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Stiskněte <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 font-mono text-[10px]">ESC</kbd> pro zavření</span>
          </div>
          <a
            href="https://www.korus-eshop.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff5a1f] hover:underline font-semibold"
          >
            Hledat v B2B e-shopu (15 000+ položek) →
          </a>
        </div>
      </div>
    </div>
  );
};
