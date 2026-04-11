"use client";

import { useState, useEffect } from 'react';
import { X, Lock, Mail, MessageCircle, Link, Key } from 'lucide-react';
import { login, signup, signInWithSocial } from '@/app/mygo/auth/actions';

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    
    try {
      if (mode === 'login') {
        const result = await login(formData);
        if (result?.error) setError(result.error);
      } else {
        const result = await signup(formData);
        if (result?.error) setError(result.error);
      }
    } catch (err) {
      setError('인증 과정에서 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithSocial(provider);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 backdrop-blur-sm p-4 py-8 animate-in fade-in duration-200">
      <div className="flex min-h-full items-center justify-center">
        <div 
          className="bg-white rounded-[2rem] w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
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
            <p className="text-zinc-500 text-sm text-center mb-6">
              {mode === 'login' ? '소중한 짐을 안전하게 보관하기 위한 첫 걸음.' : '내꼬의 새로운 가족이 되어주세요.'}
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="이메일 주소" 
                  required
                  className="w-full h-14 pl-12 pr-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:ring-2 focus:ring-[#1B2435] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <input 
                  type="password" 
                  name="password"
                  placeholder="비밀번호" 
                  required
                  className="w-full h-14 pl-12 pr-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:ring-2 focus:ring-[#1B2435] focus:border-transparent outline-none transition-all"
                />
              </div>
              
              {error && <p className="text-red-500 text-xs mt-2 px-2">{error}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-[#1B2435] text-white rounded-2xl font-bold hover:bg-[#1B2435]/90 transition-colors disabled:opacity-50"
              >
                {loading ? '처리 중...' : (mode === 'login' ? '로그인' : '회원가입')}
              </button>

              <div className="flex justify-center mt-4">
                <button 
                  type="button" 
                  onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                  className="text-xs text-zinc-500 hover:text-[#1B2435] font-medium transition-colors"
                >
                  {mode === 'login' ? '아직 계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
                </button>
              </div>
            </form>

            <div className="w-full h-px bg-zinc-100 mb-8 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-xs font-medium text-zinc-400">
                간편 로그인
              </span>
            </div>

            {/* Social Buttons */}
            <div className="w-full space-y-3">
              <button 
                type="button"
                onClick={() => handleSocialLogin('kakao')}
                className="w-full h-12 rounded-xl flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#FEE500]/90 transition-colors font-semibold text-[#191919]"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡으로 계속하기
              </button>
              <button 
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="w-full h-12 rounded-xl flex items-center justify-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors font-semibold text-zinc-700"
              >
                <span className="font-black text-lg text-blue-500">G</span>
                구글 계정으로 계속하기
              </button>
            </div>
            
            <p className="text-xs text-zinc-400 mt-8 text-center">
              로그인함으로써 귀하는 내꼬의 <a href="#" className="underline hover:text-zinc-600">이용약관</a> 및 <a href="#" className="underline hover:text-zinc-600">개인정보처리방침</a>에 동의하게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
