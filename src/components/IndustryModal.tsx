import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, FileText } from './Icons';
import type { Industry } from '../data/industries';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: Industry | null;
  onSelectForConfigurator?: (industryName: string) => void;
}

export const IndustryModal: React.FC<IndustryModalProps> = ({
  isOpen,
  onClose,
  industry,
  onSelectForConfigurator,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !industry) return null;

  const handleConfigureClick = () => {
    onClose();
    if (onSelectForConfigurator) {
      onSelectForConfigurator(industry.name);
    }
    const target = document.querySelector('#konfigurator') || document.querySelector('#kontakt');
    if (target) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#12141a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-y-auto animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={industry.image}
            alt={industry.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Zavřít okno"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Category Info */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ff5a1f] text-white text-[10px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3 h-3" />
              <span>{industry.tag}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {industry.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
              Provozní specifikace & BOZP standard
            </h4>
            <p className="text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              {industry.description}
            </p>
          </div>

          {/* Two-column Matrix: Hazards vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
            {/* Hazards Card */}
            <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
              <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  Kritická provozní rizika
                </h5>
              </div>
              <ul className="space-y-2">
                {industry.hazards.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-zinc-200">
                    <span className="text-[#ff5a1f] font-bold text-xs mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations Card */}
            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
              <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h5 className="text-xs font-bold uppercase tracking-wider">
                  Certifikovaná výbava KORUS & DYKENO
                </h5>
              </div>
              <ul className="space-y-2">
                {industry.recommended.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span className="font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Relevant European & Czech Standards */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800">
            <div className="flex items-center gap-2 mb-2 text-slate-700 dark:text-zinc-300">
              <FileText className="w-4 h-4 text-[#ff5a1f]" />
              <h5 className="text-xs font-bold uppercase tracking-wider">
                Garantovaná shoda s normami EU & ČSN EN
              </h5>
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-3">
              Veškeré dodávané osobní ochranné pracovní pomůcky disponují EU prohlášením o shodě, typovými certifikáty akreditovaných zkušeben a jsou v souladu s Nařízením EP a Rady (EU) 2016/425.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                ČSN EN ISO 20345:2022
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                ČSN EN 388 (4X43D)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                ČSN EN 166 1FT KN
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-[11px] font-mono text-slate-700 dark:text-zinc-300">
                ČSN EN 61340-5-1 (ESD)
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <span className="text-xs text-slate-500 dark:text-zinc-400">
              Připravíme nezávazný vzorkovací set pro vaše provozy do 48 hodin.
            </span>
            <button
              onClick={handleConfigureClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-semibold text-xs transition-colors cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#ff5a1f]/20"
            >
              <span>Nakonfigurovat poptávku pro {industry.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
