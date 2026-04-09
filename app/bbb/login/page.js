"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { login } from '@/app/bbb/auth/actions';

export default function LoginPage() {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const formData = new FormData(e.target);
    const res = await login(formData);
    
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
        <div className="flex justify-between items-center">
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
          <div className="mb-10 text-center lg:text-left">
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">환영합니다</h1>
            <p className="text-on-surface-variant font-medium">다시 만나서 반갑습니다. 계정에 로그인해주세요.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 border border-red-200 rounded-xl text-sm font-bold text-center animate-pulse">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-on-surface-variant ml-1">이메일 주소</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="hello@pristine.com" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2 text-left">
              <label className="text-sm font-bold text-on-surface-variant ml-1">비밀번호</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                <input 
                  type="password" 
                  name="password"
                  required
                  placeholder="••••••••" 
                  className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-sm"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer hover:text-primary transition-colors hover:bg-surface-container-high rounded-full p-1 -mr-1">visibility</span>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-5 h-5 border-2 border-outline-variant/50 rounded flex items-center justify-center group-hover:border-primary transition-colors">
                  {/* <span className="material-symbols-outlined text-[14px] text-primary">check</span> */}
                </div>
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">로그인 유지</span>
              </label>
              <a href="#" className="text-sm font-bold text-primary hover:underline underline-offset-2">비밀번호 찾기</a>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isPending} className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4 disabled:opacity-50">
              {isPending ? "로그인 중..." : "로그인"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px bg-outline-variant/20 flex-1"></div>
            <span className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">or continue with</span>
            <div className="h-px bg-outline-variant/20 flex-1"></div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant/30 py-3.5 rounded-full hover:bg-surface-container-low transition-colors shadow-sm font-medium">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#000000] text-white py-3.5 rounded-full hover:bg-black/80 transition-colors shadow-sm font-medium">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" alt="Apple" className="w-5 h-5 invert" />
              <span>Apple</span>
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-10">
          <p className="text-sm text-on-surface-variant font-medium">
            아직 계정이 없으신가요? 
            <Link href="/bbb/signup">
              <span className="font-bold text-primary hover:underline underline-offset-2 ml-1 cursor-pointer">회원가입</span>
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Editorial Image Panel */}
      <div className="hidden lg:block lg:w-1/2 relative bg-surface-container-low overflow-hidden p-4">
         <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDts90TCHREDVXCxbJDzXFGawzP3rD8zmSmk9tgXmxNtbwECEYBURgNgbvzaESdwKrJnz6VtqMBDz7uwg0jSG2RJYvjizNJgwxhiV-HfGuFgESZ19guYIvEzXhDM3vsBIha8L-6mSqZbnJ2V3c4TEVZsR-kZbQNcxKIVFRlZdfBKzCB3lYAbuEqQYelh9u_NOMFudLwUtzqPlCoftpVV6BZu6TTGXXcgXkD0LNIaX-s6lQ3rfm2XEGGC32u6AWAArt3rxJA35tUQQ5T" 
              alt="Editorial Clean Minimalist Space" 
              className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            
            {/* Editorial Quote overlay */}
            <div className="absolute bottom-12 left-12 right-12 z-10 text-white">
              <div className="mb-4">
                <span className="material-symbols-outlined text-4xl opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </div>
              <h3 className="font-headline text-3xl font-bold leading-snug mb-4">
                "완벽한 큐레이션으로 탄생한 나만의 주거지, 그 이상의 공간 경험."
              </h3>
              <p className="font-medium text-white/80 flex items-center gap-2">
                <span className="w-8 h-px bg-white/50 block"></span> 프리미엄 청결을 위한 단 하나의 솔루션
              </p>
            </div>
         </div>
      </div>
    </div>
  );
}
