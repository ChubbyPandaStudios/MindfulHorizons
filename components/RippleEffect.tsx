'use client';

import { useEffect } from 'react';

export default function RippleEffect() {
  useEffect(() => {
    const createRipple = (e: MouseEvent) => {
      const button = (e.target as HTMLElement).closest('.ripple-effect');
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Set size to cover the button
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.marginLeft = `-${size / 2}px`;
      ripple.style.marginTop = `-${size / 2}px`;

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    window.addEventListener('mousedown', createRipple);
    return () => window.removeEventListener('mousedown', createRipple);
  }, []);

  return null;
}
