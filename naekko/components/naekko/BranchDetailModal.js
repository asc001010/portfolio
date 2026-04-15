"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Car, Shield, Clock, MousePointer2, MapPin } from 'lucide-react';
import RealtimeLockerList from './RealtimeLockerList';

export default function BranchDetailModal({ isOpen, onClose, branch, onOpenLockerList }) {
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

  if (!branch) return null;

  const facilities = [
    { icon: <Car className="w-6 h-6" />, label: '무료 주차', desc: '건물 내 주차장 이용 가능' },
    { icon: <Shield className="w-6 h-6" />, label: 'CCTV 보안', desc: '24시간 통합 관제 시스템' },
    { icon: <Clock className="w-6 h-6" />, label: '24시간 오픈', desc: '언제든 자유로운 입출입' },
    { icon: <MousePointer2 className="w-6 h-6" />, label: '무인 운영', desc: '비대면 키오스크 및 앱 제어' },
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40 backdrop-blur-sm overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white w-full max-w-2xl sm:rounded-[2.5rem] rounded-t-[2.5rem] overflow-hidden shadow-2xl h-[92vh] sm:h-auto sm:max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header / Banner */}
              <div className="relative h-40 sm:h-48 bg-[#1D1D1F] p-6 sm:p-8 flex flex-col justify-end overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 p-4 sm:p-6 z-10">
                  <button
                    onClick={onClose}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative z-10">
                  <span className="px-3 py-1 bg-brand-blue text-white text-[9px] sm:text-[10px] font-black rounded-full uppercase tracking-widest mb-2 sm:mb-3 inline-block">
                    Premium Storage
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{branch.name} 상세 정보</h2>
                </div>
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="flex-1 overflow-y-auto p-6 sm:p-10">
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
                  <h3 className="text-base sm:text-lg font-black text-[#1D1D1F] mb-4 sm:mb-6">시설 정보</h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {facilities.map((fac, idx) => (
                      <div key={`modal-facility-${fac.label}-${idx}`} className="p-4 sm:p-6 bg-white border border-zinc-100 rounded-[2rem] sm:rounded-3xl hover:border-brand-blue/30 transition-colors group">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-brand-blue group-hover:bg-blue-50 transition-all mb-3 sm:mb-4">
                          {fac.icon}
                        </div>
                        <p className="font-bold text-[#1D1D1F] text-sm sm:base mb-0.5 sm:mb-1">{fac.label}</p>
                        <p className="text-[10px] sm:text-xs text-zinc-500 line-clamp-2">{fac.desc}</p>
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
                    onClick={() => {
                      onClose(); // 상세 모달 닫기
                      onOpenLockerList(); // 보관함 리스트 열기
                    }}
                    className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl text-sm font-black transition-all"
                  >
                    기구 현황 확인
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
      )}
    </AnimatePresence>
  );
}
