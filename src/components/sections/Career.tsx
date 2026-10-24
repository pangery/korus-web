import React from 'react';
import { CheckCircle2 } from '../Icons';

export const Career: React.FC = () => {
  const testimonials = [
    {
      name: 'Jan K.',
      role: 'Vedoucí technického oddělení • V KORUS od roku 2012',
      quote:
        'V KORUSu vyvíjíme řešení pro největší automobilky a průmyslové závody v republice. Na naší práci je skvělé, že každé technické vylepšení materiálů nebo nový model obuvi reálně chrání zdraví konkrétních lidí na dílnách a směnách.',
    },
    {
      name: 'Lucie M.',
      role: 'Zákaznický B2B servis • Centrála Podbořany',
      quote:
        'I když dodáváme do stovek velkých výrobních závodů po celé Evropě, uvnitř firmy si držíme lidský a otevřený přístup. Všichni v Podbořanech táhneme za jeden provaz a na vedení se můžete s čímkoliv obrátit.',
    },
  ];

  const benefits = [
    {
      title: '25 let stability na trhu',
      desc: 'Zázemí zavedené české společnosti se stabilními zakázkami a mezinárodním exportem do 8 zemí Evropy.',
    },
    {
      title: 'Obědy s příspěvkem až do firmy',
      desc: 'Teplé obědy doslova pod nos s velkorysým příspěvkem zaměstnavatele. Žádný stres s vařením na směny.',
    },
    {
      title: 'Každý rok +1 den dovolené navíc',
      desc: 'Věrnost u nás opravdu oceňujeme. Za každý odpracovaný rok získáváte další den placeného volna navíc.',
    },
    {
      title: 'Moderní pracoviště & Volné víkendy',
      desc: 'Čisté, klimatizované prostředí s digitálními systémy, přátelský kolektiv a férové finanční ohodnocení.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="kariera">
      {/* Editorial Header */}
      <div data-scroll-reveal className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-3">
          Kariéra & Tým • KORUS EU
        </p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl leading-[1.12] mb-4">
          Doporučení jsou nejlepší vizitka. Přidejte se k našemu stabilnímu týmu.
        </h2>
        <p className="text-base text-slate-600 dark:text-zinc-400 font-normal max-w-2xl leading-relaxed">
          Klademe důraz na spokojenost zaměstnanců. Důkazem jsou kolegové, z nichž někteří jsou u nás od samotného založení v roce 1999.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            data-scroll-reveal
            data-scroll-delay={((idx + 1) * 100).toString()}
            className="card-modern p-6 sm:p-8 bg-slate-50/70 dark:bg-zinc-900/60 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff5a1f]/10 text-[#ff5a1f] flex items-center justify-center font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    {t.role}
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic leading-relaxed">
                „{t.quote}“
              </blockquote>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, idx) => (
          <div
            key={b.title}
            data-scroll-reveal
            data-scroll-delay={((idx % 4) * 80 + 50).toString()}
            className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                {b.title}
              </h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
              {b.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Career CTA */}
      <div data-scroll-reveal data-scroll-delay="200" className="mt-8 p-6 rounded-2xl bg-orange-50/60 dark:bg-orange-950/20 border border-[#ff5a1f]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            Máte zájem o práci ve stabilní české společnosti?
          </h4>
          <p className="text-xs text-slate-600 dark:text-zinc-400">
            Zašlete svůj životopis na kariera@korus.eu nebo nám zavolejte.
          </p>
        </div>
        <a
          href="mailto:kariera@korus.eu"
          className="px-5 py-2.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white text-xs font-semibold shrink-0 transition-colors"
        >
          Napsat personalistovi
        </a>
      </div>
    </section>
  );
};
