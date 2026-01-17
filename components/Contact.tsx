'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-12 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-text-secondary text-xl mb-12 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>

          {/* CTA Principal */}
          <motion.a
            href="https://wa.me/5547992805274"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group inline-flex items-center gap-3 px-12 py-5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 font-semibold text-xl mb-12 relative overflow-hidden"
          >
            <span className="relative z-10">{t.contact.cta}</span>
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://github.com/Gustavosareto"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-dark-secondary/80 backdrop-blur-md text-text-primary border-2 border-dark-tertiary rounded-lg hover:border-accent transition-all duration-300 w-full sm:w-auto font-medium"
            >
              {t.contact.github}
            </motion.a>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-dark-tertiary"
        >
          <p className="text-text-secondary text-sm">
            © 2026 Gustavo Sareto. Todos os direitos reservados.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
