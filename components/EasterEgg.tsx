'use client';

import { useEffect } from 'react';

export default function EasterEgg() {
  useEffect(() => {
    // Easter egg no console
    const styles = {
      title: 'color: #3B82F6; font-size: 24px; font-weight: bold;',
      message: 'color: #EDEDED; font-size: 14px;',
      code: 'color: #A1A1A1; font-size: 12px; font-family: monospace;',
    };

    console.log('%c👋 Olá, curioso(a)!', styles.title);
    console.log(
      '%cVejo que você gosta de explorar o código. Eu também! 🚀',
      styles.message
    );
    console.log(
      '%c\nEste portfólio foi construído com:\n• Next.js 16\n• TypeScript\n• Tailwind CSS\n• GSAP\n• WebGL (Galaxy)\n\nImpressione-se? Entre em contato! 💼',
      styles.message
    );
    console.log(
      '%c\n// Easter egg encontrado! 🥚\n// Pressione Alt + Shift + D para modo debug',
      styles.code
    );

    // Easter egg com teclas
    let keys: string[] = [];
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Debug mode
      if (e.altKey && e.shiftKey && e.key === 'D') {
        document.body.classList.toggle('debug-mode');
        console.log('%c🐛 Debug mode toggled!', 'color: #3B82F6; font-size: 16px;');
      }

      // Konami code easter egg
      keys.push(e.key);
      keys = keys.slice(-secretCode.length);
      
      if (keys.join(',') === secretCode.join(',')) {
        console.log('%c🎮 Konami Code Ativado!', 'color: #3B82F6; font-size: 20px; font-weight: bold;');
        document.body.style.animation = 'rainbow 3s infinite';
        setTimeout(() => {
          document.body.style.animation = '';
        }, 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
}
