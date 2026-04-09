"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import LoginModal from './LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-card border-none rounded-none border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-blue-600">내꼬</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#branch" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">지점 및 요금 안내</a>
              <a href="#box-guide" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">박스 크기 안내</a>
              <a href="#reviews" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">이용 후기</a>
              <a href="#support" className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors">고객지원</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-surface-high rounded-full transition-colors hidden md:block">
              <Search className="w-5 h-5 text-[#1D1D1F]" />
            </button>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="text-sm font-medium text-[#1D1D1F] hover:text-brand-blue transition-colors mr-2"
            >
              로그인
            </button>
            <button className="btn-primary text-sm">내꼬 시작하기</button>
          </div>
        </div>
      </header>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
