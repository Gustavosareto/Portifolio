import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://gustavosareto.dev'),
  title: {
    default: 'Gustavo Sareto - Desenvolvedor Full Stack | Portfolio',
    template: '%s | Gustavo Sareto'
  },
  description: 'Desenvolvedor Full Stack especializado em Next.js, React, TypeScript e Node.js. 2+ anos de experiência, 20+ projetos entregues. Criando soluções digitais modernas e escaláveis.',
  keywords: [
    'Gustavo Sareto',
    'Desenvolvedor Full Stack',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Portfolio',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'GSAP',
    'Tailwind CSS'
  ],
  authors: [{ name: 'Gustavo Sareto' }],
  creator: 'Gustavo Sareto',
  publisher: 'Gustavo Sareto',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://gustavosareto.dev',
    siteName: 'Gustavo Sareto Portfolio',
    title: 'Gustavo Sareto - Desenvolvedor Full Stack',
    description: 'Portfolio profissional de Gustavo Sareto. Desenvolvedor Full Stack com 2+ anos de experiência e 20+ projetos entregues.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gustavo Sareto - Desenvolvedor Full Stack'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Sareto - Desenvolvedor Full Stack',
    description: 'Portfolio profissional. 2+ anos de experiência, 20+ projetos entregues.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code'
  }
};

export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gustavo Sareto',
    jobTitle: 'Full Stack Developer',
    url: 'https://gustavosareto.dev',
    sameAs: [
      'https://github.com/gustavosareto',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'Tailwind CSS',
      'GSAP',
      'Web Development',
      'Full Stack Development'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Your University/Course'
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer / Your Company'
    }
  };
}
