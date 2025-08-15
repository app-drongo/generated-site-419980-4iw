import SplitHero from '../../components/SplitHero';
import FeaturesSection from '../components/FeaturesSection';
import CardsFeatures from '../components/CardsFeatures';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <SplitHero />
      </section>
          <section id="cards" className="scroll-mt-16">
        <FeaturesSection />
      </section>
          <section id="cards" className="scroll-mt-16">
        <CardsFeatures />
      </section>
    </main>
  );
}