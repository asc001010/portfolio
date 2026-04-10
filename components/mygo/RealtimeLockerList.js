"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2, MoreHorizontal } from 'lucide-react';

export default function RealtimeLockerList({ isOpen, onClose, branchName }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lockers = [
    { size: 'Cube', count: 1, dims: '100cm x 100cm x 100cm', price: '50,000', features: ['항온', '항습'] },
    { size: 'Small', count: 3, dims: '100cm x 100cm x 200cm', price: '90,000', features: ['항온', '항습'] },
    { size: 'Medium', count: 0, dims: '150cm x 150cm x 200cm', price: '150,000', features: ['항온', '항습'] },
    { size: 'Large', count: 1, dims: '200cm x 200cm x 200cm', price: '250,000', features: ['항온', '항습'] },
  ];

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/40 backdrop-blur-sm p-4 py-8">
      <div className="flex min-h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-zinc-50 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 bg-white border-b border-zinc-100 flex items-center justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-black rounded-full uppercase tracking-widest mb-2">
                Real-time Status
              </span>
              <h2 className="text-2xl font-black text-[#1D1D1F]">
                보관함 리스트 <span className="bg-blue-100 text-brand-blue px-1 ml-1 rounded"> (실시간)</span>
              </h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-zinc-400" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col lg:flex-row gap-8">
            {/* List Area */}
            <div className="flex-1 space-y-4">
              {lockers.map((locker, idx) => (
                <div key={`rtl-locker-${locker.size}-${idx}`} className="bg-white p-6 rounded-3xl border border-zinc-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Visual Placeholder */}
                  <div className="w-24 h-24 bg-zinc-50 rounded-2xl flex items-center justify-center border border-dashed border-zinc-200">
                    <span className="text-zinc-300 font-bold text-sm tracking-tighter uppercase">{locker.size}</span>
                  </div>
                  
                  {/* Info Container */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-[#1D1D1F]">{locker.size} 사이즈</h3>
                      {locker.count > 0 ? (
                        <span className="px-2 py-0.5 bg-[#E8F8F0] text-[#00A651] text-[10px] font-bold rounded-full border border-[#D1F0E0]">
                          {locker.count}개 남음
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-zinc-100 text-zinc-400 text-[10px] font-bold rounded-full border border-zinc-200">
                          품절
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 font-medium mb-3">규격: {locker.dims}</p>
                    <div className="flex gap-2">
                      {locker.features.map((f, fIdx) => (
                        <span key={`rtl-feat-${locker.size}-${fIdx}`} className="px-2 py-1 bg-zinc-50 text-zinc-400 text-[10px] font-bold rounded-md border border-zinc-100">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price Container */}
                  <div className="text-right">
                    <p className="text-[10px] text-zinc-400 font-bold mb-1">월 이용료</p>
                    <p className="text-xl font-black text-[#1D1D1F]">{locker.price}원</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Widget: Booking Quick Start */}
            <div className="w-full lg:w-80 space-y-6">
              <div className="bg-[#1D1D1F] p-8 rounded-[2rem] text-white shadow-xl">
                <h4 className="text-lg font-bold mb-6">예약하기</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block">사이즈 선택</label>
                    <select className="w-full bg-zinc-800 border-zinc-700 rounded-xl px-4 py-3 text-sm font-bold text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none cursor-pointer">
                      <option>사이즈를 선택해주세요</option>
                      {lockers.filter(l => l.count > 0).map((l, idx) => (
                        <option key={`rs-opt-${l.size}-${idx}`}>{l.size} 사이즈 ({l.count}개 가능)</option>
                      ))}
                    </select>
                  </div>
                  <button className="w-full py-4 bg-brand-blue rounded-xl font-black text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                    다음 단계로 (날짜/결제)
                    <ArrowRightForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="mt-6 text-[10px] text-zinc-500 text-center leading-relaxed font-medium">
                  결제는 다음 단계에서 진행됩니다.<br />
                  <span className="underline cursor-pointer">로그인이 필요한 서비스입니다.</span>
                </p>
              </div>

              {/* Help Card */}
              <div className="bg-white p-6 rounded-[2rem] border border-zinc-100">
                <h5 className="font-bold text-sm mb-3">도움이 필요하신가요?</h5>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                  보관 규격이나 특이 도면 상담이 필요하시다면 고객센터로 문의주세요.
                </p>
                <button className="text-xs font-bold text-brand-blue flex items-center gap-1">
                  카카오톡 1:1 상담 <MoreHorizontal className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ArrowRightForward({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
