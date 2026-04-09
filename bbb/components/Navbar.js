'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { logout } from '@/app/auth/actions';

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const supabase = createClient();
    
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-surface-container-high shadow-sm bg-white/80 backdrop-blur-xl transition-all duration-300">
      <nav className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-2xl font-bold tracking-tighter text-teal-800 cursor-pointer font-headline">Pristine Editorial</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/services">
              <span className={`tracking-tight font-headline transition-all duration-300 cursor-pointer ${pathname === '/' || pathname === '/services' ? 'text-teal-700 font-semibold border-b-2 border-teal-700 pb-1' : 'text-slate-500 hover:text-teal-600'}`}>
                가정 청소
              </span>
            </Link>
            <Link href="/services/office">
              <span className={`tracking-tight font-headline transition-all duration-300 cursor-pointer ${pathname === '/services/office' ? 'text-teal-700 font-semibold border-b-2 border-teal-700 pb-1' : 'text-slate-500 hover:text-teal-600'}`}>
                사무실 청소
              </span>
            </Link>
            <Link href="/reviews">
              <span className={`tracking-tight font-headline transition-all duration-300 cursor-pointer ${pathname === '/reviews' ? 'text-teal-700 font-semibold border-b-2 border-teal-700 pb-1' : 'text-slate-500 hover:text-teal-600'}`}>
                이용 후기
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm font-medium text-slate-700">
                {user.user_metadata?.display_name || user.email?.split('@')[0]}님
              </span>
              <form action={logout}>
                <button type="submit" className="text-sm font-medium text-slate-500 hover:text-red-500 cursor-pointer">
                  로그아웃
                </button>
              </form>
            </div>
          ) : (
            <Link href="/login">
              <span className="text-sm font-medium text-slate-500 hover:text-teal-700 cursor-pointer hidden md:block">로그인</span>
            </Link>
          )}
          <Link href="/reservation">
            <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-semibold active:scale-95 transition-transform">
              지금 예약하기
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
