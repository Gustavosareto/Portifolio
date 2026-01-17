import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Galaxy from '@/components/Galaxy';
import StaggeredMenu from '@/components/StaggeredMenu';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const menuItems = [
  { label: 'Projects', ariaLabel: 'Ver projetos', link: '#projects' },
  { label: 'Skills', ariaLabel: 'Ver habilidades', link: '#skills' },
  { label: 'About', ariaLabel: 'Sobre mim', link: '#about' },
  { label: 'Contact', ariaLabel: 'Contato', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/Gustavosareto' },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      {/* Galaxy Background - Fixed */}
      <div className="fixed inset-0 z-0">
        <Galaxy
          mouseInteraction={false}
          hueShift={200}
          density={1.2}
          speed={0.5}
          glowIntensity={0.7}
          saturation={0.5}
          twinkleIntensity={0.4}
          rotationSpeed={0.02}
          transparent={true}
        />
      </div>

      {/* Navigation */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#EDEDED"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={['#1E1E1E', '#3B82F6']}
        accentColor="#3B82F6"
        isFixed={true}
        closeOnClickAway={true}
      />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
