'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PristineEditorialPage() {
  const [serviceMode, setServiceMode] = useState('residential');
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-6">
                분위기를 만드는 <span className="text-primary italic">기술.</span>
              </h1>
              <p className="text-on-surface-variant text-xl leading-relaxed max-w-lg mb-10">
                엄선된 클리닝 서비스 컬렉션을 만나보세요. 집중적인 딥 클리닝부터 완벽한 공간 변화까지, 모든 공간을 안식처로 대합니다.
              </p>
              <div className="flex gap-4">
                <div className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified_user</span>
                  <span className="text-on-surface-variant font-medium">책임 보험 가입</span>
                </div>
                <div className="bg-surface-container-low px-6 py-4 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  <span className="text-on-surface-variant font-medium">친환경 인증</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                alt="깨끗하고 미니멀한 거실" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDts90TCHREDVXCxbJDzXFGawzP3rD8zmSmk9tgXmxNtbwECEYBURgNgbvzaESdwKrJnz6VtqMBDz7uwg0jSG2RJYvjizNJgwxhiV-HfGuFgESZ19guYIvEzXhDM3vsBIha8L-6mSqZbnJ2V3c4TEVZsR-kZbQNcxKIVFRlZdfBKzCB3lYAbuEqQYelh9u_NOMFudLwUtzqPlCoftpVV6BZu6TTGXXcgXkD0LNIaX-s6lQ3rfm2XEGGC32u6AWAArt3rxJA35tUQQ5T"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* Service Bento Grid */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">추천 서비스</h2>
                <p className="text-on-surface-variant mt-2">당신의 주거 및 작업 환경을 위한 맞춤형 솔루션.</p>
              </div>
              <div className="flex gap-1 bg-surface-container-high p-1 rounded-full mb-2">
                <button 
                  onClick={() => setServiceMode('residential')}
                  className={`px-6 py-2 flex-1 rounded-full text-sm font-semibold transition-all ${serviceMode === 'residential' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
                >
                  주거용
                </button>
                <button 
                  onClick={() => setServiceMode('commercial')}
                  className={`px-6 py-2 flex-1 rounded-full text-sm font-semibold transition-all ${serviceMode === 'commercial' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-highest'}`}
                >
                  상업용
                </button>
              </div>
            </div>
            
            {serviceMode === 'residential' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Deep Clean Card - Large */}
                <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-3xl">sanitizer</span>
                    </div>
                    <span className="text-2xl font-headline font-bold text-on-surface">₩249,000부터</span>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">프리스틴 딥 클리닝</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-8">
                      저희의 시그니처 정밀 청소입니다. 걸레받이부터 천장 선풍기까지 모든 구석구석을 관리하여, 당신의 집을 원래의 깨끗한 상태로 되돌려 놓습니다.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">수납장 내부</span>
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">창문 틀</span>
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">가전제품 디테일링</span>
                    </div>
                  </div>
                  <Link href="/reservation" className="w-full">
                    <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-2xl font-bold tracking-wide active:scale-[0.98] transition-transform">
                      딥 클리닝 선택하기
                    </button>
                  </Link>
                </div>

                {/* Move In/Out Card */}
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center mb-12">
                    <span className="material-symbols-outlined text-secondary text-3xl">local_shipping</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">이사 / 입주 청소</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow">
                    새로운 시작을 완벽하게, 혹은 떠나는 자리에 청결을 남기세요. 빈 집을 위한 포괄적인 살균 소독 서비스입니다.
                  </p>
                  <div className="text-xl font-headline font-bold text-on-surface mb-6">₩315,000부터</div>
                  <Link href="/reservation" className="w-full mt-auto">
                      <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-2xl font-bold active:scale-[0.98] transition-transform">
                      서비스 선택하기
                      </button>
                  </Link>
                </div>

                {/* Recurring Maintenance */}
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center mb-12">
                    <span className="material-symbols-outlined text-tertiary text-3xl">event_repeat</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">정기 관리 서비스</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow">
                    매주 또는 격주 방문을 통해 당신의 안식처가 가진 미적 완성도를 유지해 드립니다.
                  </p>
                  <div className="text-xl font-headline font-bold text-on-surface mb-6">₩120,000부터 / 회당</div>
                  <Link href="/reservation" className="w-full mt-auto">
                      <button className="w-full bg-surface-container-high text-on-surface-variant py-4 rounded-2xl font-bold active:scale-[0.98] transition-transform">
                      서비스 선택하기
                      </button>
                  </Link>
                </div>

                {/* Specialty: Luxury Linens */}
                <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
                  <img 
                    alt="럭셔리 침구" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDseroySznxKS3wkYv64jQ9rXouIUdgCn4FnCgKrCik9EkBOinqPRjDsNtsZ8niNtDrdJOl7bHpUOPaCLVKWfiIzKiz6z26ldOT3_2xSjOiWP_yt63EDlK09bcZFyuy23ZRQFICEhHKKYPbLxb8tYY6dfLBgJygBop5HhjB3O0egUqsdnsqs6h-ovPQzn3HxRsa1J21PqJ20MJf9-me6OPboDBbe2QYQB9_1wdTwPIOIx2qRIQrHw9MdmWoTHkbm0qt4HJvxfDxI_bf"
                  />
                  <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-[2px]"></div>
                  <div className="relative h-full p-8 flex flex-col justify-end text-white">
                    <h3 className="text-3xl font-headline font-bold mb-2">특수 케어: 패브릭 & 섬유</h3>
                    <p className="text-white/80 max-w-md mb-6">고급 린넨, 커튼, 소파 등에 대해 친환경 프리미엄 용제를 사용한 섬세한 케어를 제공합니다.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">별도 견적</span>
                      <button className="bg-white text-on-surface px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">문의하기</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Office Deep Clean Card - Large */}
                <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-3xl">domain</span>
                    </div>
                    <span className="text-2xl font-headline font-bold text-on-surface">맞춤 견적</span>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">비즈니스 공간 클리닝</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-8">
                      고급 오피스 및 브랜드 쇼룸을 위한 최상의 컨디션 유지 솔루션. 직원과 고객에게 기업의 신뢰와 전문성을 전달하는 공간으로 탈바꿈시킵니다.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">대형 유리창 관리</span>
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">미팅룸 소독</span>
                      <span className="bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-full text-sm font-medium">바닥 왁싱 코팅</span>
                    </div>
                  </div>
                  <Link href="/reservation" className="w-full">
                    <button className="w-full bg-secondary text-on-secondary py-4 rounded-2xl font-bold tracking-wide active:scale-[0.98] transition-transform">
                      상업용 딥 클리닝 예약하기
                    </button>
                  </Link>
                </div>

                {/* Office Recurring Card */}
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm flex flex-col hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center mb-12">
                    <span className="material-symbols-outlined text-tertiary text-3xl">corporate_fare</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">정기 오피스 케어</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow">
                    매일 오전 또는 야간, 직원들이 업무에만 집중할 수 있도록 사무 환경을 최상의 상태로 유지합니다.
                  </p>
                  <div className="text-xl font-headline font-bold text-on-surface mb-6">₩350,000부터 / 월</div>
                  <Link href="/reservation" className="w-full mt-auto">
                      <button className="w-full bg-tertiary-container text-on-tertiary-container py-4 rounded-2xl font-bold active:scale-[0.98] transition-transform">
                      정기 케어 상담하기
                      </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Transparency Section */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-6">정직한 정찰제</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                숨겨진 비용이나 놀랄 일은 없습니다. 에디토리얼 표준에 따라 가격을 책정하여, 모든 구석이 마땅한 관리를 받을 수 있도록 합니다.
              </p>
              <div className="mt-8 space-y-4">
                <div className="items-start gap-4 flex">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <p className="font-bold">고정 요금 옵션</p>
                    <p className="text-sm text-on-surface-variant text-pretty">표준 주택 구조에 대한 예측 가능한 비용.</p>
                  </div>
                </div>
                <div className="items-start gap-4 flex">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <div>
                    <p className="font-bold">시간제 정밀 케어</p>
                    <p className="text-sm text-on-surface-variant text-pretty">독특하거나 초대형 공간을 위한 맞춤형 요금.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pricing Cards */}
              <div className="bg-surface-container-high p-8 rounded-3xl">
                <h4 className="font-headline font-bold text-xl mb-2">원룸 / 1.5룸</h4>
                <p className="text-on-surface-variant mb-6 text-sm">도심 속 휴식처와 작은 평수 공간에 적합합니다.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">정기 관리</span> <span className="font-bold">₩120,000</span></li>
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">딥 클리닝</span> <span className="font-bold">₩249,000</span></li>
                </ul>
                <button className="text-primary font-bold flex items-center gap-2 text-sm hover:gap-4 transition-all">상세 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
              <div className="bg-surface-container-high p-8 rounded-3xl">
                <h4 className="font-headline font-bold text-xl mb-2">2-3룸</h4>
                <p className="text-on-surface-variant mb-6 text-sm">표준적인 가족 주택 및 빌라를 위한 플랜입니다.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">정기 관리</span> <span className="font-bold">₩185,000</span></li>
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">딥 클리닝</span> <span className="font-bold">₩380,000</span></li>
                </ul>
                <button className="text-primary font-bold flex items-center gap-2 text-sm hover:gap-4 transition-all">상세 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
              <div className="bg-surface-container-high p-8 rounded-3xl">
                <h4 className="font-headline font-bold text-xl mb-2">4룸 이상</h4>
                <p className="text-on-surface-variant mb-6 text-sm">추가 인력이 필요한 넓은 대저택용 플랜입니다.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">정기 관리</span> <span className="font-bold">₩260,000+</span></li>
                  <li className="flex justify-between text-sm"><span className="text-on-surface-variant">딥 클리닝</span> <span className="font-bold">₩550,000+</span></li>
                </ul>
                <button className="text-primary font-bold flex items-center gap-2 text-sm hover:gap-4 transition-all">상세 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
              <div className="bg-primary text-on-primary p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg">
                <h4 className="font-headline font-bold text-xl mb-2">대형 공간인가요?</h4>
                <p className="text-white/80 mb-6 text-sm">상업용 또는 특수 부동산을 위한 맞춤 견적을 받아보세요.</p>
                <Link href="/reservation">
                    <button className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95">견적 받기</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Shell */}
      <footer className="bg-slate-50 py-16 w-full border-t border-surface-container-highest">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold text-teal-800">Pristine Editorial</span>
            <p className="mt-4 text-slate-600 leading-relaxed font-jakarta">© 2024 프리스틴 에디토리얼. 청결함의 안식처.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-teal-700">서비스</h5>
            <nav className="flex flex-col gap-2">
              <Link href="/services"><span className="text-slate-600 hover:text-teal-500 transition-colors cursor-pointer">딥 클리닝</span></Link>
              <Link href="/services"><span className="text-slate-600 hover:text-teal-500 transition-colors cursor-pointer">이사 / 입주 청소</span></Link>
              <Link href="/services"><span className="text-slate-600 hover:text-teal-500 transition-colors cursor-pointer">특수 케어 서비스</span></Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-teal-700">고객 지원</h5>
            <nav className="flex flex-col gap-2">
              <span className="text-slate-600 hover:text-teal-500 transition-colors cursor-pointer">문의하기</span>
              <span className="text-slate-600 hover:text-teal-500 transition-colors cursor-pointer">개인정보 처리방침</span>
            </nav>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-teal-700">뉴스레터</h5>
            <div className="flex gap-2">
              <input className="bg-white border text-sm border-gray-200 rounded-full px-4 py-2 w-full focus:ring-2 focus:ring-primary/20 outline-none" placeholder="이메일 주소" type="email"/>
              <button className="bg-primary text-on-primary p-2 rounded-full flex items-center justify-center aspect-square">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">public</span>
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">potted_plant</span>
              <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">spa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
