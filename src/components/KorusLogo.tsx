import React from 'react';

interface KorusLogoProps {
  theme?: 'dark' | 'light';
  className?: string;
}

export const KorusLogo: React.FC<KorusLogoProps> = ({
  theme,
  className = 'h-8 sm:h-9 w-auto',
}) => {
  // If theme prop is provided, strictly follow it; otherwise fallback to CSS dark mode
  if (theme) {
    return (
      <div className="inline-flex items-center select-none">
        <img
          src={theme === 'dark' ? '/assets/korus-logo-dark.png' : '/assets/korus-logo-light.png'}
          alt="KORUS Safety & Industry"
          className={`${className} object-contain transition-opacity duration-200`}
        />
      </div>
    );
  }

  return (
    <div className="inline-flex items-center select-none">
      <img
        src="/assets/korus-logo-light.png"
        alt="KORUS Safety & Industry"
        className={`${className} object-contain dark:hidden`}
      />
      <img
        src="/assets/korus-logo-dark.png"
        alt="KORUS Safety & Industry"
        className={`${className} object-contain hidden dark:block`}
      />
    </div>
  );
};
