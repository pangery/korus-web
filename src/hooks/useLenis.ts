import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    // 1. Initialize Lenis instance with smooth inertia settings
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    (window as any).__lenis = lenis;

    // 2. Continuous requestAnimationFrame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 3. Update CSS property --hero-scroll (0.0000 to 1.0000) for hero depth scale & fade
    const updateHeroScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const vh = window.innerHeight || 800;
      const progress = Math.min(1, Math.max(0, scrollY / vh));
      document.documentElement.style.setProperty('--hero-scroll', progress.toFixed(4));
    };

    lenis.on('scroll', updateHeroScroll);
    updateHeroScroll();

    // 4. Scroll reveal observer with bidirectional support
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (entry.boundingClientRect.top > (window.innerHeight || 800)) {
          // Scrolled back up past the element: reset so it reveals smoothly again
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    const observeElements = () => {
      const revealElements = document.querySelectorAll('[data-scroll-reveal]');
      revealElements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const timeoutId = setTimeout(observeElements, 400);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
      delete (window as any).__lenis;
    };
  }, []);
}

