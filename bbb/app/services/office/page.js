import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function OfficeCleaningPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/50 text-primary font-bold text-xs uppercase tracking-widest mb-6">Premium Office Care</span>
              <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-6 mt-2">
                사무실 정기 관리 서비스
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg mb-10">
                단순한 청소를 넘어 비즈니스의 품격을 높이는 맞춤형 오피스 큐레이션. 매일 아침, 새롭게 영감을 주는 쾌적한 업무 공간을 약속합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/reservation">
                  <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[0.98] transition-all">상담 신청하기</button>
                </Link>
                <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors">서비스 소개서 받기</button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                alt="Modern clean office" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eeBG__WCkyHBYyVWAWh0zcvZxiePiuCy2WL1I2RzRFyrBybcIQ-XbExJKznITnT1C83DLw6V3RLI9q3rG5uLmCYvhHlazZtWgVc7QPiy4_ccvNgmEt3XPuhnZTU5EHevwpHewNYvWzvJ_TK9ImUHe0MqcdQ6r4LP-DLgVYNGL2PfnsbkaietaR3LGPIXkz0DoiEC0MuMf8GngxpaZPtpILqpHTdyCJWN1AV79B65dUm1IRDdPnb5nYGBq5dIqwndnPg09JWQspGM"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* Section 1: Why Pristine Office? */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8 text-center mb-16">
            <h2 className="text-4xl font-bold font-headline mb-4">Why Pristine Office?</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">검증된 전문 인력</h3>
              <p className="text-on-surface-variant leading-relaxed">엄격한 신원 조회와 CS 교육을 이수한 오피스 매니저가 전담하여 최상의 퀄리티를 유지합니다.</p>
            </div>
            <div className="bg-surface p-10 rounded-3xl flex flex-col items-center text-center shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">친환경 솔루션</h3>
              <p className="text-on-surface-variant leading-relaxed">직원들의 건강을 최우선으로 생각하여 인체에 무해한 프리미엄 친환경 약재만을 사용합니다.</p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-tertiary-container rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-4">커스텀 스케줄링</h3>
              <p className="text-on-surface-variant leading-relaxed">기업별 업무 환경에 맞춰 주말, 야간, 새벽 등 가장 효율적인 시간에 서비스를 제공합니다.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Standard Work Scope */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <h2 className="text-4xl font-bold font-headline mb-6">표준 작업 범위</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Pristine의 표준 관리 매뉴얼은 120개 이상의 세부 체크리스트를 바탕으로 빈틈없는 청결을 유지합니다.</p>
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-square relative">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="cleaning standard" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVQ3_DPiNr6mJKdy--KSCdvsP5WYbfSRb8dpJQ91Fpv8SSVDSqi0PiLENvubapbJgII9IBnlgvMsCjnlrEriVAg8u6JNxig-xHbzVb9hxMrr5OAC_H0qza_tcx6PLdun72OKDow11vEIWAlsRdm-D8phkZHHgzqshi-uVg34hFkWke4SUlkbbw8z5y0zX8C-1BRqaT2X0slo5aaETTANGAeW-iLCKpf4e1RvBkEtujIsuIn1N_ocMEmcN_E3hbJMkeRaaQjTBNoxTS"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
                  <h4 className="flex items-center text-primary font-bold font-headline text-lg mb-6">
                    <span className="material-symbols-outlined mr-3 bg-primary/10 p-2 rounded-xl">desk</span> 개인 업무 공간
                  </h4>
                  <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 데스크 위 먼지 제거 및 살균</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 파티션 및 모니터 후면 클리닝</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 의자 시트 진드기 케어</li>
                  </ul>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
                  <h4 className="flex items-center text-primary font-bold font-headline text-lg mb-6">
                    <span className="material-symbols-outlined mr-3 bg-primary/10 p-2 rounded-xl">groups</span> 공용 회의실
                  </h4>
                  <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 대형 테이블 지문 및 얼룩 제거</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 화이트보드 및 전자기기 세정</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 카페트 집중 청소 및 탈취</li>
                  </ul>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
                  <h4 className="flex items-center text-primary font-bold font-headline text-lg mb-6">
                    <span className="material-symbols-outlined mr-3 bg-primary/10 p-2 rounded-xl">coffee_maker</span> 탕비실 & 휴게실
                  </h4>
                  <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 싱크대 물때 제거 및 고온 스팀 살균</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 냉장고 내부 정리 및 오염 제거</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 커피머신 주변 상시 청결 유지</li>
                  </ul>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/5">
                  <h4 className="flex items-center text-primary font-bold font-headline text-lg mb-6">
                    <span className="material-symbols-outlined mr-3 bg-primary/10 p-2 rounded-xl">delete</span> 공용 공간 관리
                  </h4>
                  <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 쓰레기 분리 배출 및 수거</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 바닥 진공 및 습식 매뉴얼 관리</li>
                    <li className="flex items-start"><span className="material-symbols-outlined text-primary text-base mr-3 mt-0.5">check_circle</span> 복합기실 등 다목적실 정돈</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Custom Options (Bento Grid) */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold font-headline mb-16 text-center">Custom Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
              <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFe77pHKmXMryBxhVzdLHb2nmHJ6Dg3IX5SMgsllfj9ZIfP3FEdqVGJOWClS6aFcWpBJAgIwPWr2_vyxWZTJnEOh6ibwNlFzoJYvG8hH1X2_OfuIllaBSREG6geS3oeG2119nM1yk2wv23OrbuWNMLL29-QPMuHGYkHPa-bwGOihCEb6jzpXehCnvMh6DiJ954v16VS840kiO19MqesOPN_xZppEnQXDDVI3XNZYPkU6Q1kFEcV95WW2C5na5u9Qou5KQvQQXq8Yaj"
                  alt="Carpet Cleaning"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold font-headline text-white mb-3">프리미엄 카페트 클리닝</h3>
                  <p className="text-white/80 font-medium h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                    특수 고온 스팀 장비를 이용한 심층 진드기 및 얼룩 제거 솔루션입니다. 정기적인 카페트 관리를 통해 쾌적한 오피스 공기를 유지하세요.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-primary-container rounded-3xl p-10 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-headline text-on-primary-container mb-4">전문 유리창 세정</h3>
                  <p className="text-on-primary-container/80 mb-6 font-medium">투명한 시야 확보를 위한 정기적인 외부/내부 유리 정밀 클리닝으로 오피스의 채광을 극대화합니다.</p>
                  <span className="material-symbols-outlined text-6xl text-primary opacity-60 mix-blend-color-burn">window</span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary opacity-10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              </div>
              <div className="md:col-span-1 bg-secondary-container rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 bg-white/50 p-4 rounded-xl">air</span>
                <h4 className="font-bold font-headline text-on-secondary-container mb-1">에어컨 필터</h4>
                <p className="text-sm text-on-secondary-container/70 font-medium">분기별 정밀 세척</p>
              </div>
              <div className="md:col-span-1 bg-tertiary-container rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-4 bg-white/50 p-4 rounded-xl">pest_control</span>
                <h4 className="font-bold font-headline text-on-tertiary-container mb-1">해충 방제</h4>
                <p className="text-sm text-on-tertiary-container/70 font-medium">기업 방역 패키지</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Corporate Benefits */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[40px] p-12 md:p-16 shadow-lg border border-outline-variant/10 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold font-headline mb-10 text-on-surface">Corporate Benefits</h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <span className="material-symbols-outlined text-primary text-3xl">receipt_long</span>
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-xl mb-2 text-on-surface">매달 간편한 세금계산서 발행</h4>
                      <p className="text-on-surface-variant leading-relaxed">기업 전용 관리자 페이지에서 모든 결제 및 증빙 서류를 한눈에 관리하세요.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <span className="material-symbols-outlined text-primary text-3xl">savings</span>
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-xl mb-2 text-on-surface">정기 구독 최대 20% 할인</h4>
                      <p className="text-on-surface-variant leading-relaxed">6개월 이상 장기 계약 시, 프리미엄 서비스를 합리적인 비용으로 제공합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-2xl">
                      <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-xl mb-2 text-on-surface">기업 전담 매니저 배정</h4>
                      <p className="text-on-surface-variant leading-relaxed">청소 이슈 발생 시 2시간 이내 현장 대응이 가능한 전담 고객센터를 운영합니다.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-12 rounded-3xl border border-outline-variant/20 shadow-inner text-center">
                <h3 className="text-2xl font-bold font-headline mb-8 text-on-surface">우리 사무실 견적 확인하기</h3>
                <div className="space-y-4 mb-10">
                  <div className="bg-surface-container-lowest p-5 rounded-2xl text-left flex justify-between items-center shadow-sm">
                    <span className="text-on-surface-variant font-medium">사무실 규모</span>
                    <span className="font-bold text-on-surface">50평 이하</span>
                  </div>
                  <div className="bg-surface-container-lowest p-5 rounded-2xl text-left flex justify-between items-center shadow-sm">
                    <span className="text-on-surface-variant font-medium">방문 횟수</span>
                    <span className="font-bold text-on-surface">주 3회</span>
                  </div>
                </div>
                <Link href="/reservation">
                  <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-5 rounded-full font-bold text-lg shadow-md hover:shadow-lg active:scale-[0.98] transition-all">
                    실시간 상담 시작
                  </button>
                </Link>
                <p className="mt-6 text-sm text-on-surface-variant font-medium">평균 5분 이내 전문 매니저가 답변드립니다.</p>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 w-full border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-8 py-12 text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="text-lg font-bold text-teal-800 mb-4 font-headline">Pristine Editorial</div>
              <p className="text-slate-500 max-w-xs mb-6 leading-relaxed">프리미엄 공간 관리를 통해 당신의 비즈니스에 정돈된 아름다움을 더합니다.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-teal-700">빠른 링크</h5>
              <ul className="space-y-2">
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">개인정보 처리방침</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">이용약관</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">채용 안내</span></Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-teal-700">고객 지원</h5>
              <ul className="space-y-2">
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">문의하기</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">자주 묻는 질문</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:text-teal-700 transition-colors cursor-pointer">지속 가능성</span></Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
            <p className="text-slate-500">© 2024 Pristine Editorial. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-700 transition-colors">public</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-700 transition-colors">chat</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-700 transition-colors">alternate_email</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
