'use client';

import { useState, useEffect } from 'react';

export default function SoundEffects() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPreference = localStorage.getItem('soundEnabled');
    setEnabled(savedPreference === 'true');
  }, []);

  useEffect(() => {
    if (!mounted || !enabled) return;

    const playSound = (frequency: number, duration: number) => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        playSound(800, 0.1);
      }
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        playSound(600, 0.05);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('mouseover', handleHover);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseover', handleHover);
    };
  }, [enabled, mounted]);

  const toggleSound = () => {
    const newState = !enabled;
    setEnabled(newState);
    localStorage.setItem('soundEnabled', String(newState));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 left-6 z-50 p-3 bg-dark-secondary/80 backdrop-blur-md border border-dark-tertiary rounded-full hover:border-accent transition-all duration-300 group"
      aria-label="Toggle sound effects"
      title={enabled ? 'Desativar sons' : 'Ativar sons'}
    >
      <div className="relative w-6 h-6">
        {enabled ? (
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </div>
    </button>
  );
}
