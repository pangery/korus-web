import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  Sun,
  Moon,
  Download,
  Menu,
  X,
  Search,
  Globe,
  ChevronDown,
  ArrowUpRight,
} from './Icons';
import { KorusLogo } from './KorusLogo';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenSearch: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const LANGUAGES = [
  { code: 'CZ', label: 'Čeština' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'SK', label: 'Slovenčina' },
  { code: 'PL', label: 'Polski' },
  { code: 'HU', label: 'Magyar' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrochure,
  onOpenSearch,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [currentLang, setCurrentLang] = useState('CZ');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Core primary links (compact & high-intent)
  const primaryLinks = [
    { name: 'Přehled', href: '#bento-prehled' },
    { name: 'Služby', href: '#sluzby' },
    { name: 'Produkty', href: '#katalog' },
    { name: 'Odvětví', href: '#odvetvi' },
    { name: 'Pro partnery', href: '#partneri' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  // Secondary sub-links housed elegantly under "Více"
  const secondaryLinks = [
    { name: 'Anatomie produktů DYKENO®', desc: 'Interaktivní rozbor materiálů a certifikace', href: '#dykeno-showcase' },
    { name: 'B2B Konfigurátor', desc: 'Kalkulace úspor & vzorkování', href: '#konfigurator' },
    { name: 'Časté dotazy (FAQ)', desc: 'Náhradní plnění, EDI a konsignace', href: '#faq' },
    { name: 'Kariéra & Tým', desc: 'Reference a benefity zaměstnanců', href: '#kariera' },
    { name: '25 let historie', desc: 'Milníky a tradice od roku 1999', href: '#casova-osa' },
    { name: 'O společnosti', desc: 'Vize, certifikace & EU digitalizace', href: '#about' },
  ];

  // All sections for mobile drawer & scrollspy
  const allSections = [
    { name: 'Přehled', href: '#bento-prehled' },
    { name: 'Služby KORUS', href: '#sluzby' },
    { name: 'Anatomie produktů DYKENO®', href: '#dykeno-showcase' },
    { name: 'Katalog produktů', href: '#katalog' },
    { name: 'Průmyslová odvětví', href: '#odvetvi' },
    { name: 'B2B Partnerství & Náhradní plnění', href: '#partneri' },
    { name: 'B2B Konfigurátor úspor', href: '#konfigurator' },
    { name: 'Kariéra v KORUS', href: '#kariera' },
    { name: '25 let historie', href: '#casova-osa' },
    { name: 'O společnosti & EU projekt', href: '#about' },
    { name: 'Často kladené otázky (FAQ)', href: '#faq' },
    { name: 'Kontakt & Logistické centrum', href: '#kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      if (scrollY < 180) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Dynamic scrollspy via Intersection Observer
    const sectionIds = [
      'bento-prehled',
      'sluzby',
      'dykeno-showcase',
      'katalog',
      'odvetvi',
      'partneri',
      'konfigurator',
      'kariera',
      'casova-osa',
      'about',
      'faq',
      'kontakt',
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Close dropdowns on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreDropdownOpen(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);

    if (href === '#' || href === '#hero') {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(0, { duration: 1.1 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection('');
      history.pushState(null, '', ' ');
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }

      history.pushState(null, '', href);
      setActiveSection(href);
    }
  };

  const isMoreActive = ['#dykeno-showcase', '#konfigurator', '#faq', '#kariera', '#casova-osa', '#about'].includes(activeSection);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-2 sm:pt-3 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        {/* Floating Modern Island Dock */}
        <div
          className={`relative rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/92 dark:bg-[#0f1116]/92 backdrop-blur-2xl shadow-xl shadow-black/5 dark:shadow-black/50 border border-slate-200/90 dark:border-white/10 px-3.5 sm:px-5 py-2 sm:py-2.5'
              : 'bg-white/75 dark:bg-[#0f1116]/75 backdrop-blur-xl shadow-md shadow-black/[0.03] dark:shadow-black/20 border border-slate-200/60 dark:border-white/[0.06] px-3.5 sm:px-5 py-2.5 sm:py-3'
          }`}
        >
          {/* Subtle Reading Progress Bar pinned inside the floating dock */}
          <div className="absolute bottom-0 left-4 right-4 h-[2px] overflow-hidden rounded-full pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#ff5a1f] via-amber-400 to-[#ff5a1f] transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            {/* Left Brand Area */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, '#')}
                className="flex items-center gap-2 group transition-opacity hover:opacity-90 cursor-pointer"
                aria-label="KORUS Safety & Industry Domů"
              >
                <KorusLogo theme={theme} className="h-6 sm:h-7 w-auto" />
              </a>

              {/* Discreet 25-Year Badge (visible on mid-to-large desktops) */}
              <div className="hidden 2xl:flex items-center gap-1.5 pl-3 border-l border-slate-200 dark:border-zinc-800 text-[10px] font-mono font-medium text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>25 let • Od roku 1999</span>
              </div>
            </div>

            {/* Center Desktop Navigation Pill (Curated & Balanced, Fits on Any Screen) */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/70 dark:bg-zinc-900/60 p-1 rounded-full border border-slate-200/60 dark:border-white/[0.06] backdrop-blur-sm shrink-0">
              {primaryLinks.slice(0, 5).map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white dark:bg-zinc-800 text-[#ff5a1f] font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* "Více" Dropdown for Secondary Sections */}
              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isMoreActive
                      ? 'bg-white dark:bg-zinc-800 text-[#ff5a1f] font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-800/50'
                  }`}
                  aria-expanded={moreDropdownOpen}
                >
                  <span>Více</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      moreDropdownOpen ? 'rotate-180 text-[#ff5a1f]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {moreDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-2 bg-white dark:bg-[#14161b] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl z-50 animate-slide-down">
                    <div className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 border-b border-slate-100 dark:border-zinc-800/80 mb-1">
                      Další sekce
                    </div>
                    {secondaryLinks.map((sec) => (
                      <a
                        key={sec.name}
                        href={sec.href}
                        onClick={(e) => handleNavClick(e, sec.href)}
                        className={`flex flex-col p-2.5 rounded-xl transition-colors cursor-pointer ${
                          activeSection === sec.href
                            ? 'bg-orange-50/80 dark:bg-orange-950/30 text-[#ff5a1f]'
                            : 'hover:bg-slate-50 dark:hover:bg-zinc-800/70 text-slate-700 dark:text-zinc-200'
                        }`}
                      >
                        <span className="text-xs font-bold leading-tight flex items-center justify-between">
                          <span>{sec.name}</span>
                          <span className="text-slate-400 text-[10px]">→</span>
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal mt-0.5">
                          {sec.desc}
                        </span>
                      </a>
                    ))}

                    <div className="pt-1.5 mt-1 border-t border-slate-100 dark:border-zinc-800/80">
                      <button
                        onClick={() => {
                          setMoreDropdownOpen(false);
                          onOpenBrochure();
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl text-xs font-semibold text-[#ff5a1f] hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Download className="w-3.5 h-3.5" />
                          <span>Stáhnout prezentaci (PDF)</span>
                        </span>
                        <span className="text-[10px] font-mono">15 MB</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <a
                href="#kontakt"
                onClick={(e) => handleNavClick(e, '#kontakt')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === '#kontakt'
                    ? 'bg-white dark:bg-zinc-800 text-[#ff5a1f] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-white/60 dark:hover:bg-zinc-800/50'
                }`}
              >
                Kontakt
              </a>
            </nav>

            {/* Right Action Bar (Compact, Unified & Never Overflows) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Quick Search Trigger */}
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 hover:border-[#ff5a1f]/40 transition-all cursor-pointer"
                title="Hledat na webu (⌘K / Ctrl+K)"
                aria-label="Otevřít vyhledávání"
              >
                <Search className="w-3.5 h-3.5 text-[#ff5a1f]" />
                <span className="hidden md:inline text-[11px]">Hledat</span>
                <kbd className="hidden sm:inline-block text-[9px] font-mono px-1 py-0.2 rounded bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Direct Hotline Popover Toggle */}
              <div className="relative" ref={phoneRef}>
                <button
                  onClick={() => setPhoneOpen(!phoneOpen)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 hover:text-[#ff5a1f] dark:text-zinc-300 dark:hover:text-[#ff5a1f] bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 transition-colors cursor-pointer"
                  title="Zákaznická linka KORUS"
                  aria-label="Telefonní kontakt"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </button>

                {phoneOpen && (
                  <div className="absolute right-0 mt-2 w-64 p-3.5 bg-white dark:bg-[#14161b] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-2xl z-50 animate-slide-down">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Po–Pá 07:00–16:30</span>
                    </div>
                    <a
                      href="tel:+420411135111"
                      className="text-sm font-extrabold text-slate-900 dark:text-white hover:text-[#ff5a1f] transition-colors block mb-1"
                    >
                      +420 411 135 111
                    </a>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-tight">
                      Osobní technický konzultant a operativní zákaznický servis.
                    </p>
                    <a
                      href="mailto:info@korus.eu"
                      className="mt-2.5 pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-[#ff5a1f] font-semibold"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>info@korus.eu</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Language Selector Dropdown */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 transition-colors cursor-pointer"
                  aria-label="Změnit jazyk"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
                  <span className="text-[11px]">{currentLang}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-[#14161b] rounded-xl border border-slate-200 dark:border-zinc-800 shadow-xl py-1.5 z-50 animate-slide-down">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setCurrentLang(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer ${
                          currentLang === l.code
                            ? 'text-[#ff5a1f] font-bold bg-orange-50/50 dark:bg-orange-950/20'
                            : 'text-slate-700 dark:text-zinc-300'
                        }`}
                      >
                        <span>{l.label}</span>
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {l.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white border border-slate-200/80 dark:border-zinc-700/60 bg-slate-100 dark:bg-zinc-800/60 transition-colors cursor-pointer"
                aria-label="Přepnout motiv vzhledu"
                title={theme === 'dark' ? 'Přepnout na světlý motiv' : 'Přepnout na tmavý motiv'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                )}
              </button>

              {/* Primary High-Impact CTA: E-Shop B2B */}
              <a
                href="https://www.korus-eshop.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#ff5a1f] hover:bg-[#e04b12] text-white text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md hover:shadow-[#ff5a1f]/20 cursor-pointer"
              >
                <span>E-Shop B2B</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-xl text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-zinc-700/60 bg-slate-100 dark:bg-zinc-800/60 cursor-pointer"
                aria-label="Otevřít navigaci"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 dark:bg-[#0f1116]/95 backdrop-blur-2xl rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 shadow-2xl animate-slide-down pointer-events-auto max-h-[85vh] overflow-y-auto">
          {/* Quick Search inside Mobile Menu */}
          <div className="mb-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-medium text-slate-600 dark:text-zinc-300"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#ff5a1f]" />
                <span>Hledat v produktech, normách, službách...</span>
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Navigation Links Grid */}
          <div className="flex flex-col gap-1.5">
            {allSections.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-orange-50 dark:bg-orange-950/30 text-[#ff5a1f] font-bold'
                      : 'text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5a1f]" />
                  ) : (
                    <span className="text-slate-400 text-xs">→</span>
                  )}
                </a>
              );
            })}

            {/* Quick Actions in Mobile Drawer */}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2.5">
              <a
                href="https://www.korus-eshop.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[#ff5a1f] text-white text-xs font-bold shadow-sm"
              >
                <span>Vstoupit do B2B E-Shopu (15 000+ položek)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+420411135111"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-medium text-slate-700 dark:text-zinc-300"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>Zavolat</span>
                </a>
                <a
                  href="mailto:info@korus.eu"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-medium text-slate-700 dark:text-zinc-300"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ff5a1f]" />
                  <span>E-mail</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#ff5a1f]" />
                <span>Stáhnout prezentaci (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
