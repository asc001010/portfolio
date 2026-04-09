import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ReviewsPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section: Editorial Title */}
        <section className="mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-4">이용 후기 & 고객 경험</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Pristine Editorial의 프리미엄 케어를 경험한 고객님들의 진솔한 이야기입니다. 깨끗함 그 이상의 가치를 확인해보세요.</p>
        </section>

        {/* Rating Summary Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Total Score */}
          <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl flex flex-col justify-center items-center text-center shadow-sm">
            <span className="text-on-surface-variant font-bold tracking-widest text-sm uppercase mb-4">전체 평점</span>
            <div className="text-7xl font-headline font-extrabold text-primary mb-2">4.9</div>
            <div className="flex gap-1 text-primary mb-4">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <p className="text-on-surface-variant text-sm">전체 2,480개의 리뷰 기반</p>
          </div>
          {/* Detailed Stats */}
          <div className="md:col-span-8 bg-surface-container-low p-10 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
              <div className="flex flex-col justify-between">
                <h3 className="font-headline text-xl font-bold mb-6">항목별 평점</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-semibold"><span>청소 숙련도</span><span>5.0</span></div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[100%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-semibold"><span>시간 준수</span><span>4.8</span></div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[96%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1 font-semibold"><span>친절도</span><span>4.9</span></div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">verified_user</span>
                <p className="text-on-surface font-bold text-lg mb-2">100% 실제 이용 고객</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">모든 리뷰는 서비스를 직접 이용하신 고객님들만 작성하실 수 있어 더욱 신뢰할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Reviews: Asymmetric Grid */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight">포토 리뷰 갤러리</h2>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline outline-none">전체보기 <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden group relative shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVldMbKAcgjgLR6NSDFoZZnjyw1xSRyjsWEwehihXq1R3guzs-AnLG7tY-kX4L1zWoBU2xFMVM0TxsXbr1nYMCl84eQifT4gosmInxnqEMV0f1e219DQITOv74kOO-VFiKP-ECBEqiNoM7aGUmDbek1Mw62kl9q_UZmUyTGxenR5HX3XOUVXX8xrZXmYc1L_qHf0JT_Wy0G1TKLVCdGfCz1qkuhyucs7eQom7UcUs_JqtU3dAxTkYFs8-a3NUt5MhfDjomuUXHoNqw" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Deep Cleaning</span>
                <span className="text-white/80 text-xs">김*혜 고객님</span>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group relative shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpjI7EXsqxXgkenmBzRMkOtra9puf8dFRlZY0iV2VAzp6t3MnDlv9SnxYuWfPJr7tPOPixMt6vah0UBii7inXQ6TNfRp--TqlqaqIZ6lXbDKGRnZegwYYnOkVwdQVEwhlO4IKClaEGnYaB_9k29Kem5nQmBKvIZ-w_tBLPaQRhsZ5uFsE5kCXhGPjK0vOaik01N-gjHMwJayDAP4tsfIIK2rSPeGXc8w8fUD5NTL2WRfIOfq_3Uhyg73DFO7CfSYsXl_juoFUgjoIa" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Bathroom Special</span>
                <span className="text-white/80 text-xs">이*준 고객님</span>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden group relative md:mt-8 shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo1kip6dPA7DahVIz1h7YDlcENl9l_vNKECVygnh22ivSk_jHYg-EcZW8iPA_K75ZgLKAe8xjpqZMr-eyDJrJ-Qt6Trzo7SlQlUNzce9YZ7rO7gpS3W3aYIpyIyHhy0oOZW1hVKSutg1eo-zcu5o-H6Va4YZcZG8ggGY_ZTs3XYLKZZW7W8zQY__0x9kq6qfeVvNB7eMW-hhl-ccXVbtezaKRz__mQHJPETt-ELsjjdVWV_GJ7B_5Ym29RwF-YSYE6kI1FehnveDEH" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Kitchen Care</span>
                <span className="text-white/80 text-xs">최*아 고객님</span>
              </div>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden group relative shadow-md">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkqEooqnXDNDg8Lu3FvpUm4HXtJtF6GUMLzngl3G5gOCmcqkb8z10ul_rx3z9rbNK2_OxHqUCnXCPEDKPQL6QTlZjFGftsx_Fi-2S9QKP1CB_q03mMnIdF6sD1tnODUnHZMkOy1OTzpIH5wnuKxSMZXRmu_XkzqwR1dV3sy1ZptJNznDbC3Zmi8vdqbbm6MVG_TSLr9XZJ--NjTPVcBWG5W5S9jbn2ARId_I09VI07EgIj0ZJaojQ_LNDaE-qgMM8NTIDAlSR56tyZ" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-white text-xs font-bold uppercase tracking-widest">Hotel Style</span>
                <span className="text-white/80 text-xs">박*서 고객님</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filtering */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="flex gap-2 p-1 bg-surface-container-high rounded-full">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm outline-none">전체 리뷰</button>
            <button className="text-on-surface-variant px-6 py-2 rounded-full font-medium text-sm hover:bg-surface-container-highest transition-colors outline-none">포토 리뷰</button>
            <button className="text-on-surface-variant px-6 py-2 rounded-full font-medium text-sm hover:bg-surface-container-highest transition-colors outline-none">베스트 리뷰</button>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container-highest border-none rounded-full py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/40 text-sm outline-none" placeholder="검색어를 입력하세요" type="text" />
            </div>
            <button className="flex items-center gap-2 bg-surface-container-lowest px-4 py-3 rounded-xl font-semibold text-sm border border-outline-variant/15 outline-none hover:bg-surface-container-low transition-colors shadow-sm">
                최신순 <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        </section>

        {/* Detailed Review List */}
        <section className="space-y-6">
          {/* Review Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_32px_32px_-4px_rgba(42,52,53,0.06)] group transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-lg shadow-sm">H</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">한*우 고객님</span>
                    <span className="text-xs text-on-surface-variant/60">2024.03.24</span>
                  </div>
                  <div className="flex text-primary gap-0.5">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">정기 관리 서비스</span>
                <span className="bg-primary-container/30 px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/10">클리너: Elena</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <h4 className="font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">"정말 세심하게 구석구석 챙겨주셔서 감동했습니다."</h4>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  이사 후 첫 정기 관리를 신청했는데, 제가 놓치기 쉬운 창틀이나 가구 윗부분 먼지까지 완벽하게 제거해주셨어요. 
                  엘레나 클리너님의 전문적인 손길 덕분에 집안 분위기가 완전히 바뀌었습니다. 서비스 종료 후 관리 팁까지 친절하게 설명해주셔서 정말 만족스러웠습니다.
                </p>
              </div>
              <div className="md:col-span-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <div className="min-w-[120px] h-32 rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhvG2vvQLypqsObJmvRs_O2GRX7DRsrGBXSsu7jsoV0ktFZp_e1f4V4rOIJtK1PDobt-aqRLzN386u8Q8Xxx6A0o-Vo12kQ5L8p_b_X8b-3AimKOuD5glzt-JyOpsGUugLw6kr4AtWEZT7anxT_t1g1T3gKeubWLcwMaaZUz1iSzJ4r5Be1ffrKiN7zjLe0OxDmrLIM-Q6gUy3_54JZ1_Z5TPaH-_5cOqMSV4M7d1hui8dkBY0Yr1REEJyb-XJzCF0JuFPXVqlnkCt" />
                </div>
                <div className="min-w-[120px] h-32 rounded-lg overflow-hidden shadow-md">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7sT8_RLUFfT0drC4ADqlUxXg3OORcoMhmf2WDSW5XBOz7pi1wv22dGCfgEqsiTgAYXUGc_eQts8vD_QUzZ93sSMrHqleWiNMQPZztBuE-az2DXIbmwNes1HiNfZskq9Zp0x8zP0y0tAWLZhT0eT4frkixhcllH_5jNR7sjVbzDTr6XKqxRRZ1_AsG_kaboxrZG8vMimP8oGhekH6xeS8_hFhuYzxVUbiMo0f4UJY1GGrLb3GZkH88f5E9WlrybVk5DEU2LQjTj3oQ" />
                </div>
              </div>
            </div>
          </div>
          {/* Review Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_32px_32px_-4px_rgba(42,52,53,0.06)] group transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg shadow-sm">S</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">심*지 고객님</span>
                    <span className="text-xs text-on-surface-variant/60">2024.03.22</span>
                  </div>
                  <div className="flex text-primary gap-0.5">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 0" }}>star</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">욕실 특화 서비스</span>
                <span className="bg-primary-container/30 px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/10">클리너: Marco</span>
              </div>
            </div>
            <div className="md:col-span-8">
              <h4 className="font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">"전문 장비의 차이가 확실히 느껴지네요."</h4>
              <p className="text-on-surface-variant leading-relaxed">
                화장실 곰팡이 때문에 고민이었는데, 가져오신 전문 장비로 말끔히 해결해주셨어요. 친절하시고 시간도 정확하게 지켜주셔서 다음에도 또 이용하고 싶습니다. 
                다만 예약이 조금 밀려있어서 미리 신청해야 하는 점이 아쉬웠지만 결과물은 대만족입니다!
              </p>
            </div>
          </div>
          {/* Review Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_32px_32px_-4px_rgba(42,52,53,0.06)] group transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-bold text-lg shadow-sm">K</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold">강*윤 고객님</span>
                    <span className="text-xs text-on-surface-variant/60">2024.03.20</span>
                  </div>
                  <div className="flex text-primary gap-0.5">
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/10">딥 클리닝</span>
                <span className="bg-primary-container/30 px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/10">클리너: Elena</span>
              </div>
            </div>
            <div className="md:col-span-8">
              <h4 className="font-bold text-xl mb-4 leading-snug group-hover:text-primary transition-colors">"맞벌이 부부에게 최고의 선물입니다."</h4>
              <p className="text-on-surface-variant leading-relaxed">
                평일에 바빠서 집안일이 늘 산더미였는데, 엘레나 클리너님이 오신 날은 퇴근길이 행복합니다. 
                집에 들어설 때 나는 은은한 아로마 향과 완벽하게 정리된 침구류를 보면 정말 대접받는 기분이에요. 벌써 세 번째 이용 중인데 매번 변함없는 퀄리티에 감사드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors outline-none">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary font-bold shadow-md outline-none">1</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors outline-none">2</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors outline-none">3</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors outline-none">4</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors outline-none">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 w-full border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-8 py-12 font-body text-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="text-lg font-bold text-teal-800 mb-4 font-headline">Pristine Editorial</div>
              <p className="text-slate-500 max-w-xs mb-6Leading-relaxed">고객님의 공간을 프리미엄 가치로 채우는 청소 그 이상의 공간 큐레이션 서비스입니다.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-teal-700">빠른 링크</h5>
              <ul className="space-y-2">
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">개인정보 처리방침</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">이용약관</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">채용 안내</span></Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 text-teal-700">고객 지원</h5>
              <ul className="space-y-2">
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">문의하기</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">자주 묻는 질문</span></Link></li>
                <li><Link href="#"><span className="text-slate-500 hover:underline transition-all cursor-pointer">지속 가능성</span></Link></li>
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
