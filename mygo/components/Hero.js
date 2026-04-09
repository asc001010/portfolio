import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white py-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] mb-8 leading-tight">
          이건 <span className="text-brand-blue relative">내꼬<span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400/30 rounded-full blur-[1px]"></span></span>(Naekko)니까!
        </h1>

        {/* Subtext */}
        <div className="max-w-2xl mx-auto space-y-4 mb-14">
          <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed">
            누구에게도 방해받고 싶지 않은 당신만의 소중한 목록들.
          </p>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
            온도와 습도까지 완벽하게 관리되는 <br className="hidden md:block" />
            나만의 프라이빗 공간 <span className="font-bold text-[#1D1D1F]">'내꼬'</span>를 선물하세요.
          </p>
        </div>

        {/* CTA Button */}
        <button className="group relative flex items-center gap-3 bg-[#1B2435] text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:bg-[#121824] hover:shadow-xl hover:shadow-blue-900/20 active:scale-95">
          1:1 프라이빗 상담 신청
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
