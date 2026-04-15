import Header from '@/components/naekko/Header';
import Footer from '@/components/naekko/Footer';
import FAQSection from '@/components/naekko/FAQSection';

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-12 md:pt-20">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
