"use client";

import { useState } from 'react';
import { MessageSquare, Mail, CreditCard, Gift, ShieldCheck } from 'lucide-react';

export default function NotificationForm({ userEmail }) {
  const [settings, setSettings] = useState({
    kakaoBilling: true,
    emailBilling: false,
    kakaoService: true,
    emailMarketing: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    alert("알림 설정이 성공적으로 저장되었습니다.");
  };

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-zinc-100 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1D1D1F]">구독 및 결제 알림</h2>
            <p className="text-sm text-zinc-500">이용권 만료 및 자동 결제 내역을 알려드립니다.</p>
          </div>
        </div>
        <div className="space-y-4">
          <ToggleItem 
            title="카카오톡 알림톡" 
            desc="결제 하루 전 및 결제 성공/실패 시 즉시 전송"
            icon={<MessageSquare className="w-4 h-4 text-[#FEE500]" />}
            isActive={settings.kakaoBilling}
            onToggle={() => handleToggle('kakaoBilling')}
          />
          <ToggleItem 
            title="이메일 알림" 
            desc={`${userEmail || '계정'} 향으로 전자 영수증 발송`}
            icon={<Mail className="w-4 h-4 text-zinc-400" />}
            isActive={settings.emailBilling}
            onToggle={() => handleToggle('emailBilling')}
          />
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-zinc-100 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-green-50 text-green-600 rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1D1D1F]">안전 및 서비스 관련 (필수)</h2>
            <p className="text-sm text-zinc-500">긴급 보수, 출입문 오류 등 중요 정보는 기본적으로 발송됩니다.</p>
          </div>
        </div>
        <div className="space-y-4">
          <ToggleItem 
            title="카카오톡 긴급 알림" 
            desc="시설 관련 문제 상황 발생 시 즉시 전송"
            icon={<MessageSquare className="w-4 h-4 text-[#FEE500]" />}
            isActive={settings.kakaoService}
            onToggle={() => handleToggle('kakaoService')}
          />
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-zinc-100 transition-all">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1D1D1F]">혜택 및 이벤트</h2>
            <p className="text-sm text-zinc-500">신규 지점 오픈 및 할인 혜택을 누구보다 빠르게 받아보세요.</p>
          </div>
        </div>
        <div className="space-y-4">
          <ToggleItem 
            title="이메일 구독" 
            desc="월간 뉴스레터 및 할인 쿠폰 발송"
            icon={<Mail className="w-4 h-4 text-zinc-400" />}
            isActive={settings.emailMarketing}
            onToggle={() => handleToggle('emailMarketing')}
          />
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleSave}
          className="bg-[#1B2435] text-white px-8 py-4 rounded-xl font-bold shadow-md hover:opacity-90 transition-all flex items-center justify-center min-w-[140px] text-lg active:scale-95"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}

function ToggleItem({ title, desc, icon, isActive, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-transparent hover:border-zinc-200">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-zinc-100">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-[#1D1D1F] text-sm">{title}</h4>
          <p className="text-xs text-zinc-500 mt-0.5">{desc}</p>
        </div>
      </div>
      <button 
        onClick={onToggle}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${isActive ? 'bg-[#1B2435]' : 'bg-zinc-300'}`}
      >
        <span 
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out ${isActive ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
}
