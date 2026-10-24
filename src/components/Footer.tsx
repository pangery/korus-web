import React, { useState } from 'react';
import { ArrowUp, ExternalLink, ShieldCheck, Download } from './Icons';

interface FooterProps {
  onOpenBrochure: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrochure }) => {
  const [cookieConsent, setCookieConsent] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-black dark:text-zinc-400 border-t border-slate-800 dark:border-zinc-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-26 rounded-t-[28px] sm:rounded-t-[40px] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto">
        {/* Top Brochure Bar */}
        <div className="pb-12 mb-12 border-b border-slate-800 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Firemní katalog & brožura KORUS
            </h3>
            <p className="text-sm text-slate-400">
              Stáhněte si kompletní přehled sortimentu, certifikací a technických specifikací v PDF.
            </p>
          </div>
          <button
            onClick={onOpenBrochure}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-medium text-xs sm:text-sm transition-colors shrink-0 shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Stáhnout brožuru (PDF)</span>
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-xs sm:text-sm">
          {/* Col 1: About */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/assets/korus-logo-dark.png"
              alt="KORUS Safety & Industry"
              className="h-8 w-auto object-contain mb-4"
            />
            <p className="text-slate-400 dark:text-zinc-400 leading-relaxed text-xs mb-3">
              Specialista na osobní ochranné pracovní pomůcky a komplexní systémový servis pro průmyslové podniky od roku 1999.
            </p>
            <p className="text-[11px] text-slate-500 leading-tight">
              Provozovna: 29. srpna 792, Podbořany<br />
              Sídlo: Masarykova 1247/164, Ústí n. L.<br />
              IČ: 27289095 • DIČ: CZ27289095
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4 text-xs font-mono">
              Společnost & Služby
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#sluzby" className="hover:text-white transition-colors">
                  Portfolio 8 služeb
                </a>
              </li>
              <li>
                <a href="#partneri" className="hover:text-white transition-colors">
                  B2B program & Partneři
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  O společnosti
                </a>
              </li>
              <li>
                <a href="#casova-osa" className="hover:text-white transition-colors">
                  25 let historie
                </a>
              </li>
              <li>
                <a href="#kariera" className="hover:text-white transition-colors">
                  Kariéra a volná místa
                </a>
              </li>
              <li>
                <a href="#odvetvi" className="hover:text-white transition-colors">
                  10 průmyslových odvětví
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4 text-xs font-mono">
              Značka DYKENO®
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="https://www.dykeno.cz/produkty/work-and-safety/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  DYKENO Work & Safety
                </a>
              </li>
              <li>
                <a href="https://www.dykeno.cz/produkty/tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  DYKENO Tech
                </a>
              </li>
              <li>
                <a href="https://www.dykeno.cz/produkty/premium/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  DYKENO Premium
                </a>
              </li>
              <li>
                <a href="https://www.dykeno.cz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#ff5a1f]">
                  <span>Oficiální web dykeno.cz</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4 text-xs font-mono">
              Export do 8 zemí
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Česká republika (Centrála)</li>
              <li>Slovensko (SK)</li>
              <li>Německo (DE)</li>
              <li>Polsko (PL)</li>
              <li>Rakousko (AT)</li>
              <li>Maďarsko (HU)</li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-white uppercase tracking-wider mb-4 text-xs font-mono">
              Zpět nahoru
            </h4>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-slate-300 hover:text-white text-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Na začátek stránky</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-slate-800 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2024 KORUS EU a.s. Všechna práva vyhrazena. Komplexní ochrana zdraví a bezpečnost práce.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.korus.eu/projekty-eu/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Projekty EU
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCookieConsent(!cookieConsent); }} className="hover:text-white">
              Nastavení cookies
            </a>
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ff5a1f]" />
              <span>Certifikovaný B2B dodavatel</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
