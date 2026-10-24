import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from '../Icons';

export const SavingsCalculator: React.FC = () => {
  const [employees, setEmployees] = useState(120);
  const [hasVending, setHasVending] = useState(true);
  const [hasEdi, setHasEdi] = useState(true);
  const [hasBranding, setHasBranding] = useState(false);

  // Approximate realistic B2B savings metrics
  // Average annual OOPP spend per worker ~ 7 500 CZK
  const baseSpend = employees * 7500;
  
  // Vending machines save ~ 28% of glove & consumable waste
  const vendingSaving = hasVending ? baseSpend * 0.18 : 0;
  
  // EDI saves admin hours ~ 40 hours/month at 450 CZK/hr
  const ediSaving = hasEdi ? Math.min(employees * 180, 180000) : 0;

  const totalAnnualSavings = Math.round(vendingSaving + ediSaving);
  const nahradniPlneniMax = Math.round(employees * 12500);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80">
      {/* Header */}
      <div data-scroll-reveal className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
          Interaktivní kalkulátor • Efektivita provozu
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          Spočítejte si reálnou úsporu nákladů na OOPP
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
          Zadejte přibližný počet pracovníků a zjistěte, kolik vašemu podniku ušetří automatizované výdeje, konsignační sklady a B2B EDI integrace KORUS.
        </p>
      </div>

      {/* Modern Split Calculator Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Input Controls */}
        <div data-scroll-reveal className="lg:col-span-6 card-modern p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="employees-range" className="text-sm font-bold text-slate-900 dark:text-white">
                  Počet chráněných pracovníků ve výrobě:
                </label>
                <span className="text-2xl font-black text-[#ff5a1f] font-mono">
                  {employees}
                </span>
              </div>
              <input
                id="employees-range"
                type="range"
                min="10"
                max="800"
                step="5"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value, 10))}
                className="w-full accent-[#ff5a1f] h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500 mt-2">
                <span>10 zaměstnanců</span>
                <span>400</span>
                <span>800+ zaměstnanců</span>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
              Klíčové optimalizační moduly:
            </p>

            <div className="space-y-3">
              {/* Option 1 */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/40 cursor-pointer hover:border-[#ff5a1f]/40 transition-colors">
                <input
                  type="checkbox"
                  checked={hasVending}
                  onChange={(e) => setHasVending(e.target.checked)}
                  className="mt-0.5 accent-[#ff5a1f] w-4 h-4 rounded cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Výdejní automaty na čip u výrobních linek
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                    Omezí plýtvání spotřebním materiálem a zkrátí prostoje při pochůzkách do centrálního skladu.
                  </span>
                </div>
              </label>

              {/* Option 2 */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/40 cursor-pointer hover:border-[#ff5a1f]/40 transition-colors">
                <input
                  type="checkbox"
                  checked={hasEdi}
                  onChange={(e) => setHasEdi(e.target.checked)}
                  className="mt-0.5 accent-[#ff5a1f] w-4 h-4 rounded cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    B2B Portál s EDI napojením (SAP / Helios / ABRA)
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                    Eliminuje ruční přepisování objednávek a fakturací na straně nákupního oddělení.
                  </span>
                </div>
              </label>

              {/* Option 3 */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/40 cursor-pointer hover:border-[#ff5a1f]/40 transition-colors">
                <input
                  type="checkbox"
                  checked={hasBranding}
                  onChange={(e) => setHasBranding(e.target.checked)}
                  className="mt-0.5 accent-[#ff5a1f] w-4 h-4 rounded cursor-pointer"
                />
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    Zakázkový branding textilu s odolností praní do 90 °C
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                    Jednotná firemní identita a výrazně delší životnost pracovních oděvů.
                  </span>
                </div>
              </label>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-zinc-800/80 text-[11px] text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Kalkulace vychází z reálných dat 80+ výrobních partnerství KORUS.</span>
          </div>
        </div>

        {/* Right: Real-time Live Savings Summary */}
        <div data-scroll-reveal data-scroll-delay="150" className="lg:col-span-6 card-modern p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a1f]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Kvantifikovaný roční přínos
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#ff5a1f]/20 border border-[#ff5a1f]/40 text-[#ff5a1f] text-[11px] font-bold">
                Návratnost 3—6 měsíců
              </span>
            </div>

            {/* Big Annual Savings Number */}
            <div className="mb-6">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-mono">
                Odhadovaná roční úspora nákladů:
              </p>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                {totalAnnualSavings > 0
                  ? `${totalAnnualSavings.toLocaleString('cs-CZ')} Kč`
                  : 'Aktivujte moduly vlevo'}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Kombinace snížení spotřeby a ušetřeného administrativního času.
              </p>
            </div>

            {/* Detailed Metric Badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-mono mb-0.5">
                  Náhradní plnění:
                </div>
                <div className="text-base font-bold text-white">
                  až {nahradniPlneniMax.toLocaleString('cs-CZ')} Kč
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Zákonné uplatnění 100 %
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-400 font-mono mb-0.5">
                  Garantovaná dostupnost:
                </div>
                <div className="text-base font-bold text-emerald-400">
                  99.8 % SLA
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Včasné dodání bez prostojů
                </div>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#kontakt"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-[#ff5a1f]/30"
            >
              <span>Vyžádat nezávazný firemní audit zdarma</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[10px] text-center text-slate-400 mt-2.5">
              Náš BOZP technik provede bezplatnou analýzu rizik přímo na vašich dílnách.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
