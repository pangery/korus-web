import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { SearchModal } from './components/SearchModal';
import { PartnersMarquee } from './components/PartnersMarquee';
import { Product3DViewer } from './components/Product3DViewer';
import { B2BConfigurator } from './components/B2BConfigurator';

// Data-driven Section Components
import { Hero } from './components/sections/Hero';
import { BentoGrid } from './components/sections/BentoGrid';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Industries } from './components/sections/Industries';
import { Partners } from './components/sections/Partners';
import { SavingsCalculator } from './components/sections/SavingsCalculator';
import { Timeline } from './components/sections/Timeline';
import { Career } from './components/sections/Career';
import { About } from './components/sections/About';
import { Faq } from './components/sections/Faq';
import { Contact } from './components/sections/Contact';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize smooth inertia scrolling
  useLenis();

  // Apply theme to document
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Global keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0c0d10] text-slate-900 dark:text-zinc-100 transition-colors duration-200 font-sans selection:bg-[#ff5a1f] selection:text-white bg-grid-pattern">
      {/* Top Floating Island Navigation with Search, Language Selector & Hotline */}
      <Navbar
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections with Layered Transitions */}
      <main className="relative">
        {/* Layer 0: Sticky Pinned Hero Section (min-height: 100svh) */}
        <section
          id="hero"
          className="sticky top-0 z-10 w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-slate-50 dark:bg-[#0c0d10]"
        >
          <Hero onOpenBrochure={() => setIsBrochureOpen(true)} />
        </section>

        {/* Layer 1: Layered Content Sheet - Physical sheet sliding smoothly over Hero */}
        <div className="layered-sheet relative z-20 transition-shadow">
          {/* 1. Client Enterprise Logo Ribbon (Toyota, ČEZ, Amazon, Zentiva, etc.) */}
          <PartnersMarquee />

          {/* 2. Asymmetric Bento Grid Overview */}
          <BentoGrid />

          {/* 3. Official 8 Core Services from korus.eu */}
          <Services />

          {/* 4. Inženýrská anatomie produktů (DYKENO® Carbon Shield) */}
          <Product3DViewer />

          {/* 5. Editorial Product Showcase & Catalog (DYKENO Divisions) */}
          <Projects />

          {/* 6. Complete Industry Matrix with Deep-Dive Norms Modal (10 Industrial Sectors) */}
          <Industries />

          {/* 7. Official B2B Partner Program & Full Náhradní plnění */}
          <Partners />

          {/* 8. Interactive B2B Poptávkový Konfigurátor Úspor a Vzorkování */}
          <B2BConfigurator />

          {/* 9. Interactive B2B Savings Calculator */}
          <SavingsCalculator />

          {/* 10. 25-Year Vertical Timeline (1999–2024 Milestones) */}
          <Timeline />

          {/* 11. Career & Team Section (Authentic Stories & Benefits) */}
          <Career />

          {/* 12. Philosophy, Core Values, International Scope & EU Digital Project */}
          <About />

          {/* 13. Frequently Asked Questions (FAQ) */}
          <Faq />

          {/* 14. Direct B2B Contact, Logistics Hub Podbořany & Billing Info */}
          <Contact />
        </div>
      </main>

      {/* Corporate Footer */}
      <Footer onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* Presentation Brochure Modal */}
      <DownloadModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Quick Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

export default App;
