import React from 'react';

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', ...rest }) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white/90 dark:bg-zinc-900/70 backdrop-blur-xs p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#ff5a1f]/35 dark:hover:border-[#ff5a1f]/45 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ff5a1f]/5 transition-all duration-300 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
