"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Key, ArrowRight, ShieldCheck } from 'lucide-react';
import { login, signup, signInWithSocial } from '@/app/naekko/auth/actions';
import { useRouter } from 'next/navigation';

export default function LoginModal({ isOpen, onClose }) {
  const router = useRouter();
  const [mode, setMode] = useState('login'); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const formData = new FormData(e.target);
    
    try {
      const result = mode === 'login' ? await login(formData) : await signup(formData);
      
      if (result?.error) {
        setError(result.error);
        setLoading(false);
      } else if (result?.success) {
        if (result.message) {
          setMessage(result.message);
          setLoading(false);
        } else if (result.redirectTo) {
          window.location.reload();
        }
      }
    } catch (err) {
      setError('인증 과정에서 예기치 못한 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError(null);
    try {
      const result = await signInWithSocial(provider);
      if (result?.error) {
        setError(result.error);
        setLoading(false);
      } else if (result?.success && result.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      setError('소셜 로그인 처리 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden flex flex-col will-change-transform"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Action */}
          <div className="absolute top-6 right-6 z-10">
            <button 
              onClick={onClose} 
              className="p-2.5 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-all active:scale-95 text-zinc-400 hover:text-zinc-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-8 sm:p-10 flex flex-col items-center">
            {/* Brand Identity */}
            <div className="w-20 h-20 bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-xl mb-6 flex items-center justify-center p-2 relative">
               <img src="/logo.webp" alt="내꼬 로고" className="w-full h-full object-cover rounded-2xl" />
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-[#1D1D1F] mb-2 tracking-tight">프리미엄 공간, 내꼬</h2>
              <p className="text-zinc-400 text-sm font-medium">
                {mode === 'login' ? '소중한 짐을 위해 로그인이 필요합니다.' : '내꼬의 새로운 멤버가 되어보세요.'}
              </p>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="이메일 주소" 
                    required
                    className="w-full h-14 pl-12 pr-6 bg-zinc-50 border border-zinc-100 rounded-2xl text-[14px] font-bold focus:ring-[3px] focus:ring-blue-50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300">
                    <Key className="w-4 h-4" />
                  </div>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="비밀번호" 
                    required
                    className="w-full h-14 pl-12 pr-6 bg-zinc-50 border border-zinc-100 rounded-2xl text-[14px] font-bold focus:ring-[3px] focus:ring-blue-50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>
              
              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-red-50 text-red-500 text-[11px] font-bold p-3 rounded-xl border border-red-100 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    {error}
                  </motion.div>
                )}
                {message && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-green-50 text-green-600 text-[11px] font-bold p-3 rounded-xl border border-green-100 flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full h-14 bg-[#1B2435] text-white rounded-2xl font-black text-sm hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center gap-2 active:scale-95 shadow-xl shadow-zinc-200"
              >
                {loading ? (
                   <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {mode === 'login' ? '내꼬 로그인' : '무료 회원가입'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex justify-center pt-2">
                <button 
                  type="button" 
                  onClick={() => {
                    setMode(mode === 'login' ? 'signup' : 'login');
                    setError(null);
                    setMessage(null);
                  }}
                  className="text-xs text-zinc-400 hover:text-blue-500 font-bold transition-colors py-2"
                >
                  {mode === 'login' ? '아직 계정이 없으신가요? 신규 가입하기' : '이미 계정이 있으신가요? 로그인하기'}
                </button>
              </div>
            </form>

            {/* Social Divider */}
            <div className="w-full flex items-center gap-4 my-8">
              <div className="h-px bg-zinc-100 flex-1" />
              <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest whitespace-nowrap">Easy Connect</span>
              <div className="h-px bg-zinc-100 flex-1" />
            </div>

            {/* Premium Social Buttons */}
            <div className="w-full grid grid-cols-1 gap-3">
              <SocialButton 
                onClick={() => handleSocialLogin('kakao')}
                bgColor="bg-[#FEE500]"
                textColor="text-[#191919]"
                icon={<MessageCircle className="w-5 h-5" />}
                label="카카오톡 간편 시작"
              />
              <div className="grid grid-cols-2 gap-3">
                <SocialButton 
                  onClick={() => handleSocialLogin('naver')}
                  bgColor="bg-[#03C75A]"
                  textColor="text-white"
                  icon={<span className="font-black text-base">N</span>}
                  label="네이버"
                />
                <SocialButton 
                  onClick={() => handleSocialLogin('google')}
                  bgColor="bg-white"
                  textColor="text-zinc-600"
                  icon={<span className="font-black text-base text-blue-500">G</span>}
                  label="구글"
                  border
                />
              </div>
            </div>
            
            <p className="text-[10px] text-zinc-400 mt-10 text-center leading-relaxed">
              계속 진행함으로써 내꼬의 <a href="#" className="underline font-bold hover:text-zinc-600">이용약관</a> 및 <br/>
              <a href="#" className="underline font-bold hover:text-zinc-600">개인정보처리방침</a>에 동의하게 됩니다.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function SocialButton({ onClick, bgColor, textColor, icon, label, border }) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`h-12 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold text-xs active:scale-95 ${bgColor} ${textColor} ${border ? 'border border-zinc-100' : ''} shadow-sm hover:shadow-md`}
    >
      {icon}
      {label}
    </button>
  );
}
