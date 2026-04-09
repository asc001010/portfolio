import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/bbb/Navbar';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-20 pb-12 px-8 md:px-24 text-center">
        <span className="text-[#00838f] font-semibold text-sm tracking-widest">RESERVATION</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">어떤 종류의 케어가 필요하신가요?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          프리스틴클린의 큐레이션된 서비스 중 고객님의 상황에 가장 알맞은 서비스를 선택해주세요.
        </p>
      </section>

      {/* Service Selection Grid */}
      <section className="px-8 md:px-24 pb-24 md:pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service Option 1 */}
          <Link href="/bbb/reservation" className="group">
            <div className="bg-white p-8 rounded-3xl h-full shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#f1f5f9] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:bg-[#00838f] group-hover:text-white transition-colors">
                🧹
              </div>
              <h3 className="text-2xl font-bold mb-3">정기 관리 케어</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                바쁜 일상 속, 항상 쾌적한 주거 환경을 유지하고 싶으신 분들을 위한 주별/월별 프리미엄 관리.
              </p>
              <span className="text-[#006064] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                선택하기 <span className="text-lg">→</span>
              </span>
            </div>
          </Link>

          {/* Service Option 2 */}
          <Link href="/bbb/reservation" className="group">
            <div className="bg-[#006064] text-white p-8 rounded-3xl h-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-3xl backdrop-blur-sm">
                🏠
              </div>
              <h3 className="text-2xl font-bold mb-3">이사 · 입주 청소</h3>
              <p className="text-cyan-50/80 leading-relaxed mb-8 relative z-10">
                가장 설레는 새로운 시작, 보이지 않는 먼지와 유해물질까지 완벽하게 제거하여 안식처를 준비합니다.
              </p>
              <span className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all relative z-10">
                선택하기 <span className="text-lg">→</span>
              </span>
              {/* Background Decor */}
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-[120px] pointer-events-none transition-transform group-hover:scale-110">
                ✨
              </div>
            </div>
          </Link>

          {/* Service Option 3 */}
          <Link href="/bbb/reservation" className="group">
            <div className="bg-white p-8 rounded-3xl h-full shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#f1f5f9] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:bg-[#00838f] group-hover:text-white transition-colors">
                🏢
              </div>
              <h3 className="text-2xl font-bold mb-3">오피스 & 상업 공간</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                창의적인 비즈니스는 쾌적한 환경에서 시작됩니다. 오피스, 쇼룸, 상업 시설을 위한 전문 기업 케어.
              </p>
              <span className="text-[#006064] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                선택하기 <span className="text-lg">→</span>
              </span>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
