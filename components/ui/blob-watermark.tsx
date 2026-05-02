'use client';

import React from 'react';

interface BlobWatermarkProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export function BlobWatermark({ className = '', color = '#5A8D73', opacity = 0.05 }: BlobWatermarkProps) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,77.3,-43.8C85.1,-30.3,89.3,-15.1,88.4,-0.5C87.5,14,81.5,28,73.4,41.1C65.3,54.1,55.1,66.1,42.2,74.1C29.3,82.1,13.6,86, -1.9,89.3C-17.5,92.5,-35,95.1,-49.3,88.3C-63.6,81.4,-74.7,65.2,-81.9,48.9C-89.1,32.6,-92.4,16.3,-91.2,0.7C-90,-14.9,-84.3,-29.8,-75.4,-42.9C-66.5,-56.1,-54.3,-67.4,-40.5,-74.4C-26.6,-81.4,-11.1,-84.1,3.4,-90C17.9,-95.9,31.3,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
