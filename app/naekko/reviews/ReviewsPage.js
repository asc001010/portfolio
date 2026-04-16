import Header from '@/components/naekko/Header';
import Footer from '@/components/naekko/Footer';
import ReviewSection from '@/components/naekko/ReviewSection';

/**
 * ReviewsPage Component
 * Moved implementation from page.js.
 */
export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 pt-12 md:pt-20">
        <ReviewSection />
      </main>
      <Footer />
    </div>
  );
}
