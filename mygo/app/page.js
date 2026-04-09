import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FacilityIcons from '@/components/FacilityIcons';
import BranchPricing from '@/components/BranchPricing';
import BoxSizeGuide from '@/components/BoxSizeGuide';
import ReviewSection from '@/components/ReviewSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FacilityIcons />
        <BranchPricing />
        <BoxSizeGuide />
        <ReviewSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
