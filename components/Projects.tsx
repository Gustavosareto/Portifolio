'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal';
import MockupLaptop from './MockupLaptop';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  fullDescription: string;
  screenshot?: string;
  image?: string;
  images?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Agendouu',
    description: 'Plataforma completa de agendamento online com gestão de horários e notificações.',
    fullDescription: 'Sistema de agendamento inteligente que permite aos usuários agendar serviços de forma rápida e prática. Inclui sistema de notificações, gestão de disponibilidade e integração com calendários.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: 'https://agendouu.vercel.app',
    image: '/projects/agendouu.png',
    images: ['/projects/agendouu.png'],
  },
  {
    id: 2,
    title: 'DeLuca Studio',
    description: 'Website elegante e moderno para estúdio de design e arquitetura.',
    fullDescription: 'Portfólio profissional desenvolvido para DeLuca Studio, apresentando projetos de arquitetura e design de interiores com galeria interativa e animações sofisticadas.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://deluca-studio.vercel.app',
    screenshot: 'https://image.thum.io/get/width/1200/crop/800/maxAge/24/noanimate/https://deluca-studio.vercel.app',
  },
  {
    id: 3,
    title: "Morgan's Barbearia",
    description: 'Site institucional para barbearia premium com sistema de agendamento.',
    fullDescription: 'Website completo para barbearia moderna incluindo catálogo de serviços, galeria de trabalhos, sistema de agendamento online e integração com redes sociais.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    liveUrl: 'https://morgam-s-barbearia.vercel.app/',
    screenshot: 'https://image.thum.io/get/width/1200/crop/800/maxAge/24/noanimate/https://morgam-s-barbearia.vercel.app',
  },
  {
    id: 4,
    title: 'Pizza em Casa',
    description: 'E-commerce completo para delivery de pizzas com carrinho e checkout.',
    fullDescription: 'Plataforma de delivery desenvolvida para pizzaria, com cardápio interativo, sistema de pedidos em tempo real, integração com pagamento e rastreamento de entrega.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    liveUrl: 'https://pizzaemcasa.com',
    image: '/projects/pizza-em-casa.png',
    images: ['/projects/pizza-em-casa.png'],
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const projectsRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Extrair todas as tecnologias únicas
  const allTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();

  // Filtrar projetos
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(selectedFilter));

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título e descrição
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
        },
      });

      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top bottom-=100',
        },
      });

      // Animação dos filtros
      gsap.from(filtersRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: filtersRef.current,
          start: 'top bottom-=100',
        },
      });

      // Animação premium dos cards - reveal elegante com parallax sutil
      projectCardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Reveal inicial com fade e scale sutil
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=80',
              toggleActions: 'play none none none',
            },
          }
        );

        // Parallax sutil durante o scroll
        gsap.to(card, {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 3,
          },
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <>
      <section 
        id="projects"
        ref={projectsRef}
        className="min-h-screen py-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            {t.projects.title}
          </h2>
          <p ref={descRef} className="text-text-secondary text-lg mb-8 max-w-2xl">
            {t.projects.subtitle}
          </p>

          {/* Filtros */}
          <div ref={filtersRef} className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-dark-tertiary/30 text-text-secondary border border-dark-tertiary/40 hover:border-accent/40 hover:text-accent'
              }`}
            >
              {t.projects.all || 'Todos'}
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedFilter(tech)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedFilter === tech
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-dark-tertiary/30 text-text-secondary border border-dark-tertiary/40 hover:border-accent/40 hover:text-accent'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { projectCardsRef.current[index] = el; }}
                onClick={() => handleProjectClick(project)}
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
                className="bg-dark-secondary/40 backdrop-blur-xl border border-dark-tertiary/50 rounded-3xl overflow-hidden hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 group cursor-pointer relative hover:scale-[1.02]"
              >
                {/* Mockup Preview */}
                <div className="p-6 relative overflow-hidden">
                  <MockupLaptop 
                    projectUrl={project.liveUrl}
                    projectName={project.title}
                    screenshot={project.screenshot}
                    image={project.image}
                  />
                </div>

                {/* Content */}
                <div className="px-6 pb-6 space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary/80 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-tertiary/30 text-text-secondary/70 text-xs rounded-full border border-dark-tertiary/40 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-accent/10 to-accent/5 text-accent border border-accent/20 rounded-xl hover:from-accent hover:to-accent/90 hover:text-white transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2 group/btn"
                    >
                      <span>{t.projects.viewPreview}</span>
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
            </div>
          ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

    {selectedProject && (
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    )}
  </>
  );
}
