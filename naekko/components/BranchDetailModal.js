"use client";

import { useState } from 'react';
import { X, Car, Shield, Clock, MousePointer2, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RealtimeLockerList from './RealtimeLockerList';

export default function BranchDetailModal({ isOpen, onClose, branch }) {
  const [isLockerListOpen, setIsLockerListOpen] = useState(false);

  if (!branch) return null;

  const facilities = [
    { icon: <Car className="w-6 h-6" />, label: '무료 주차', desc: '건물 내 주차장 이용 가능' },
    { icon: <Shield className="w-6 h-6" />, label: 'CCTV 보안', desc: '24시간 통합 관제 시스템' },
    { icon: <Clock className="w-6 h-6" />, label: '24시간 오픈', desc: '언제든 자유로운 입출입' },
    { icon: <MousePointer2 className="w-6 h-6" />, label: '무인 운영', desc: '비대면 키오스크 및 앱 제어' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* Header / Banner */}
            <div className="relative h-48 bg-[#1D1D1F] p-8 flex flex-col justify-end overflow-hidden">
              <div className="absolute top-0 right-0 p-6 z-10">
                <button
                  onClick={onClose}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative z-10">
                <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-3 inline-block">
                  Premium Storage
                </span>
                <h2 className="text-3xl font-black text-white">{branch.name} 상세 정보</h2>
              </div>
              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-8 md:p-10">
              {/* Address */}
              <div className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 mb-10">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm font-bold text-zinc-700">{branch.address}</p>
                </div>
              </div>

              {/* Facilities Grid */}
              <div className="mb-10">
                <h3 className="text-lg font-black text-[#1D1D1F] mb-6">시설 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                  {facilities.map((fac, idx) => (
                    <div key={`modal-facility-${fac.label}-${idx}`} className="p-6 bg-white border border-zinc-100 rounded-3xl hover:border-brand-blue/30 transition-colors group">
                      <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-all mb-4">
                        {fac.icon}
                      </div>
                      <p className="font-bold text-[#1D1D1F] mb-1">{fac.label}</p>
                      <p className="text-xs text-zinc-500">{fac.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Status */}
              <div className="pt-8 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-zinc-400 mb-1">현재 상태</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sm font-black text-[#1D1D1F]">정상 운영 중 (24h)</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsLockerListOpen(true)}
                  className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl text-sm font-black transition-all"
                >
                  기구 현황 확인
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Real-time status list displayed on top of the modal */}
      <RealtimeLockerList 
        isOpen={isLockerListOpen} 
        onClose={() => setIsLockerListOpen(false)} 
        branchName={branch.name} 
      />
    </AnimatePresence>
  );
}
