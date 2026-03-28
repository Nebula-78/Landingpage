import { useState, useEffect, useCallback } from 'react';

/**
 * Manages mobile menu open/close state.
 * Locks body scroll when open and closes on Escape key.
 */
export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open  = useCallback(() => setIsOpen(true),  []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(v => !v), []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  return { isOpen, open, close, toggle };
}
