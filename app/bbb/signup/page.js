"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signup } from '@/app/bbb/auth/actions';

export default function SignupPage() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsPending(true);
    const res = await signup(formData);
    if (res?.error) {
      setError(res.error);
    }
    setIsPending(false);
  }

  return (
    <div className="min-h-screen flex selection:bg-primary-container selection:text-on-primary-container font-body bg-surface text-on-surface">
      
      {/* Left Side: Form Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16">
        
        {/* Top Minimal Header */}
        <div className="flex justify-between items-center mb-8 lg:mb-0">
          <Link href="/bbb">
            <div className="text-2xl font-bold tracking-tighter text-primary font-headline cursor-pointer hover:opacity-80 transition-opacity">
              Pristine Editorial
            </div>
          </Link>
          <Link href="/bbb">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">close</span>
          </Link>
        </div>

        {/* Form Body */}
        <div className="max-w-md w-full mx-auto my-auto">
          <div className="mb-8 text-center lg:text-left">
            <h1 className="font-headline text-4xl md:text-4xl font-extrabold tracking-tight mb-3">회원가입</h1>
            <p className="text-on-surface-variant font-medium text-sm md:text-base">프리미엄 공간 케어의 기준, 프리스틴 에디토리얼을 경험해보세요.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-200 rounded-xl text-sm font-bold text-center animate-pulse">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-sm font-bold text-on-surface-variant ml-1">이름</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">person</span>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="홍길동" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm text-sm"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5 text-left">
              <label className="text-sm font-bold text-on-surface-variant ml-1">이메일 주소</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="hello@pristine.com" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm text-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5 text-left">
                <label className="text-sm font-bold text-on-surface-variant ml-1">비밀번호</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                  <input 
                    type="password" 
                    name="password"
                    required
                    placeholder="••••••••" 
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-sm font-bold text-on-surface-variant ml-1">비밀번호 확인</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock_reset</span>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    required
                    placeholder="••••••••" 
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="w-5 h-5 mt-0.5 border-2 border-outline-variant/50 rounded flex-shrink-0 flex items-center justify-center group-hover:border-primary transition-colors"></div>
                <span className="text-sm font-medium text-on-surface-variant/80 group-hover:text-on-surface transition-colors leading-relaxed">
                  회원가입 시 프리스틴 에디토리얼의 <a href="#" className="font-bold text-primary hover:underline">서비스 이용약관</a> 및 <a href="#" className="font-bold text-primary hover:underline">개인정보 보호정책</a>에 동의하게 됩니다.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isPending} className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-50">
              {isPending ? "가입 처리 중..." : "계정 만들기"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px bg-outline-variant/20 flex-1"></div>
            <span className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">or sign up with</span>
            <div className="h-px bg-outline-variant/20 flex-1"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant/30 py-3 rounded-full hover:bg-surface-container-low transition-colors shadow-sm font-medium text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#000000] text-white py-3 rounded-full hover:bg-black/80 transition-colors shadow-sm font-medium text-sm">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-4 h-4 invert" />
              <span>Apple</span>
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 lg:mt-0">
          <p className="text-sm text-on-surface-variant font-medium">
            이미 계정이 있으신가요? 
            <Link href="/bbb/login">
              <span className="font-bold text-primary hover:underline underline-offset-2 ml-1 cursor-pointer">로그인</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Editorial Image Panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-surface-container-low overflow-hidden p-4">
         <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkqEooqnXDNDg8Lu3FvpUm4HXtJtF6GUMLzngl3G5gOCmcqkb8z10ul_rx3z9rbNK2_OxHqUCnXCPEDKPQL6QTlZjFGftsx_Fi-2S9QKP1CB_q03mMnIdF6sD1tnODUnHZMkOy1OTzpIH5wnuKxSMZXRmu_XkzqwR1dV3sy1ZptJNznDbC3Zmi8vdqbbm6MVG_TSLr9XZJ--NjTPVcBWG5W5S9jbn2ARId_I09VI07EgIj0ZJaojQ_LNDaE-qgMM8NTIDAlSR56tyZ" 
              alt="Editorial Premium Hotel Style Room" 
              className="w-full h-full object-cover transition-transform duration-[25s] hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            
            {/* Editorial Quote overlay */}
            <div className="absolute bottom-12 left-12 right-12 z-10 text-white">
              <div className="mb-4">
                <span className="material-symbols-outlined text-4xl text-primary opacity-90" style={{ fontVariationSettings: "'FILL' 1" }}>hotel_class</span>
              </div>
              <h3 className="font-headline text-3xl font-bold leading-snug mb-4">
                "매일 머무는 공간이 오성급 호텔스위트가 되는 마법."
              </h3>
              <p className="font-medium text-white/70 flex items-center gap-2">
                <span className="w-8 h-px bg-white/40 block"></span> Pristine Membership Foundation
              </p>
            </div>
         </div>
      </div>
    </div>
  );
}
