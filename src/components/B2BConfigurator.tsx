import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
} from './Icons';

export const B2BConfigurator: React.FC = () => {
  const [industry, setIndustry] = useState('Automotive & Dodavatelé');
  const [employees, setEmployees] = useState(150);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Vzorkování DYKENO zdarma',
    'Audit BOZP (-28 % spotřeba)',
    'Náhradní plnění v plné výši',
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    note: '',
  });

  const industriesList = [
    'Automotive & Dodavatelé',
    'Strojírenství & Kovovýroba',
    'Logistika & E-commerce',
    'Energetika & Utility',
    'Chemický & Farmaceutický',
    'Potravinářský průmysl',
    'Stavebnictví & Montáže',
  ];

  const servicesList = [
    { id: 'sampling', label: 'Vzorkování DYKENO® zdarma na linkách', tag: 'ZDARMA' },
    { id: 'audit', label: 'Audit BOZP a optimalizace spotřeby (-28 %)', tag: 'ÚSPORA' },
    { id: 'consignment', label: 'Konsignační sklad & výdejní automaty', tag: 'LOGISTIKA' },
    { id: 'replacement', label: 'Uplatnění Náhradního plnění v plné výši', tag: 'ZÁKON OZP' },
    { id: 'edi', label: 'EDI & ERP propojení (SAP, Helios, ABRA)', tag: 'DIGITALIZACE' },
    { id: 'branding', label: 'Zakázkový potisk & výšivka (do 90 °C)', tag: 'BRANDING' },
  ];

  const toggleService = (label: string) => {
    if (selectedServices.includes(label)) {
      setSelectedServices(selectedServices.filter((s) => s !== label));
    } else {
      setSelectedServices([...selectedServices, label]);
    }
  };

  // Dynamic calculations based on employee count
  const estimatedAnnualSpend = employees * 3800; // Average annual PPE per industrial worker
  const estimatedAuditSavings = Math.round(estimatedAnnualSpend * 0.24); // ~24% average savings
  const maxNahradniPlneni = estimatedAnnualSpend;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="konfigurator">
      {/* Editorial Header */}
      <div data-scroll-reveal className="mb-14 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-[#ff5a1f]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Interaktivní konfigurace • KORUS EU</span>
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
          Nakonfigurujte si optimální servis a spočítejte reálné úspory
        </h2>
        <p className="text-base text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
          Během 1 minuty zjistíte odhad ročních úspor při optimalizaci BOZP a potenciál čerpání Náhradního plnění pro váš podnik.
        </p>
      </div>

      <div className="card-modern p-6 sm:p-10 bg-white dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
        {submitted ? (
          <div className="py-16 text-center max-w-lg mx-auto animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Konfigurace byla úspěšně odeslána!
            </h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Děkujeme za vaši poptávku{formData.name ? `, ${formData.name}` : ''}{formData.company ? ` ze společnosti ${formData.company}` : ''}.
              Náš technický konzultant vás bude kontaktovat do 24 hodin s návrhem vzorkovací sady na míru pro {employees} zaměstnanců.
            </p>
            <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-mono text-slate-700 dark:text-zinc-300">
              <span>Evidenční kód poptávky:</span>
              <strong className="text-[#ff5a1f]">KORUS-{Date.now().toString().slice(-6)}</strong>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Industry */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
                  1. Vyberte primární odvětví vašeho závodu
                </label>
                <div className="flex flex-wrap gap-2">
                  {industriesList.map((ind) => (
                    <button
                      type="button"
                      key={ind}
                      onClick={() => setIndustry(ind)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        industry === ind
                          ? 'bg-[#ff5a1f] text-white font-semibold shadow-xs'
                          : 'bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Employee Count Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    2. Počet zaměstnanců v provozech (vyžadující OOPP)
                  </label>
                  <span className="text-base font-extrabold font-mono text-[#ff5a1f]">
                    {employees} zaměstnanců
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1500"
                  step="10"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff5a1f]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500 mt-1">
                  <span>10 (dílna)</span>
                  <span>250 (závod)</span>
                  <span>750 (výroba)</span>
                  <span>1 500+ (koncern)</span>
                </div>
              </div>

              {/* Step 3: Required Solutions */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3">
                  3. Požadovaná systémová řešení KORUS
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {servicesList.map((srv) => {
                    const isSelected = selectedServices.includes(srv.label);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.label)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                          isSelected
                            ? 'border-[#ff5a1f] bg-orange-50/50 dark:bg-orange-950/20 text-slate-900 dark:text-white'
                            : 'border-slate-200 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-900/40 text-slate-600 dark:text-zinc-400 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 uppercase tracking-wider block w-fit mb-1">
                            {srv.tag}
                          </span>
                          <span className="text-xs font-semibold block leading-tight">
                            {srv.label}
                          </span>
                        </div>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 mt-0.5 ${
                          isSelected ? 'bg-[#ff5a1f] border-[#ff5a1f] text-white text-[10px]' : 'border-slate-300 dark:border-zinc-700'
                        }`}>
                          {isSelected ? '✓' : ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact Inputs */}
              <div className="pt-6 border-t border-slate-100 dark:border-zinc-800/80 space-y-4">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                  4. Kontaktní údaje pro zaslání kalkulace & vzorků
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Název společnosti / Závod *"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-[#ff5a1f] text-slate-900 dark:text-white"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Vaše jméno a příjmení *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-[#ff5a1f] text-slate-900 dark:text-white"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Firemní e-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-[#ff5a1f] text-slate-900 dark:text-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Telefonní číslo *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 focus:outline-none focus:border-[#ff5a1f] text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Right Live Summary Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-zinc-900 to-black text-white border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5a1f]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div>
                      <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Odhadovaná bilance
                      </p>
                      <h4 className="text-lg font-bold text-white">
                        {industry}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#ff5a1f] px-2.5 py-1 rounded-full bg-[#ff5a1f]/20">
                      {employees} osob
                    </span>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-zinc-400 mb-1">
                        Odhadovaná roční úspora auditem (-24 %):
                      </div>
                      <div className="text-2xl font-black font-mono text-emerald-400">
                        cca {estimatedAuditSavings.toLocaleString('cs-CZ')} Kč / rok
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">
                        Díky sjednocení katalogu a eliminaci plýtvání
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-zinc-400 mb-1">
                        Potenciál Náhradního plnění (100 %):
                      </div>
                      <div className="text-xl font-bold font-mono text-[#ff5a1f]">
                        až {maxNahradniPlneni.toLocaleString('cs-CZ')} Kč
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">
                        Úspora na povinném odvodu do státního rozpočtu
                      </div>
                    </div>
                  </div>

                  {/* Selected Solutions List */}
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Zvolená řešení ({selectedServices.length}):
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {selectedServices.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-[#ff5a1f]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Odeslat nezávaznou poptávku</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-400 mt-3 font-normal">
                    Bezplatné vzorkování produktů • Nezávazná cenová nabídka do 24 h
                  </p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
