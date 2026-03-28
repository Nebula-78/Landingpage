import Navbar from './components/Navbar.jsx';
import {
  HeroSection,
  TrustBar,
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  ProcessSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  CtaSection,
  Footer,
} from './components/Sections.jsx';

/**
 * App — orchestre toutes les sections de la landing page.
 * Chaque section est un composant indépendant importé depuis Sections.jsx.
 */
export default function App() {
  return (
    <>
      {/* Skip-to-content pour accessibilité clavier */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999]
                   focus:bg-forest focus:text-cloud focus:px-4 focus:py-2 focus:rounded-lg
                   focus:font-semibold focus:shadow-card"
      >
        Aller au contenu principal
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
