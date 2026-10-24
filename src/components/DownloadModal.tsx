import React, { useState } from 'react';
import { Download, FileText, Check, X, ArrowRight } from './Icons';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const files = [
    {
      id: 'profile',
      title: 'Firemní profil KORUS EU a.s.',
      size: '4.8 MB • PDF',
      desc: 'Kompletní představení společnosti, hodnot, logistických center a B2B služeb.',
    },
    {
      id: 'dykeno',
      title: 'Katalog produktů DYKENO 2026',
      size: '12.4 MB • PDF',
      desc: 'Přehled řad Work & Safety, Tech a Premium včetně podrobných technických specifikací.',
    },
    {
      id: 'industry',
      title: 'Ochranné prostředky napříč odvětvími',
      size: '6.1 MB • PDF',
      desc: 'Doporučené BOZP sady pro automotive, stavebnictví, chemii i strojírenství.',
    },
  ];

  const handleDownload = (id: string) => {
    setDownloadedItem(id);
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = 'https://www.korus.eu/brozura/';
      a.target = '_blank';
      a.click();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-xl w-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
          aria-label="Zavřít"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-1">
          Oficiální materiály
        </p>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          Prezentace & Katalogy KORUS
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
          Získejte okamžitý přístup k aktuálním brožurám, certifikacím a katalogu prémiových produktů DYKENO®.
        </p>

        {/* Files list */}
        <div className="space-y-3 mb-6">
          {files.map((file) => (
            <div
              key={file.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#ff5a1f] shrink-0 mt-0.5">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{file.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mb-1">{file.desc}</p>
                  <span className="text-[11px] text-slate-400 dark:text-zinc-500 font-mono">{file.size}</span>
                </div>
              </div>

              <button
                onClick={() => handleDownload(file.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0 ${
                  downloadedItem === file.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#ff5a1f] hover:bg-[#e04b12] text-white shadow-xs'
                }`}
              >
                {downloadedItem === file.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Staženo</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Stáhnout</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
          <span>Potřebujete tištěný vzorník nebo katalog?</span>
          <a
            href="mailto:info@korus.eu"
            className="text-slate-900 dark:text-white hover:text-[#ff5a1f] font-medium flex items-center gap-1"
          >
            <span>Napište nám</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
