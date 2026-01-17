'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'projects', labelPt: 'Projetos', labelEn: 'Projects' },
    { id: 'skills', labelPt: 'Habilidades', labelEn: 'Skills' },
    { id: 'about', labelPt: 'Sobre', labelEn: 'About' },
    { id: 'contact', labelPt: 'Contato', labelEn: 'Contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Gustavosareto', icon: '→' },
    { name: 'WhatsApp', href: 'https://wa.me/5547992805274', icon: '→' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-secondary/60 border-t border-dark-tertiary/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              <span className="text-accent">G</span>ustavo Sareto
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {language === 'pt' 
                ? 'Desenvolvedor Full Stack criando experiências digitais incríveis com tecnologias modernas.'
                : 'Full Stack Developer creating amazing digital experiences with modern technologies.'}
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/gustavosareto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-lg bg-dark-tertiary/40 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {language === 'pt' ? link.labelPt : link.labelEn}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    {link.name}
                    <span className="text-xs">{link.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-tertiary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Gustavo Sareto. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
          <p className="text-text-secondary/50 text-xs">
            {language === 'pt' ? 'Feito com' : 'Made with'} 
            <span className="text-accent mx-1">♥</span> 
            {language === 'pt' ? 'usando' : 'using'} Next.js + GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
