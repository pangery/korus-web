import React from 'react';

interface TechBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline';
  dot?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = 'default',
  dot = false,
}) => {
  const variantStyles = {
    default:
      'bg-slate-100 text-slate-700 dark:bg-zinc-800/80 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/50',
    accent:
      'bg-orange-50 text-[#ff5a1f] dark:bg-orange-950/40 dark:text-[#ff7a45] border border-orange-200/80 dark:border-orange-900/40 font-semibold',
    outline:
      'bg-transparent text-slate-600 dark:text-zinc-400 border border-slate-300 dark:border-zinc-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium tracking-tight transition-colors ${variantStyles[variant]}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'accent' ? 'bg-[#ff5a1f]' : 'bg-slate-400 dark:bg-zinc-500'
          }`}
        />
      )}
      <span>{label}</span>
    </span>
  );
};
