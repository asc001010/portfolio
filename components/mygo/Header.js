"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import LoginModal from './LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-card border-none rounded-none border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 shadow-sm">
                <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover" />
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#branch" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">지점 및 요금 안내</a>
              <a href="#box-guide" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">박스 크기 안내</a>
              <a href="#reviews" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">이용 후기</a>
              <a href="#support" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">고객지원</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors hidden sm:block mr-2"
            >
              로그인
            </button>
            <button className="btn-primary text-sm hidden sm:block">내꼬 시작하기</button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden hover:bg-zinc-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6 text-[#1D1D1F]" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-100 py-4 px-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <a href="#branch" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">지점 및 요금 안내</a>
            <a href="#box-guide" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">박스 크기 안내</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">이용 후기</a>
            <a href="#support" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium py-2">고객지원</a>
            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => { setIsLoginModalOpen(true); setIsMobileMenuOpen(false); }}
                className="flex-1 py-3 text-sm font-bold border border-zinc-200 rounded-xl"
              >
                로그인
              </button>
              <button className="flex-1 btn-primary text-sm py-3">시작하기</button>
            </div>
          </div>
        )}
      </header>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
