"use client";

import { useState } from 'react';
import { MapPin, Info, ArrowRight, Lock, ImageIcon, FileSignature, CheckCircle2 } from 'lucide-react';
import BranchDetailModal from './BranchDetailModal';
import RealtimeLockerList from './RealtimeLockerList';

const branches = [
  {
    id: 'branch-kyodae-001',
    name: '교대점',
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
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLockerListOpen, setIsLockerListOpen] = useState(false);
  const activeBranch = branches.find(b => b.id === activeBranchId);

  return (
    <section id="branch" className="py-24 bg-surface-low">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">지점 및 요금 안내</h2>
          <p className="text-zinc-500">원하시는 지점을 선택하여 상세 정보와 요금을 확인하세요.</p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-black/5 mx-auto max-w-md mb-12">
          {branches.filter(b => b.id).map((branch, branchIdx) => (
            <button
              key={`branch-tab-v3-${branch.id}-${branchIdx}`}
              onClick={() => setActiveBranchId(branch.id)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                activeBranchId === branch.id 
                  ? 'bg-[#1D1D1F] text-white shadow-md' 
                  : 'text-zinc-500 hover:bg-zinc-50'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Info Header */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-sm border border-zinc-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#1D1D1F]">{activeBranch.name}</h3>
                <span className="px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-black uppercase tracking-widest rounded-full">Active</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm">
                <MapPin className="w-4 h-4 text-brand-blue" />
                {activeBranch.address}
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="h-12 px-6 rounded-2xl border border-zinc-200 text-sm font-bold hover:bg-zinc-50 transition-colors"
              >
                지점 정보
              </button>
              <button onClick={() => setIsLockerListOpen(true)} className="btn-primary h-12 flex items-center gap-2 text-sm">
                지금 바로 예약 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {activeBranch.lockers.filter(l => l.id).map((locker, lockerIdx) => (
            <div 
              key={`locker-card-v3-${activeBranch.id}-${locker.id}-${lockerIdx}`}
              className={`relative p-8 rounded-[2.5rem] flex flex-col transition-all h-full ${
                locker.best 
                  ? 'bg-[#1D1D1F] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-[#1D1D1F] border border-zinc-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px]'
              }`}
            >
              {locker.best && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest">
                  BEST
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-1">{locker.size}</h4>
                <p className={`text-xs font-medium ${locker.best ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {locker.desc}
                </p>
              </div>

              <div className="mb-8 mt-auto">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black">₩{locker.price}</span>
                  <span className={`text-xs font-bold ${locker.best ? 'text-zinc-500' : 'text-zinc-400'}`}>/ 월</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {locker.features.filter(f => f).map((feature, featIdx) => (
                  <li key={`locker-feat-v3-${locker.id}-${featIdx}`} className="flex items-center gap-2 text-xs font-bold">
                    <CheckCircle2 className={`w-4 h-4 ${locker.best ? 'text-brand-blue' : 'text-brand-blue'}`} />
                    <span className={locker.best ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsLockerListOpen(true)}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${
                  locker.best
                    ? 'bg-brand-blue text-white hover:opacity-90'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                선택하기
              </button>
            </div>
          ))}
        </div>

        {/* Additional Assets Space (Placeholders) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-50/50 rounded-3xl p-8 border border-zinc-100 flex flex-col items-center justify-center text-center">
            <ImageIcon className="w-8 h-8 text-zinc-300 mb-3" />
            <p className="text-sm font-bold text-zinc-500">지점 내부 이미지</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Coming Soon</p>
          </div>
          <div className="bg-zinc-50/50 rounded-3xl p-8 border border-zinc-100 flex flex-col items-center justify-center text-center">
            <FileSignature className="w-8 h-8 text-zinc-300 mb-3" />
            <p className="text-sm font-bold text-zinc-500">지점 도면 가이드</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Coming Soon</p>
          </div>
        </div>
      </div>

      <div id="modals-container">
        <BranchDetailModal 
          key="branch-detail-modal-v3"
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onOpenLockerList={() => setIsLockerListOpen(true)}
          branch={activeBranch} 
        />
        <RealtimeLockerList 
          key="locker-list-modal-v3"
          isOpen={isLockerListOpen}
          onClose={() => setIsLockerListOpen(false)}
          branchName={activeBranch.name}
        />
      </div>
    </section>
  );
}
