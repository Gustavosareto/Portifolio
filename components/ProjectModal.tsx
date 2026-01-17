'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl?: string;
    fullDescription: string;
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power3.in',
    });
    
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.1,
      onComplete: onClose,
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-primary/95 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className="relative w-full max-w-6xl max-h-[90vh] bg-dark-secondary/90 backdrop-blur-xl border border-dark-tertiary rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-dark-secondary/95 backdrop-blur-xl border-b border-dark-tertiary">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-dark-tertiary text-text-secondary text-xs rounded-md border border-dark-tertiary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleClose}
            className="p-2 hover:bg-dark-tertiary rounded-lg transition-colors group"
            aria-label="Fechar"
          >
            <svg
              className="w-6 h-6 text-text-secondary group-hover:text-text-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Preview iframe */}
          <div className="relative w-full aspect-video bg-dark-tertiary">
            <iframe
              ref={iframeRef}
              src={project.liveUrl}
              className="w-full h-full"
              title={`Preview de ${project.title}`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
            <div className="absolute top-4 right-4 bg-dark-primary/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-text-secondary border border-dark-tertiary">
              Preview ao vivo
            </div>
          </div>

          {/* Description */}
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Sobre o Projeto</h3>
              <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">Descrição</h3>
              <p className="text-text-secondary leading-relaxed">{project.description}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Visitar Site</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-dark-tertiary text-text-primary border border-dark-tertiary rounded-lg hover:border-accent transition-all duration-300 hover:scale-105"
                >
                  Ver no GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
