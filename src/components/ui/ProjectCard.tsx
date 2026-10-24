import React, { useState } from 'react';
import type { Project } from '../../data/projects';
import { TechBadge } from './TechBadge';
import { ChevronDown, ChevronUp, ExternalLink, ShieldCheck, Check } from '../Icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div data-scroll-reveal className="card-modern p-5 sm:p-6 transition-all group">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Project Thumbnail with Hover Zoom */}
        <div className="md:col-span-3">
          <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-zinc-950 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Skladem Podbořany</span>
            </div>
          </div>
        </div>

        {/* Project Meta & Description */}
        <div className="md:col-span-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-semibold text-[#ff5a1f]">
              {project.series}
            </span>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <span className="text-xs text-slate-500 dark:text-zinc-400">
              {project.categoryLabel}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ff5a1f] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-zinc-800">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-zinc-300 hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors py-2 px-3.5 rounded-lg bg-slate-100 dark:bg-zinc-800/80 cursor-pointer"
          >
            <span>{isExpanded ? 'Skrýt specifikace' : 'Zobrazit parametry'}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#ff5a1f]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          {project.actionUrl && (
            <a
              href={project.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-[#ff5a1f] hover:text-[#e04b12] py-1 transition-colors"
            >
              <span>Koupit na E-Shopu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Progressive Disclosure: Technical Datasheet */}
      {isExpanded && (
        <div className="mt-5 pt-5 border-t border-slate-100 dark:border-zinc-800 animate-fade-in">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/80 border border-slate-200/80 dark:border-zinc-800/80">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-[#ff5a1f]" />
                <span>Certifikované technické parametry výrobku:</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" />
                <span>Plná shoda s normami EU</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {project.specs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 shadow-2xs"
                >
                  <p className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-0.5">
                    {spec.label}
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-zinc-100">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
