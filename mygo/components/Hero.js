import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white py-20">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[50%] bg-orange-50/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Logo Badge */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img src="/logo.webp" alt="내꼬 로고" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full shadow-lg" />
        </div>
        
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#1D1D1F] mb-10 leading-[1.1]">
          이건 <span className="text-brand-blue relative inline-block">내꼬<span className="absolute bottom-2 left-0 w-full h-2 bg-brand-blue/10 -z-10 rounded-full"></span></span>니까.
        </h1>

        {/* Subtext */}
        <div className="max-w-2xl mx-auto space-y-6 mb-16">
          <p className="text-xl md:text-2xl text-zinc-600 font-semibold leading-relaxed tracking-tight">
            당신의 소중한 일상을 더 넓게, <br className="md:hidden" /> 프리미엄 공간의 시작
          </p>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
            최첨단 항온·항습 시스템과 3중 보안으로 <br className="hidden md:block" />
            단순한 창고를 넘어선 당신만의 '프라이빗 룸'을 경험하세요.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group relative flex items-center gap-3 bg-[#1D1D1F] text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-black hover:shadow-2xl hover:scale-[1.02] active:scale-95">
            지금 시작하기
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="px-10 py-5 rounded-full text-lg font-bold text-zinc-600 border border-zinc-200 hover:bg-zinc-50 transition-all">
            시설 둘러보기
          </button>
        </div>
      </div>
    </section>
  );
}
