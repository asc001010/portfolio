import Header from '@/components/mygo/Header';
import Hero from '@/components/mygo/Hero';
import FacilityIcons from '@/components/mygo/FacilityIcons';
import BranchPricing from '@/components/mygo/BranchPricing';
import BoxSizeGuide from '@/components/mygo/BoxSizeGuide';
import ReviewSection from '@/components/mygo/ReviewSection';
import FAQSection from '@/components/mygo/FAQSection';
import Footer from '@/components/mygo/Footer';

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
