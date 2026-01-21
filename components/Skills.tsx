'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LogoLoop from './LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const techLogos = [
  { node: <SiReact size={48} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={48} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript size={48} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript size={48} />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiNodedotjs size={48} />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython size={48} />, title: "Python", href: "https://www.python.org" },
  { node: <SiTailwindcss size={48} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <TbBrandFramerMotion size={48} />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiPostgresql size={48} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb size={48} />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiGit size={48} />, title: "Git", href: "https://git-scm.com" },
  { node: <SiDocker size={48} />, title: "Docker", href: "https://www.docker.com" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto px-4">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Logo Loop */}
        <div className="relative" style={{ height: '120px', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={60}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="#0B0B0B"
            ariaLabel="Technologies I use"
          />
        </div>
      </div>
    </section>
  );
}
