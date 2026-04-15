"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center pt-24 pb-8 overflow-hidden bg-[#FAFAFC] pattern-grid-lg">
      
      {/* Animated Mesh Gradient Background & Logo Watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-cyan-200/30 to-blue-100/30 blur-[100px]" 
        />

      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-[#1D1D1F] mb-8 leading-[1.05]"
        >
          이건 <br className="md:hidden" />
          <span className="text-gradient">
            내꼬
          </span>니까.
        </motion.h1>

        {/* Subtext */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6 mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-zinc-800 font-extrabold leading-snug tracking-tight">
            당신의 소중한 일상을 더 넓게, <br className="hidden md:block" /> 완벽한 프라이빗 룸의 시작
          </p>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
            최첨단 항온·항습 시스템과 3중 보안. <br className="hidden md:block" />
            단순한 짐 보관을 넘어 당신만의 라이프스타일 룸을 경험하세요.
          </p>
        </motion.div>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a 
            href="#branch" 
            className="group relative flex items-center justify-center gap-3 bg-brand-blue text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_20px_40px_-15px_rgba(0,122,255,0.5)] hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span>지금 시작하기</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mt-16 flex flex-col items-center gap-3 animate-bounce"
      >
        <span className="text-[11px] uppercase tracking-[0.3em] font-black text-zinc-500">Scroll</span>
        <div className="w-1 h-12 bg-gradient-to-b from-zinc-300 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
