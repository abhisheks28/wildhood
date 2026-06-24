import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'adaptive';
}

export function Logo({ 
  className = "w-10 h-10", 
  variant = 'adaptive' 
}: LogoProps) {
  let imgClass = "w-full h-full object-contain";
  
  if (variant === 'light') {
    imgClass += " brightness-0 invert";
  } else if (variant === 'adaptive') {
    imgClass += " dark:brightness-0 dark:invert";
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src="/logo.png"
        alt="Wildhood Logo"
        className={imgClass}
      />
    </div>
  );
}
