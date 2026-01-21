'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextType from './TextType';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(nameRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, '-=0.5')
        .from(buttonsRef.current?.children || [], {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 relative"
    >
      {/* Content */}
      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Greeting */}
        <p className="text-accent text-base md:text-lg font-medium mb-3 tracking-wide">
          {t.hero.greeting}
        </p>

        <h1
          ref={nameRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 md:mb-5 tracking-tight"
        >
          <TextType
            text="Gustavo Sareto"
            as="span"
            typingSpeed={100}
            initialDelay={500}
            loop={false}
            showCursor={false}
            className="inline-block"
          />
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-text-secondary mb-3 md:mb-4 tracking-wide font-medium"
        >
          {t.hero.role}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">2+</div>
            <div className="text-sm text-text-secondary">{t.about.experience.split(' ')[0]} {t.about.experience.split(' ').slice(1).join(' ')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1">20+</div>
            <div className="text-sm text-text-secondary">{t.about.projectsCount.split(' ')[0]} {t.about.projectsCount.split(' ').slice(1).join(' ')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-1">15+</div>
            <div className="text-sm text-text-secondary">{t.about.clients.split(' ')[0]} {t.about.clients.split(' ').slice(1).join(' ')}</div>
          </div>
        </div>

        <p className="text-sm md:text-base text-text-secondary/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          {t.hero.description}
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4">
          <a
            href="https://wa.me/5547992805274"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 md:px-8 py-3 md:py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 w-full sm:w-auto font-semibold text-base md:text-lg relative overflow-hidden inline-flex items-center justify-center"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 md:px-8 py-3 md:py-4 bg-dark-secondary/80 backdrop-blur-sm text-text-primary border-2 border-dark-tertiary rounded-lg hover:border-accent transition-all duration-300 hover:scale-105 w-full sm:w-auto font-semibold text-base md:text-lg"
          >
            {t.hero.viewProjects}
          </button>
        </div>
      </div>
    </section>
  );
}
