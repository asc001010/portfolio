"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, ChevronLeft, ArrowRight, Calendar, CreditCard, Info, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import CustomCalendar from './CustomCalendar';

const supabase = createClient();

export default function RealtimeLockerList({ isOpen, onClose }) {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState(0); // 0: Select Branch, 1: Select Size, 2: Billing & Date
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });
  const [useSubscription, setUseSubscription] = useState(false);
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  // Auth Status Sync
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Reset when closing
  useEffect(() => {
    if (!isOpen) {
      setStep(0);
      setSelectedBranch(null);
      setSelectedLocker(null);
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const branches = [
    { id: 'gyodae', name: '내꼬 교대점', address: '서울특별시 서초구 서초동', lockersCount: 5 },
    { id: 'samsung', name: '내꼬 삼성중앙점', address: '서울특별시 강남구 삼성동', lockersCount: 8 },
    { id: 'pangyo', name: '내꼬 판교점 (오픈예정)', address: '경기도 성남시 분당구', lockersCount: 0 },
  ];

  const lockersData = {
    gyodae: [
      { id: 'g-cube', size: 'Cube', count: 1, price: 50000, desc: '작은 소품 보관 최적화' },
      { id: 'g-small', size: 'Small', count: 3, price: 90000, desc: '박스 짐 보관에 용이' },
      { id: 'g-large', size: 'Large', count: 1, price: 250000, desc: '대용량 적재 전용' },
    ],
    samsung: [
      { id: 's-small', size: 'Small', count: 5, price: 95000, desc: '의류 및 소형 가전' },
      { id: 's-medium', size: 'Medium', count: 3, price: 160000, desc: '캠핑 및 스포츠 용품' },
    ]
  };

  if (!isOpen) return null;

  const currentLockers = selectedBranch ? (lockersData[selectedBranch.id] || []) : [];
  
  // Calculate price based on selected period
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end - start;
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  
  // Base daily rate logic
  const dailyRate = selectedLocker ? selectedLocker.price / 30 : 0;
  const totalAmount = Math.floor(dailyRate * diffDays);
  
  // Discount rates
  let discountedAmount = totalAmount;
  if (diffDays >= 360) discountedAmount = totalAmount * 0.8;
  else if (diffDays >= 180) discountedAmount = totalAmount * 0.9;
  else if (diffDays >= 90) discountedAmount = totalAmount * 0.95;

  const finalAmount = useSubscription ? 0 : Math.floor(discountedAmount);

  return (
    <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ 
            type: "spring", 
            damping: 32, 
            stiffness: 300,
            mass: 0.8,
            velocity: 2,
            restDelta: 0.5
          }}
          style={{ willChange: "transform, opacity" }}
          className="relative bg-white w-full max-w-4xl sm:rounded-[2.5rem] rounded-t-[2.5rem] shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden h-[92vh] sm:h-auto sm:min-h-[650px] sm:max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="px-6 sm:px-8 py-5 sm:py-6 border-b border-zinc-100 flex items-center justify-between bg-white shrink-0">
            <div className="flex items-center gap-3 sm:gap-4">
              {step > 0 && (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="p-1.5 sm:p-2 hover:bg-zinc-50 rounded-xl transition-colors text-zinc-400"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <p className="text-[9px] sm:text-[10px] font-black text-blue-500 uppercase tracking-widest mb-0.5">
                  {step === 0 ? 'Step 01. Select Branch' : step === 1 ? 'Step 02. Select Size' : 'Step 03. Checkout'}
                </p>
                <h2 className="text-lg sm:text-xl font-bold text-[#1D1D1F] line-clamp-1">
                  {step === 0 ? '이용하실 지점 선택' : step === 1 ? `${selectedBranch?.name} 사이즈 선택` : '최종 예약 정보 확인'}
                </h2>
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-zinc-50 rounded-full transition-colors text-zinc-300">
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto bg-zinc-50/50">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                  {branches.map((branch) => (
                    <div 
                      key={branch.id}
                      onClick={() => branch.lockersCount > 0 && (setSelectedBranch(branch), setStep(1))}
                      className={`group p-6 rounded-[2rem] border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                        branch.lockersCount > 0 
                          ? 'bg-white border-zinc-100 hover:border-blue-500 shadow-sm hover:shadow-md' 
                          : 'bg-zinc-50 border-zinc-100 opacity-60 cursor-not-allowed'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:text-blue-500 transition-colors">
                            <MapPin className="w-6 h-6" />
                          </div>
                          {branch.lockersCount > 0 ? (
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-md border border-blue-100 uppercase">Available</span>
                          ) : (
                            <span className="px-2 py-0.5 bg-zinc-200 text-zinc-500 text-[10px] font-black rounded-md uppercase tracking-tight">Coming Soon</span>
                          )}
                        </div>
                        <h3 className="text-lg font-black text-[#1D1D1F]">{branch.name}</h3>
                        <p className="text-xs text-zinc-400 font-medium mt-1">{branch.address}</p>
                      </div>
                      {branch.lockersCount > 0 && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-blue-500 mt-4">
                          현재 {branch.lockersCount}개 사이즈 이용 가능 <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 sm:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8"
                >
                  <div className="flex-1 space-y-3">
                    {currentLockers.map((locker) => (
                      <LockerCard 
                        key={locker.id}
                        locker={locker}
                        isSelected={selectedLocker?.id === locker.id}
                        onSelect={() => locker.count > 0 && setSelectedLocker(locker)}
                      />
                    ))}
                  </div>
                  <div className="w-full lg:w-72 mt-2 lg:mt-0">
                    <div className="bg-[#1B2435] p-6 lg:p-6 p-5 rounded-[2rem] lg:rounded-3xl text-white shadow-lg sticky bottom-0">
                      <h3 className="hidden lg:block font-bold text-lg mb-6 tracking-tight">선택 정보</h3>
                      <div className="flex lg:flex-col items-center lg:items-stretch gap-4 lg:gap-4 mb-4 lg:mb-8 overflow-hidden">
                        <div className="flex-1 min-w-0">
                          <SummaryItem label="지점" value={selectedBranch?.name} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <SummaryItem label="사이즈" value={selectedLocker?.size ? `${selectedLocker.size} 사이즈` : '미선택'} />
                        </div>
                      </div>
                      <button 
                        disabled={!selectedLocker}
                        onClick={() => setStep(2)}
                        className="w-full py-4 bg-blue-500 text-white rounded-2xl font-black text-sm hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        날짜 선택하기
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-8 max-w-2xl mx-auto space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4 relative">
                    <InputGroup label="보관 시작일" icon={<Calendar className="w-4 h-4" />}>
                      <button 
                        onClick={() => { setShowStartCalendar(!showStartCalendar); setShowEndCalendar(false); }}
                        className={`w-full bg-white p-4 pl-12 rounded-2xl border transition-all flex items-center justify-between group ${showStartCalendar ? 'border-blue-500 ring-2 ring-blue-50' : 'border-zinc-100 hover:border-zinc-300'}`}
                      >
                        <span className="text-sm font-bold text-[#1D1D1F]">{startDate}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform ${showStartCalendar ? 'rotate-180 text-blue-500' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {showStartCalendar && (
                          <div className="absolute top-full left-0 z-50 mt-2">
                            <CustomCalendar 
                              label="시작일"
                              selectedDate={startDate}
                              onSelect={(date) => {
                                setStartDate(date);
                                setShowStartCalendar(false);
                                if (new Date(date) >= new Date(endDate)) {
                                  const d = new Date(date);
                                  d.setDate(d.getDate() + 30);
                                  setEndDate(d.toISOString().split('T')[0]);
                                }
                              }}
                              minDate={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                        )}
                      </AnimatePresence>
                    </InputGroup>

                    <InputGroup label="보관 종료일" icon={<Calendar className="w-4 h-4" />}>
                       <button 
                        onClick={() => { setShowEndCalendar(!showEndCalendar); setShowStartCalendar(false); }}
                        className={`w-full bg-white p-4 pl-12 rounded-2xl border transition-all flex items-center justify-between group ${showEndCalendar ? 'border-blue-500 ring-2 ring-blue-50' : 'border-zinc-100 hover:border-zinc-300'}`}
                      >
                        <span className="text-sm font-bold text-[#1D1D1F]">{endDate}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform ${showEndCalendar ? 'rotate-180 text-blue-500' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {showEndCalendar && (
                          <div className="absolute top-full right-0 z-50 mt-2">
                            <CustomCalendar 
                              label="종료일"
                              selectedDate={endDate}
                              onSelect={(date) => {
                                setEndDate(date);
                                setShowEndCalendar(false);
                              }}
                              minDate={startDate}
                            />
                          </div>
                        )}
                      </AnimatePresence>
                    </InputGroup>
                  </div>

                  {user && (
                    <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-blue-900 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          내꼬 멤버십 구독권 사용
                        </h4>
                        <p className="text-xs text-blue-600/80 mt-1">
                          현재 구독 중인 회원님은 추가 요금 없이 이용 가능합니다.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={useSubscription}
                          onChange={(e) => setUseSubscription(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-blue-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  )}

                  <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm">
                    <div className="flex justify-between items-center pb-6 border-b border-zinc-50 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                          <Package className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1D1D1F]">{selectedLocker?.size} 사이즈 예약</h4>
                          <p className="text-xs text-zinc-400">{selectedBranch?.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black text-zinc-400 uppercase">최종 금액</p>
                        <p className="text-2xl font-black text-blue-500 tracking-tight">
                          {useSubscription ? '무료 (구독 포함)' : `₩${finalAmount.toLocaleString()}`}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400 font-medium">예약 기간 설정</span>
                        <span className="font-bold text-[#1D1D1F]">{diffDays}일</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400 font-medium">서비스 이용료 (월 기준)</span>
                        <span className="font-bold text-[#1D1D1F]">₩{selectedLocker?.price.toLocaleString()}/월</span>
                      </div>
                      {!useSubscription && discountedAmount < totalAmount && (
                        <div className="flex justify-between text-sm text-blue-500">
                          <span className="font-bold">장기 이용 할인 적용</span>
                          <span className="font-bold">-₩{(totalAmount - Math.floor(discountedAmount)).toLocaleString()}</span>
                        </div>
                      )}
                      {useSubscription && (
                        <div className="flex justify-between text-sm text-blue-500">
                          <span className="font-bold">멤버십 구독 적용 할인</span>
                          <span className="font-bold">-₩{Math.floor(discountedAmount).toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                    <button className="w-full py-5 bg-[#1B2435] text-white rounded-[1.5rem] font-bold text-base hover:bg-black transition-all flex items-center justify-center gap-3">
                      <CreditCard className="w-5 h-5" />
                      {useSubscription ? '구독권으로 예약 완료하기' : '결제하고 예약 완료하기'}
                    </button>
                    <div className="mt-4 flex items-start gap-2 text-zinc-400">
                      <Info className="w-3 h-3 mt-0.5" />
                      <p className="text-[10px] leading-relaxed">결제 완료 시 이용 정보가 문자로 전송됩니다.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Sub-components
function LockerCard({ locker, isSelected, onSelect }) {
  const isSoldOut = locker.count === 0;
  return (
    <div 
      onClick={onSelect}
      className={`p-4 sm:p-6 rounded-[1.8rem] sm:rounded-[2rem] border transition-all flex items-center gap-4 sm:gap-6 cursor-pointer ${
        isSelected ? 'bg-blue-50/30 border-blue-500 shadow-sm' : isSoldOut ? 'bg-zinc-50 border-zinc-50 opacity-50 cursor-not-allowed' : 'bg-white border-zinc-100 hover:border-zinc-300'
      }`}
    >
      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center text-[9px] sm:text-[10px] font-black border border-dashed ${
        isSelected ? 'bg-white border-blue-200 text-blue-500' : 'bg-zinc-50 border-zinc-200 text-zinc-300'
      }`}>
        {locker.size.toUpperCase()}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-[#1D1D1F] flex items-center gap-2 text-sm sm:text-base">
          {locker.size} {isSoldOut && <span className="text-[9px] text-zinc-400 font-normal border px-1.5 rounded">품절</span>}
        </h4>
        <p className="text-[10px] text-zinc-400 mt-0.5 sm:mt-1 truncate">{locker.desc}</p>
      </div>
      <div className="text-right font-black text-xs sm:text-sm text-[#1D1D1F] whitespace-nowrap">₩{locker.price.toLocaleString()}</div>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
      <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">{label}</p>
      <p className="text-sm font-bold truncate">{value || '미선택'}</p>
    </div>
  );
}

function InputGroup({ label, children, icon }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300">{icon}</div>}
        {children}
      </div>
    </div>
  );
}
