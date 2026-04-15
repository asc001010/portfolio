"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqData = [
  {
    category: '이용/예약',
    questions: [
      { q: '예약은 어떻게 진행하나요?', a: '1. 가입 후 로그인\n2. 지점 및 원하는 사이즈(유닛) 선택\n3. 날짜 지정 및 장바구니 담기\n4. 이용약관 동의 후 결제 진행' },
      { q: '직접 방문해서 결제할 수 있나요?', a: '내꼬는 100% 비대면 무인 시스템으로 운영됩니다. 모든 예약과 결제는 웹사이트 또는 앱을 통해서만 가능합니다.' },
    ]
  },
  {
    category: '결제/환불',
    questions: [
      { q: '제공되는 결제 수단은 어떤 것들이 있나요?', a: '신용/체크카드, 계좌이체, 카카오페이, 네이버페이 등 다양한 간편 결제 수단을 지원합니다.' },
      { q: '사용 중에 환불/취소가 가능한가요?', a: '이용 시작 전에는 100% 환불이 가능하며, 이용 중에는 잔여 기간에 따라 규정된 위약금을 제외하고 환불 처리가 가능합니다.' },
    ]
  },
  {
    category: '시설/보안',
    questions: [
      { q: '보관 환경은 안전한가요?', a: '24시간 항온·항습 시스템이 가동되며, 3중 보안 시스템(CCTV, 스마트 도어락, 지문인증 등)으로 물품을 안전하게 보관합니다.' },
      { q: '출입은 어떻게 하나요?', a: '예약 완료 후 발급되는 모바일 키 또는 QR 코드를 통해 지점 출입구와 지정된 보관함을 이용하실 수 있습니다.' },
    ]
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="support" className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1D1D1F] mb-4">자주 묻는 질문</h2>
          <p className="text-zinc-500 font-medium">궁금하신 내용을 빠르게 찾아보세요.</p>
        </div>

        <div className="space-y-12">
          {faqData.map((category, catIdx) => (
            <div key={`faq-cat-${category.category}-${catIdx}`}>
              <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6 pb-4 border-b border-zinc-200">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, qIdx) => {
                  const isOpen = openItems[`${catIdx}-${qIdx}`];
                  return (
                    <div 
                      key={`faq-q-${catIdx}-${qIdx}`} 
                      className={`bg-white rounded-3xl border transition-all duration-300 ${
                        isOpen ? 'border-zinc-200 shadow-sm' : 'border-zinc-100'
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(catIdx, qIdx)}
                        className="w-full px-8 py-7 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-bold text-[#1D1D1F]">Q. {item.q}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          className="text-brand-blue"
                        >
                          {isOpen ? (
                            <X className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5 font-bold" />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <div className="pt-6 border-t border-zinc-100 text-[#1D1D1F] leading-relaxed font-medium">
                                <div className="flex gap-4">
                                  <span className="text-lg font-bold flex-shrink-0">A.</span>
                                  <div className="whitespace-pre-line text-zinc-600">
                                    {item.a}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 border border-zinc-100 bg-white rounded-[2.5rem] p-12 text-center shadow-sm">
          <h4 className="text-xl font-bold text-[#1D1D1F] mb-3">원하시는 답변을 찾지 못하셨나요?</h4>
          <p className="text-zinc-500 mb-8 font-medium">
            1:1 문의를 남겨주시면 친절하게 답변해 드리겠습니다.
          </p>
          <button 
            onClick={() => alert('1:1 문의 페이지는 준비 중입니다.')}
            className="px-12 py-4 bg-brand-blue text-white rounded-full font-bold text-base hover:opacity-90 transition-all"
          >
            1:1 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}
