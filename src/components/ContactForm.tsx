import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from './Icons';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'products',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40" id="kontakt">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Narrative & Direct Info */}
          <div className="lg:col-span-5" data-scroll-reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
              Konzultace & Poptávky
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Spojte se s našimi specialisty
            </h2>
            <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-8 font-normal">
              Ať už potřebujete zajistit nezávazné vzorkování přímo ve vašem provozu, cenovou kalkulaci nebo nastavit B2B portál pro schvalování objednávek, jsme vám plně k dispozici.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+420411135111"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#ff5a1f]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Centrální odbyt & zákaznická linka</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">+420 411 135 111</p>
                </div>
              </a>

              <a
                href="mailto:info@korus.eu"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#ff5a1f]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">E-mail pro obecné dotazy a nabídky</p>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">info@korus.eu</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900">
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-slate-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Centrála & Logistické centrum</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">KORUS EU a.s. • Mostecká 24, Most</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-7" data-scroll-reveal>
            <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/60 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Děkujeme za vaši poptávku
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto mb-6">
                    Vaši zprávu jsme v pořádku přijali. Náš obchodní zástupce vás bude kontaktovat nejpozději do 24 hodin s návrhem řešení.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        inquiryType: 'products',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-white text-xs font-semibold transition-colors"
                  >
                    Odeslat další dotaz
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Nezávazná firemní poptávka
                  </h3>

                  {/* Inquiry Type Radio / Buttons */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-2">
                      Druh poptávky
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'products', label: 'Dodávka OOPP & Obuvi DYKENO®' },
                        { id: 'sampling', label: 'Testování vzorků ve výrobě' },
                        { id: 'portal', label: 'B2B portál & EDI napojení' },
                        { id: 'other', label: 'Konzultace BOZP & Náhradní plnění' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, inquiryType: item.id })}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            formData.inquiryType === item.id
                              ? 'border-[#ff5a1f] bg-orange-50/50 dark:bg-orange-950/20 text-slate-900 dark:text-white font-medium'
                              : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-600 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Jméno a příjmení *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ing. Petr Novák"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Název společnosti *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Firma a.s."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Firemní e-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="novak@firma.cz"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                        Telefonní kontakt
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+420 777 000 000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-zinc-300 mb-1.5">
                      Specifikace poptávky / Poznámka
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Máme zájem o dodávku bezpečnostní obuvi S3 a montérek pro cca 80 pracovníků na dílně..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#ff5a1f] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400">
                      Vaše data jsou v bezpečí a slouží pouze pro zpracování nabídky.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-lg bg-[#ff5a1f] hover:bg-[#e04b12] text-white font-medium text-xs sm:text-sm transition-colors shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? 'Odesílám...' : 'Odeslat poptávku'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
