"use client";

import { useState } from 'react';
import { 
  CheckCircle2, ChevronDown,
  Crown, Package, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/naekko/Header';
import Footer from '@/components/naekko/Footer';
import { motion, AnimatePresence } from 'framer-motion';

// ── 플랜 데이터 ─────────────────────────────────────
const plans = [
  {
    id: 'cube',
    name: 'Cube',

    desc: '우체국 5호 박스 4개 분량',
    subDesc: '소량의 짐 또는 계절용품 정리에 최적',
    price: '50,000',
    priceNum: 50000,
    popular: false,
    features: [
      '스마트 항온·항습 시스템',
      '3중 보안 시스템 (CCTV + 디지털락)',
      '24시간 무인 출입',
      '무료 주차 지원',
    ],
  },
  {
    id: 'small',
    name: 'Small',

    desc: '캠핑용품, 골프백, 자전거 등',
    subDesc: '취미·스포츠 장비 보관에 가장 인기 있는 사이즈',
    price: '90,000',
    priceNum: 90000,
    popular: true,
    features: [
      '스마트 항온·항습 시스템',
      '3중 보안 시스템 (CCTV + 디지털락)',
      '24시간 무인 출입',
      '무료 주차 지원',
      '선반 무료 대여',
      '우선 예약 가능',
    ],
  },
  {
    id: 'medium',
    name: 'Medium',

    desc: '1톤 용달 분량',
    subDesc: '이사 짐 임시 보관 또는 사무용품 보관',
    price: '150,000',
    priceNum: 150000,
    popular: false,
    features: [
      '스마트 항온·항습 시스템',
      '3중 보안 시스템 (CCTV + 디지털락)',
      '24시간 무인 출입',
      '무료 주차 지원',
      '파렛트 기본 제공',
    ],
  },
  {
    id: 'large',
    name: 'Large',

    desc: '이사/리모델링 화물',
    subDesc: '대형 가구, 사업장 화물 등 최대 수납',
    price: '250,000',
    priceNum: 250000,
    popular: false,
    features: [
      '스마트 항온·항습 시스템',
      '3중 보안 시스템 (CCTV + 디지털락)',
      '24시간 무인 출입',
      '무료 주차 지원',
      '파렛트 기본 제공',
      '전담 입·출고 지원',
    ],
  },
];


const faqs = [
  {
    q: '멤버십은 어떻게 가입하나요?',
    a: '지점 및 보관함 사이즈를 선택 후 결제를 완료하면 즉시 이용 가능합니다. 전국 지점 어디서든 동일한 방식으로 가입하실 수 있어요.',
  },
  {
    q: '중간에 해지하면 환불이 되나요?',
    a: '결제일 기준 3일 이내에는 전액 환불 가능합니다. 이후에는 남은 기간에 대한 일할 계산으로 환불 처리됩니다. 자세한 사항은 고객센터로 문의해 주세요.',
  },
  {
    q: '계약 기간이 정해져 있나요?',
    a: '기본 계약 단위는 1개월이며, 매월 자동으로 갱신됩니다. 원하시는 시점에 언제든지 해지 신청이 가능합니다.',
  },
  {
    q: '사이즈 변경이 가능한가요?',
    a: '현재 이용 기간이 끝난 뒤 새로운 사이즈로 재계약하는 방식으로 변경 가능합니다. 동일 지점 내 공간이 있을 경우 우선적으로 배정해 드립니다.',
  },
  {
    q: '보관 물품에 제한이 있나요?',
    a: '위험물, 폭발물, 부패성 식품, 살아있는 동물은 보관이 불가합니다. 그 외의 일반 물품은 모두 보관 가능하며, 귀중품은 사전에 별도 문의 바랍니다.',
  },
  {
    q: '보관 중 물품이 파손되면 어떻게 되나요?',
    a: '내꼬는 자연재해를 제외한 시설 내 사고에 대해 기본 배상 책임을 갖고 있습니다. 고가의 물품은 별도 보험 가입을 권장합니다.',
  },
];

// ── FAQ 아이템 ──────────────────────────────────────
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className="text-[15px] font-bold text-[#1D1D1F] group-hover:text-brand-blue transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-zinc-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── 메인 페이지 ─────────────────────────────────────
export default function MembershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      <Header />

      <main className="flex-1">

        {/* ── Hero 섹션 ─────────────────── */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-[#FAFAFC] pattern-grid-lg">
          {/* 메인 페이지와 동일한 메시 그라디언트 배경 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-blue-200/30 to-purple-200/30 blur-[120px]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-cyan-200/30 to-blue-100/30 blur-[100px]"
            />
          </div>
          <div className="max-w-3xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                <Crown className="w-3.5 h-3.5" /> 월 정기권 멤버십
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#1D1D1F] tracking-tight mb-6 leading-tight">
                내 공간을 갖는 가장<br />
                <span className="text-gradient">합리적인 방법</span>
              </h1>
              <p className="text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto">
                월 구독 하나로 24시간 항온·항습 프라이빗 룸을 소유하세요.<br />
                계약 기간 없이 언제든지 시작하고 멈출 수 있어요.
              </p>
            </motion.div>
          </div>
        </section>



        {/* ── 요금 플랜 ─────────────────── */}
        <section className="py-20 px-4 bg-[#F5F5F7]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">사이즈별 요금제</h2>
              <p className="text-zinc-400 font-medium">보관할 짐의 양에 맞게 사이즈를 선택하세요.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-[2rem] p-7 transition-all h-full ${
                    plan.popular
                      ? 'bg-[#1B2435] text-white shadow-2xl lg:-translate-y-4 ring-2 ring-blue-500/30'
                      : 'bg-white text-[#1D1D1F] border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-5 py-1.5 rounded-full shadow-lg uppercase tracking-widest whitespace-nowrap">
                      가장 인기
                    </div>
                  )}

                  {/* 플랜 헤더 */}
                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-1">{plan.name}</h3>
                    <p className={`text-xs font-bold ${plan.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.desc}</p>
                    <p className={`text-xs mt-1 leading-relaxed ${plan.popular ? 'text-zinc-500' : 'text-zinc-400'}`}>{plan.subDesc}</p>
                  </div>

                  {/* 가격 */}
                  <div className="mb-7">
                    <div className="flex items-end gap-1.5">
                      <span className="text-3xl font-black tracking-tight">₩{plan.price}</span>
                      <span className={`text-sm font-bold mb-1 ${plan.popular ? 'text-zinc-500' : 'text-zinc-400'}`}>/ 월</span>
                    </div>
                  </div>

                  {/* 혜택 리스트 */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-blue-500'}`} strokeWidth={2.5} />
                        <span className={`text-[13px] font-medium leading-snug ${plan.popular ? 'text-zinc-300' : 'text-zinc-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA 버튼 */}
                  <Link href="/naekko/#branch">
                    <button className={`w-full py-4 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}>
                      지점에서 선택하기
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* 안내 문구 */}
            <p className="text-center text-xs text-zinc-400 mt-8 font-medium">
              * 지점별 가격이 상이할 수 있습니다. 정확한 금액은 지점 페이지에서 확인해 주세요.
            </p>
          </div>
        </section>

        {/* ── CTA 배너 ──────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1B2435] rounded-[2.5rem] p-12 text-center text-white overflow-hidden relative"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-500/10 pointer-events-none" />
              <div className="absolute -bottom-12 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="relative">

                <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                  오늘부터 내 공간을<br />가져보세요
                </h2>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                  가입 즉시 이용 가능. 약정 없이 매월 자동 갱신.<br />
                  지금 바로 내꼬에서 내 보관함을 찾아보세요.
                </p>
                <Link href="/naekko/#branch">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-base transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
                    <Package className="w-5 h-5" />
                    지점 및 보관함 찾기
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ 섹션 ──────────────────── */}
        <section className="py-20 px-4 bg-[#F5F5F7]">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-[#1D1D1F] tracking-tight mb-3">자주 묻는 질문</h2>
              <p className="text-zinc-400 font-medium">궁금한 점이 있으시면 언제든지 고객센터로 문의해 주세요.</p>
            </div>
            <div className="bg-white rounded-[2rem] border border-zinc-100 shadow-sm px-8 divide-y divide-zinc-50">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-zinc-400">
                더 궁금한 점이 있으신가요?{' '}
                <Link href="/naekko/faq" className="text-blue-500 font-bold hover:underline">
                  전체 FAQ 보기 →
                </Link>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
