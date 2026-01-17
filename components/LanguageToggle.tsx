'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-24 z-30"
    >
      <div className="flex items-center gap-2 bg-dark-secondary/80 backdrop-blur-md border border-dark-tertiary rounded-full p-1 shadow-lg">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'pt'
              ? 'bg-accent text-white shadow-lg shadow-accent/20'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-accent text-white shadow-lg shadow-accent/20'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}
