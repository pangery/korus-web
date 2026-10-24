import React, { useState, useMemo } from 'react';
import { projectsData } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Všechny produkty' },
    { id: 'footwear', label: 'Bezpečnostní obuv' },
    { id: 'clothing', label: 'Pracovní oděvy' },
    { id: 'gloves', label: 'Rukavice' },
    { id: 'head', label: 'Zrak & Hlava' },
    { id: 'services', label: 'B2B Služby' },
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory = activeFilter === 'all' || p.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.series.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.specs.some((s) => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-zinc-800/80" id="katalog">
      {/* Editorial Header */}
      <div data-scroll-reveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#ff5a1f] mb-2">
            Katalog produktů & certifikovaných řešení
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Vybrané produkty KORUS & DYKENO®
          </h2>
        </div>

        {/* Live Counter Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
            Zobrazeno {filteredProjects.length} z {projectsData.length} položek
          </span>
        </div>
      </div>

      {/* Modern Filter Toolbar: Category Chips + Search Bar */}
      <div data-scroll-reveal data-scroll-delay="100" className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs font-semibold'
                  : 'bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-zinc-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative min-w-[240px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hledat model, normu (S3, ESD)..."
            className="w-full pl-3.5 pr-8 py-1.5 rounded-xl text-xs bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#ff5a1f] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 text-xs"
              aria-label="Vymazat hledání"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Projects List with Progressive Disclosure */}
      <div className="space-y-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="text-center py-12 card-modern p-8">
            <p className="text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1">
              Žádný produkt neodpovídá hledanému výrazu „{searchQuery}“.
            </p>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mb-4">
              Zkuste zadat jinou normu (např. S3S, ESD, kevlar) nebo vyresetujte filtr.
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-zinc-800 text-xs font-semibold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
            >
              Resetovat filtry
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
