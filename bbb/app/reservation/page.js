import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ReservationPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header Section: Editorial Intro */}
        <header className="mb-16 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold tracking-wider uppercase mb-6">
            예약 단계
          </span>
          <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-on-background mb-6 leading-tight">
            당신만의 <span className="text-primary italic">안식처를 예약하세요.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed">
            거주 공간에 맞춘 세심한 클리닝 경험을 제공합니다. 아래 정보를 입력하여 공간의 회복을 위한 일정을 잡아보세요.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: The Form Journey */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: Destination */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">1</span>
                <h2 className="font-headline font-bold text-2xl">서비스 장소</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">주소 입력</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" placeholder="도로명 또는 지번 주소" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant ml-1">상세 주소 (선택)</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/40 transition-all outline-none" placeholder="아파트, 동/호수 등" type="text" />
                </div>
                <div className="md:col-span-2 relative h-64 rounded-xl overflow-hidden shadow-sm">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ4A0XkLO-9t-1raWBgbuNFc4aI0CHsDPZRy74H7BpRD2SkLzH85CL_kd19d5tHwgRg2oJWe1ZQNaXi8GXbQapru3JgDgOazqw3hxBb8FF3FxCZVJL3IDjWfKVvaHvbKK0kVjW--z8CuyjIeEtwwMp0ScsWcNvqjtVOJ0dUH3-3p1tA5qFNqQGYI9gJ4XLNbM0-CLNcFjLoKjp5skoRoBmjJd2YHdiZR9SHfX6SMirTXrGACfjy8c1vFMJfzQp7xmzVlsdvOuXeLYx" />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                </div>
              </div>
            </section>

            {/* Section 2: Temporal Selection */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">2</span>
                <h2 className="font-headline font-bold text-2xl">일정 선택</h2>
              </div>
              {/* Date Selection Bento Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
                <button className="flex flex-col items-center py-4 rounded-xl bg-primary text-on-primary shadow-lg scale-105">
                  <span className="text-xs uppercase font-bold opacity-80">월</span>
                  <span className="text-xl font-bold">12</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">화</span>
                  <span className="text-xl font-bold">13</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">수</span>
                  <span className="text-xl font-bold">14</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">목</span>
                  <span className="text-xl font-bold">15</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">금</span>
                  <span className="text-xl font-bold">16</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">토</span>
                  <span className="text-xl font-bold">17</span>
                </button>
                <button className="flex flex-col items-center py-4 rounded-xl bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="text-xs uppercase font-bold opacity-60">일</span>
                  <span className="text-xl font-bold">18</span>
                </button>
              </div>
              {/* Time Slots */}
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant font-medium border border-outline-variant/10 hover:border-primary/40 transition-all">오전 08:00</button>
                <button className="px-6 py-3 rounded-full bg-primary text-on-primary font-medium shadow-md">오전 11:30</button>
                <button className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant font-medium border border-outline-variant/10 hover:border-primary/40 transition-all">오후 02:00</button>
                <button className="px-6 py-3 rounded-full bg-surface-container-high text-on-surface-variant font-medium border border-outline-variant/10 hover:border-primary/40 transition-all">오후 04:30</button>
              </div>
            </section>

            {/* Section 3: Secure Settlement */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">3</span>
                <h2 className="font-headline font-bold text-2xl">안전 결제</h2>
              </div>
              <div className="space-y-4">
                <div className="group relative p-6 rounded-2xl bg-surface-container-lowest border-2 border-primary cursor-pointer transition-all shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-3xl">credit_card</span>
                      <div>
                        <p className="font-bold">신용/체크카드</p>
                        <p className="text-sm text-on-surface-variant">안전하게 암호화된 결제</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-4">
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm outline-none focus:ring-1 focus:ring-primary/20" placeholder="카드 소유자 성함" type="text" />
                    </div>
                    <div className="md:col-span-2">
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm outline-none focus:ring-1 focus:ring-primary/20" placeholder="카드 번호" type="text" />
                    </div>
                    <div>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm outline-none focus:ring-1 focus:ring-primary/20" placeholder="MM/YY" type="text" />
                    </div>
                    <div>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-3 text-sm outline-none focus:ring-1 focus:ring-primary/20" placeholder="CVC" type="text" />
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-high opacity-70 cursor-pointer hover:opacity-100 transition-all border border-transparent hover:border-primary/20 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-500 text-3xl">account_balance_wallet</span>
                    <div>
                      <p className="font-bold text-slate-700">간편 결제 (카카오페이/네이버페이 등)</p>
                      <p className="text-sm text-slate-500">Apple Pay 또는 Google Pay 포함</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Summary Sticky Panel */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-2xl shadow-primary/5 space-y-8 border border-outline-variant/10">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRT5oGnx0y7R6422Fc43rWIXmu7koFgMSjL5Amgkq0H9tJmZ8KZeJlPdjil6eC3DprJk1uhvRmzfoGghLmgJn-CS94h-PiPKymTdNQW8E3z4FM6c5sC80pxfaObf7yo-oYnrQgxl4KKqRXm_f4i85qB_AmIa5RxJpV37B6xabtYWfJ-RKhwHR-SJiarHig3Jfk0iflAv3KYDDi59dWMq24gSO8NLwF19Xl1WM_JXINRW4Ogf_3ZA1hrcpqvaTb101h9zUgTjJR55Lq" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-on-primary text-xl font-bold font-headline leading-tight">가정 청소 프리미엄 플랜</p>
                  <p className="text-white/80 text-sm">시그니처 컨시어지 서비스</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">서비스 기본</p>
                    <p className="font-bold text-on-surface">종합 디테일 클리닝</p>
                  </div>
                  <p className="font-bold text-primary">₩180,000</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">세금 및 수수료</p>
                    <p className="font-bold text-on-surface">표준 환경 부담금</p>
                  </div>
                  <p className="font-bold text-primary">₩14,400</p>
                </div>
                <div className="pt-6 border-t border-dashed border-outline-variant/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-2xl font-extrabold font-headline text-on-background">총 결제 금액</span>
                    <span className="text-2xl font-extrabold font-headline text-primary">₩194,400</span>
                  </div>
                  <p className="text-xs text-on-surface-variant text-right">숨겨진 수수료 없음.</p>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                예약 완료하기
              </button>
              <div className="flex items-center gap-3 justify-center text-on-surface-variant text-xs font-medium">
                <span className="material-symbols-outlined text-sm">lock</span>
                SSL 보안 및 PCI 표준 준수
              </div>
            </div>
            {/* Testimonial / Social Proof */}
            <div className="mt-8 p-6 bg-secondary-container/30 rounded-2xl">
              <div className="flex gap-1 mb-2">
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="text-sm italic text-on-secondary-container leading-relaxed">
                "예약 과정 자체가 서비스만큼이나 매끄러웠습니다. 시작부터 끝까지 진정한 프리미엄 경험을 느낄 수 있었습니다."
              </p>
              <p className="mt-3 text-xs font-bold text-on-secondary-container">— Julian V., 서초구</p>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Mapping */}
      <footer className="bg-slate-50 dark:bg-slate-950 w-full py-16 border-t border-surface-container-high">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto font-body">
          <div className="space-y-4">
            <div className="text-xl font-bold text-teal-800 dark:text-teal-100">Pristine Editorial</div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              © 2024 Pristine Editorial. 깨끗함의 안식처.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">서비스</h4>
            <Link href="/services"><span className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">딥 클리닝</span></Link>
            <Link href="/services"><span className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">입주/이사 청소</span></Link>
            <Link href="/services"><span className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">특수 서비스</span></Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">고객 지원</h4>
            <span className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">문의하기</span>
            <span className="text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors cursor-pointer">개인정보 처리방침</span>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-teal-700 dark:text-teal-400 mb-2">뉴스레터 구독</h4>
            <div className="flex gap-2">
              <input className="bg-surface-container-high border-none rounded-lg px-4 py-2 w-full text-sm outline-none" placeholder="이메일 주소" type="email" />
              <button className="bg-primary text-on-primary px-4 py-2 rounded-lg material-symbols-outlined">arrow_forward</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
