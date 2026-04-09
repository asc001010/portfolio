"use client";

import { X, Lock, Mail, MessageCircle, Link } from 'lucide-react';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 pb-0 flex justify-end">
          <button onClick={onClose} className="p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors">
            <X className="w-5 h-5 text-zinc-600" />
          </button>
        </div>

        <div className="px-8 pb-10 flex flex-col items-center">
          {/* Logo Area */}
          <div className="w-24 h-24 bg-white rounded-full overflow-hidden border border-zinc-100 shadow-lg mb-6 flex items-center justify-center">
            <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-2">프리미엄 공간, 내꼬</h2>
          <p className="text-zinc-500 text-sm text-center mb-8">
            소중한 짐을 안전하게 보관하기 위한 첫 걸음.
          </p>

          {/* Security Notice */}
          <div className="w-full bg-[#1B2435]/5 border border-[#1B2435]/10 rounded-2xl p-4 mb-8 flex items-start gap-3">
            <div className="bg-[#1B2435]/10 p-2 rounded-full">
              <Lock className="w-4 h-4 text-[#1B2435]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1B2435] mb-1">안전한 정보 보호</h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                내꼬는 고객님의 개인정보와 짐의 안전을 최우선으로 생각합니다. 
                모든 로그인과 결제 정보는 강력한 암호화 알고리즘으로 보호됩니다.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-100 mb-8 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-xs font-medium text-zinc-400">
              간편 로그인
            </span>
          </div>

          {/* Social Buttons (Demo) */}
          <div className="w-full space-y-3">
            <button onClick={() => alert('카카오톡 로그인 데모입니다.')} className="w-full h-12 rounded-xl flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#FEE500]/90 transition-colors font-semibold text-[#191919]">
              <MessageCircle className="w-5 h-5" />
              카카오톡으로 계속하기
            </button>
            <button onClick={() => alert('네이버 로그인 데모입니다.')} className="w-full h-12 rounded-xl flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#03C75A]/90 transition-colors font-semibold text-white">
              <span className="font-black text-lg">N</span>
              네이버로 계속하기
            </button>
            <button onClick={() => alert('구글 로그인 데모입니다.')} className="w-full h-12 rounded-xl flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors font-semibold text-zinc-700">
              <span className="font-black text-lg text-blue-500">G</span>
              구글 계정으로 계속하기
            </button>
            <button onClick={() => alert('인스타그램 로그인 데모입니다.')} className="w-full h-12 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90 transition-opacity font-semibold text-white">
              <Link className="w-5 h-5" />
              Instagram으로 계속하기
            </button>
          </div>
          
          <p className="text-xs text-zinc-400 mt-8 text-center">
            로그인함으로써 귀하는 내꼬의 <a href="#" className="underline hover:text-zinc-600">이용약관</a> 및 <a href="#" className="underline hover:text-zinc-600">개인정보처리방침</a>에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
