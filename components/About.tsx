'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax em múltiplas camadas
      gsap.to(layer1Ref.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(layer2Ref.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to(layer3Ref.current, {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Animação do texto com scroll reveal
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-16 px-4 md:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div ref={textRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-5 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-text-secondary/70 mb-4 md:mb-6 text-base md:text-lg">
              {t.about.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-dark-tertiary/30 rounded-lg backdrop-blur-sm border border-dark-tertiary">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{(t.about as any).stat1Number}</div>
                <div className="text-[10px] md:text-xs text-text-secondary">{(t.about as any).stat1Label}</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-dark-tertiary/30 rounded-lg backdrop-blur-sm border border-dark-tertiary">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{(t.about as any).stat2Number}</div>
                <div className="text-[10px] md:text-xs text-text-secondary">{(t.about as any).stat2Label}</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-dark-tertiary/30 rounded-lg backdrop-blur-sm border border-dark-tertiary">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{(t.about as any).stat3Number}</div>
                <div className="text-[10px] md:text-xs text-text-secondary">{(t.about as any).stat3Label}</div>
              </div>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                {t.about.description}
              </p>
            </div>
          </div>

          {/* Visual com parallax em camadas */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            {/* Layer 3 - Fundo */}
            <div
              ref={layer3Ref}
              className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-3xl blur-2xl"
            />

            {/* Layer 2 - Meio */}
            <div
              ref={layer2Ref}
              className="absolute inset-4 bg-dark-secondary/60 backdrop-blur-sm border border-dark-tertiary rounded-2xl"
            />

            {/* Layer 1 - Frente */}
            <div
              ref={layer1Ref}
              className="absolute inset-8 border border-accent/20 rounded-xl overflow-hidden shadow-2xl shadow-accent/10 group"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/projects/rosto.webp"
                  alt="Gustavo Sareto"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/90 via-dark-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-text-primary text-sm font-medium">
                    Construindo experiências digitais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   