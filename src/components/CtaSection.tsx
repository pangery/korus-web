import React from 'react';
import { ArrowRight, Users, Handshake } from './Icons';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors" id="kariera">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl" data-scroll-reveal>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
            Spolupráce & Kariéra
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Rosteme společně
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Kariéra */}
          <div
            className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 p-8 sm:p-10 flex flex-col justify-between transition-all"
            data-scroll-reveal
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/40 flex items-center justify-center text-[#ff5a1f] mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Kariéra v KORUS
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                Staňte se součástí stabilní české společnosti s 25letou tradicí. Hledáme motivované kolegy do obchodního oddělení, logistiky i zákaznické podpory.
              </p>
            </div>

            <div>
              <a
                href="https://www.korus.eu/kariera/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-medium text-xs sm:text-sm transition-colors shadow-xs group"
              >
                <span>Aktuálně volné pozice</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: B2B Partneři */}
          <div
            className="rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 p-8 sm:p-10 flex flex-col justify-between transition-all"
            data-scroll-reveal
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/40 flex items-center justify-center text-[#ff5a1f] mb-6">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                B2B Partnerský program
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                Získejte individuální cenové podmínky, přednostní expedici do 24 hodin, přístup k našemu online B2B portálu a plné uplatnění zákonného náhradního plnění.
              </p>
            </div>

            <div>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
              >
                <span>Nezávazná poptávka spolupráce</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
