"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, ArrowRight, Lock, ImageIcon, FileSignature, CheckCircle2, Star } from 'lucide-react';
import BranchDetailModal from './BranchDetailModal';
import RealtimeLockerList from './RealtimeLockerList';

const BRANCHES_DATA = [
  {
    id: 'branch-kyodae-001',
    name: '교대점',
    shortName: '교대',
    address: '서울시 서초구 서초중앙로 63 지하1층 B103호',
    lockers: [
      { 
        id: 'locker-kyodae-cube-001',
        size: 'Cube', 
        desc: '우체국 5호 박스 4개 분량', 
        price: '50,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템'] 
      },
      { 
        id: 'locker-kyodae-small-001',
        size: 'Small', 
        desc: '캠핑용품, 골프백 등', 
        price: '90,000', 
        best: true,
        features: ['스마트 항온·항습', '3중 보안 시스템', '선반 무료 대여'] 
      },
      { 
        id: 'locker-kyodae-medium-001',
        size: 'Medium', 
        desc: '1톤 용달 분량', 
        price: '150,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템'] 
      },
      { 
        id: 'locker-kyodae-large-001',
        size: 'Large', 
        desc: '이사/리모델링 화물', 
        price: '250,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템', '파렛트 지원'] 
      },
    ]
  },
  {
    id: 'branch-samsung-002',
    name: '삼성중앙점',
    shortName: '삼성중앙',
    address: '서울특별시 강남구 삼성동 123-45',
    lockers: [
      { 
        id: 'locker-samsung-cube-001',
        size: 'Cube', 
        desc: '우체국 5호 박스 4개 분량', 
        price: '55,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템'] 
      },
      { 
        id: 'locker-samsung-small-001',
        size: 'Small', 
        desc: '캠핑용품, 골프백 등', 
        price: '95,000', 
        best: true,
        features: ['스마트 항온·항습', '3중 보안 시스템', '선반 무료 대여'] 
      },
      { 
        id: 'locker-samsung-medium-001',
        size: 'Medium', 
        desc: '1톤 용달 분량', 
        price: '160,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템'] 
      },
      { 
        id: 'locker-samsung-large-001',
        size: 'Large', 
        desc: '이사/리모델링 화물', 
        price: '270,000', 
        features: ['스마트 항온·항습', '3중 보안 시스템', '파렛트 지원'] 
      },
    ]
  }
];

export default function BranchPricing() {
  const [activeBranchId, setActiveBranchId] = useState(BRANCHES_DATA[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLockerListOpen, setIsLockerListOpen] = useState(false);

  const activeBranch = useMemo(() => 
    BRANCHES_DATA.find(b => b.id === activeBranchId) || BRANCHES_DATA[0]
  , [activeBranchId]);

  return (
    <section id="branch" className="py-24 bg-[#F9F9FB]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#1D1D1F]">지점 및 요금 안내</h2>
            <p className="text-zinc-500 font-medium">원하시는 지점을 선택하여 상세 정보와 요금을 확인하세요.</p>
          </motion.div>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-zinc-100 mx-auto max-w-sm mb-12">
          {BRANCHES_DATA.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchId(branch.id)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 relative ${
                activeBranchId === branch.id 
                  ? 'text-white' 
                  : 'text-zinc-400 hover:text-zinc-600'
              }`}
            >
              {activeBranchId === branch.id && (
                <motion.div 
                  layoutId="branch-tab"
                  className="absolute inset-0 bg-[#1D1D1F] rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{branch.shortName || branch.name}</span>
            </button>
          ))}
        </div>

        {/* Info Header */}
        <motion.div 
          key={activeBranchId}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-10 mb-10 shadow-sm border border-zinc-100"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-black text-[#1D1D1F] tracking-tight">{activeBranch.name}</h3>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  Operating
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
                {activeBranch.address}
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex-1 md:flex-none h-14 px-8 rounded-2xl border border-zinc-200 text-sm font-bold hover:bg-zinc-50 transition-all active:scale-95"
              >
                지점 상세
              </button>
              <button 
                onClick={() => setIsLockerListOpen(true)} 
                className="flex-1 md:flex-none bg-blue-500 text-white h-14 px-8 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
              >
                지금 바로 예약 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <AnimatePresence mode="wait">
            {activeBranch.lockers.map((locker, idx) => (
              <motion.div 
                key={locker.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] flex flex-col transition-all group ${
                  locker.best 
                    ? 'bg-[#1D1D1F] text-white shadow-2xl scale-105 z-10 border border-[#2D2D2F]' 
                    : 'bg-white text-[#1D1D1F] border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {locker.best && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" />
                    BEST CHOICE
                  </div>
                )}
                
                <div className="mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${locker.best ? 'bg-white/10 border-white/10 text-white' : 'bg-zinc-50 border-zinc-100 text-[#1D1D1F]'}`}>
                    <span className="font-black text-xs">{locker.size.charAt(0)}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-1">{locker.size}</h4>
                  <p className={`text-xs font-bold leading-relaxed ${locker.best ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {locker.desc}
                  </p>
                </div>

                <div className="mb-8 mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black tracking-tight">₩{locker.price}</span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${locker.best ? 'text-zinc-500' : 'text-zinc-400'}`}>/ Month</span>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8 border-t border-zinc-100/10 pt-6">
                  {locker.features.map((feature, featIdx) => (
                    <li key={featIdx} className="flex items-center gap-3 text-xs font-bold">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${locker.best ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-500'}`}>
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      </div>
                      <span className={locker.best ? 'text-zinc-400 font-medium' : 'text-zinc-600 font-medium'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsLockerListOpen(true)}
                  className={`w-full py-4 rounded-2xl font-black text-sm transition-all active:scale-95 ${
                    locker.best
                      ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  보관하기
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Improved Visual Placeholders */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-blue-100 transition-all">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ImageIcon className="w-8 h-8 text-zinc-300 group-hover:text-blue-500 transition-colors" />
            </div>
            <h5 className="font-black text-[#1D1D1F] mb-1">지점 내부 실사 갤러리</h5>
            <p className="text-xs text-zinc-400 font-medium">현장 방문 없이도 깨끗한 시설을 확인하세요.</p>
            <div className="mt-6 px-4 py-1.5 bg-zinc-50 text-zinc-400 text-[10px] font-black rounded-full uppercase tracking-widest">Update Scheduled</div>
          </div>
          
          <div className="group bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-sm flex flex-col items-center justify-center text-center hover:border-blue-100 transition-all">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileSignature className="w-8 h-8 text-zinc-300 group-hover:text-blue-500 transition-colors" />
            </div>
            <h5 className="font-black text-[#1D1D1F] mb-1">상세 도면 및 가이드</h5>
            <p className="text-xs text-zinc-400 font-medium">라커 위치와 동선을 한눈에 파악할 수 지도.</p>
            <div className="mt-6 px-4 py-1.5 bg-zinc-50 text-zinc-400 text-[10px] font-black rounded-full uppercase tracking-widest">Update Scheduled</div>
          </div>
        </div>
      </div>

      <BranchDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onOpenLockerList={() => setIsLockerListOpen(true)}
        branch={activeBranch} 
      />
      
      <RealtimeLockerList 
        isOpen={isLockerListOpen}
        onClose={() => setIsLockerListOpen(false)}
      />
    </section>
  );
}
