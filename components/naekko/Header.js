"use client";

import { useState, useEffect } from 'react';
import { Menu, User, Package, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';
import RealtimeLockerList from './RealtimeLockerList';
import UsageTimer from './UsageTimer';
import { createClient } from '@/lib/naekko/supabase/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const supabase = createClient();

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  const handleLogoClick = (e) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/naekko') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-card border-none rounded-none border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link 
              href="/naekko" 
              onClick={handleLogoClick}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 shadow-sm">
                <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover" />
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              <Link href="/naekko/membership" className="text-[13px] font-black text-blue-600 hover:text-blue-700 transition-all bg-[#EEF6FF] px-4 py-2 rounded-full whitespace-nowrap">멤버십 구독</Link>
              <Link href="/naekko/#branch" className="text-[15px] font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors whitespace-nowrap">지점 및 요금 안내</Link>
              <Link href="/naekko/#box-guide" className="text-[15px] font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors whitespace-nowrap">박스 크기 안내</Link>
              <Link href="/naekko/reviews" className="text-[15px] font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors whitespace-nowrap">이용 후기</Link>
              <Link href="/naekko/faq" className="text-[15px] font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors whitespace-nowrap">자주 묻는 질문</Link>
            </nav>
          </div>
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              {user ? (
                <>
                  <UsageTimer />
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-brand-blue text-white px-6 py-3 rounded-full text-[15px] font-bold hover:bg-blue-600 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    <Package className="w-5 h-5" />
                    예약하기
                  </button>
                  <Link 
                    href="/naekko/profile"
                    className="bg-[#F2F2F7] text-[#1D1D1F] px-6 py-3 rounded-full text-[15px] font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
                  >
                    <User className="w-5 h-5" />
                    마이페이지
                  </Link>
                </>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-brand-blue text-white px-7 py-3 rounded-full text-[15px] font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
                >
                  내꼬 시작하기
                </button>
              )}
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 lg:hidden hover:bg-zinc-100 rounded-xl transition-colors"
            >
              <Menu className="w-7 h-7 text-[#1D1D1F]" />
            </button>
          </div>

        {/* Mobile Navigation (Original Dropdown Style) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Invisible touch backdrop to catch outside clicks */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-16 bg-black/5 z-40 lg:hidden"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 py-4 px-6 space-y-4 shadow-xl z-50 lg:hidden"
              >
                <Link href="/naekko/membership" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-black text-blue-600 py-2">멤버십 구독 안내</Link>
                <Link href="/naekko/#branch" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">지점 및 요금 안내</Link>
                <Link href="/naekko/#box-guide" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">박스 크기 안내</Link>
                <Link href="/naekko/reviews" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">이용 후기</Link>
                <Link href="/naekko/faq" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">자주 묻는 질문</Link>
                <div className="pt-4 flex flex-col gap-2">
                  {user ? (
                    <>
                      <button 
                        onClick={() => { setIsBookingOpen(true); setIsMobileMenuOpen(false); }}
                        className="w-full btn-primary py-4 text-sm font-bold flex items-center justify-center gap-2"
                      >
                        <Package className="w-4 h-4" />
                        예약하기
                      </button>
                      <Link 
                        href="/naekko/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full bg-zinc-100 text-zinc-600 text-center py-4 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
                      >
                        <User className="w-4 h-4" />
                        마이페이지
                      </Link>
                    </>
                  ) : (
                    <button 
                      onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                      className="w-full btn-primary py-4 text-sm font-bold"
                    >
                      내꼬 시작하기
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <RealtimeLockerList isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Mobile Floating Quick Booking Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[45] md:hidden"
      >
        {/* Animated Speech Bubble (Always Visible on Mobile) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute -top-14 right-0"
        >
          <div className="relative bg-white/90 backdrop-blur-md border border-blue-100 text-[#2563EB] text-[11px] px-4 py-2.5 rounded-[1.2rem] font-bold whitespace-nowrap shadow-xl shadow-blue-500/10 mb-2">
            지금 바로 예약하기
            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white/90 backdrop-blur-md border-r border-b border-blue-100 rotate-45 transform origin-center" />
          </div>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBookingOpen(true)}
          className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center"
        >
          <Package className="w-7 h-7" />
        </motion.button>
      </motion.div>
    </>
  );
}
