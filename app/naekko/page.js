import Header from '@/components/naekko/Header';
import Hero from '@/components/naekko/Hero';

import FeatureCards from '@/components/naekko/FeatureCards';
import BranchPricing from '@/components/naekko/BranchPricing';
import BoxSizeGuide from '@/components/naekko/BoxSizeGuide';
import ShortsGallery from '@/components/naekko/ShortsGallery';
import Footer from '@/components/naekko/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />

        <FeatureCards />
        <BranchPricing />
        <BoxSizeGuide />
        <ShortsGallery />
      </main>
      <Footer />
    </div>
  );
}
