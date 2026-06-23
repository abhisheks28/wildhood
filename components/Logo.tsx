import React from 'react';

export function Logo({ 
  className = "w-10 h-10", 
  strokeWidth = 2.5 
}: { 
  className?: string, 
  strokeWidth?: number 
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Aperture Ring Outer */}
      <circle 
        cx="100" 
        cy="100" 
        r="92" 
        stroke="currentColor" 
        strokeWidth={strokeWidth * 1.8} 
        fill="none" 
      />
      
      {/* Shutter Blades (Aperture Blades) */}
      <g stroke="currentColor" strokeWidth={strokeWidth} fill="none" opacity="0.9">
        {/* Diagonal straight blade dividers */}
        <line x1="100" y1="8" x2="145" y2="165" />
        <line x1="192" y1="100" x2="35" y2="145" />
        <line x1="100" y1="192" x2="55" y2="35" />
        <line x1="8" y1="100" x2="165" y2="55" />

        {/* Curved blade boundaries for mechanical lens feel */}
        <path d="M 100,8 C 145,20 180,55 192,100" />
        <path d="M 192,100 C 180,145 145,180 100,192" />
        <path d="M 100,192 C 55,180 20,145 8,100" />
        <path d="M 8,100 C 20,55 55,20 100,8" />
      </g>
      
      {/* Central Mountains Range representing Wildhood */}
      <g fill="currentColor">
        {/* Left background Peak */}
        <polygon points="35,145 75,95 115,145" opacity="0.75" />
        
        {/* Right middle Peak */}
        <polygon points="100,145 135,100 170,145" opacity="0.85" />
        
        {/* Center Main Peak */}
        <polygon points="60,145 105,75 150,145" />

        {/* Snowcaps on peaks for high-quality detail (collapses nicely on screen resize) */}
        <polygon points="98,85 105,75 112,85" fill="#ffffff" />
        <polygon points="129,107 135,100 141,107" fill="#ffffff" />
        <polygon points="70,101 75,95 80,101" fill="#ffffff" />
      </g>
    </svg>
  );
}
