"use client";

import { useState, useEffect, useCallback } from 'react';
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

  const handleLogoClick = useCallback((e) => {
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  useEffect(() => {
    let mounted = true;

    async function syncUser() {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (mounted) setUser(currentUser);
    }

    syncUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (mounted) setUser(session?.user ?? null);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const handleEvents = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleEvents, { passive: true });
      window.addEventListener('resize', handleEvents);
    }
    
    return () => {
      window.removeEventListener('scroll', handleEvents);
      window.removeEventListener('resize', handleEvents);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/naekko/membership", label: "멤버십 구독", highlight: true },
    { href: "/naekko#branch", label: "지점 및 요금 안내" },
    { href: "/naekko#box-guide", label: "박스 크기 안내" },
    { href: "/naekko/reviews", label: "이용 후기" },
    { href: "/naekko/faq", label: "자주 묻는 질문" },
  ];

  return (
    <>
      <header className="sticky top-0 z-[60] w-full glass-card border-none rounded-none border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6 xl:gap-8 overflow-hidden flex-1">
            <Link 
              href="/naekko" 
              onClick={handleLogoClick}
              className="flex-shrink-0 flex items-center gap-2 group transition-transform active:scale-95"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 shadow-sm transition-shadow group-hover:shadow-md">
                <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover" />
              </div>
            </Link>
            
            {/* Intelligent Nav: Show full menu on XL screens (1280px+) 
                On screens between LG and XL where it was "cramped", we hide it and use hamburger. */}
            <nav className="hidden xl:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`text-[13px] xl:text-[14px] font-medium transition-all whitespace-nowrap break-keep flex-shrink-0 active:scale-95 ${
                    link.highlight 
                      ? "text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full font-black hover:bg-blue-100 shadow-sm" 
                      : "text-[#1D1D1F] hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
             <div className="hidden lg:flex items-center gap-2 xl:gap-3 mr-2">
              {user ? (
                <>
                  <UsageTimer />
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-blue-500 text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-full text-[13px] xl:text-[14px] font-bold hover:bg-blue-600 transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap break-keep shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    <Package className="w-4 h-4" />
                    예약하기
                  </button>
                  <Link 
                    href="/naekko/profile"
                    className="bg-[#F2F2F7] text-[#1D1D1F] px-4 xl:px-6 py-2.5 xl:py-3 rounded-full text-[13px] xl:text-[14px] font-bold hover:bg-zinc-200 transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap break-keep active:scale-95"
                  >
                    <User className="w-4 h-4" />
                    마이페이지
                  </Link>
                </>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-blue-500 text-white px-5 xl:px-7 py-2.5 xl:py-3 rounded-full text-[13px] xl:text-[14px] font-bold hover:bg-blue-600 transition-all whitespace-nowrap break-keep active:scale-95 shadow-lg shadow-blue-500/20"
                >
                  내꼬 시작하기
                </button>
              )}
            </div>

            {/* Hamburger for anything below XL (1280px) to prevent cramping */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 xl:hidden hover:bg-zinc-50 rounded-xl transition-colors active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7 text-[#1D1D1F]" /> : <Menu className="w-7 h-7 text-[#1D1D1F]" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-16 bg-black/5 backdrop-blur-[2px] z-40 xl:hidden"
              />
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 py-6 px-8 flex flex-col md:flex-row md:items-start gap-8 shadow-2xl z-50 xl:hidden"
              >
                <div className="flex-1 space-y-2">
                  <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Navigation</p>
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={`block text-base py-2.5 transition-colors whitespace-nowrap break-keep ${
                        link.highlight ? "font-black text-blue-600" : "font-semibold text-[#1D1D1F] hover:text-blue-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="md:border-l border-zinc-100 md:pl-8 pt-4 md:pt-0 flex flex-col gap-3 min-w-[240px]">
                  <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4 lg:hidden">Account</p>
                  <div className="lg:hidden flex flex-col gap-2">
                    {user ? (
                      <>
                        <button 
                          onClick={() => { setIsBookingOpen(true); setIsMobileMenuOpen(false); }}
                          className="w-full bg-blue-500 text-white py-4 text-sm font-bold rounded-2xl flex items-center justify-center gap-2"
                        >
                          <Package className="w-4 h-4" />
                          예약하기
                        </button>
                        <Link 
                          href="/naekko/profile"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full bg-zinc-100 text-zinc-600 text-center py-4 text-sm font-bold rounded-2xl flex items-center justify-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          마이페이지
                        </Link>
                      </>
                    ) : (
                      <button 
                        onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                        className="w-full bg-blue-500 text-white py-4 text-sm font-bold rounded-2xl"
                      >
                        내꼬 시작하기
                      </button>
                    )}
                  </div>
                  <div className="bg-zinc-50 p-6 rounded-[2rem] mt-4">
                    <p className="text-[11px] font-bold text-zinc-400 leading-relaxed">
                      내 물건을 가장 가까운 곳에,<br/>내꼬와 함께 스마트한 라이프를 시작하세요.
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <RealtimeLockerList isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      <AnimatePresence>
        {!isBookingOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            className="fixed bottom-6 right-6 z-[45] lg:hidden"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -top-14 right-0"
            >
              <div className="relative bg-white/95 backdrop-blur-md border border-blue-100 text-blue-600 text-[11px] px-4 py-2.5 rounded-[1.2rem] font-bold whitespace-nowrap shadow-xl shadow-blue-500/10 mb-2">
                지금 바로 예약하기
                <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-blue-50 rotate-45 transform origin-center" />
              </div>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsBookingOpen(true)}
              className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center active:bg-blue-600 transition-colors"
            >
              <Package className="w-7 h-7" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
