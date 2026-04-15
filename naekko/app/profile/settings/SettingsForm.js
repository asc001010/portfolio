"use client";

import { useState } from 'react';
import { User, Phone, Lock, Mail, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SettingsForm({ userEmail, userProvider = 'email' }) {
  const isSocialLogin = userProvider !== 'email';
  
  const providerNames = {
    kakao: '카카오',
    naver: '네이버',
    google: '구글'
  };
  const providerName = providerNames[userProvider] || userProvider;
  
  const [formData, setFormData] = useState({
    name: '홍길동',
    phone: '010-1234-5678',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("개인정보가 성공적으로 업데이트 되었습니다.");
  };

  const handlePasswordReset = () => {
    alert(`${userEmail}로 비밀번호 재설정 링크를 발송했습니다.`);
  };

  const handleDeleteAccount = () => {
    if (confirm("정말로 계정을 삭제하시겠습니까? 관련 데이터가 모두 삭제됩니다.")) {
      alert("계정 탈퇴가 완료되었습니다.");
    }
  };

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-zinc-100">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <User className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-[#1D1D1F]">기본 계정 정보</h2>
        </div>

        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">
              가입 계정 {isSocialLogin && <span className="text-blue-600 font-bold">({providerName} 간편로그인)</span>}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                <Mail className="w-5 h-5" />
              </div>
              <input 
                type="email" 
                value={userEmail || ''} 
                disabled
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-500 font-medium focus:outline-none"
              />
            </div>
            {isSocialLogin && <p className="text-xs text-zinc-400 mt-2 ml-1">소셜 연동으로 가입되어 안전하게 보호받고 있습니다.</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1D1D1F] mb-2">이름</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                <User className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름을 입력하세요"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-[#1D1D1F] font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#1D1D1F] mb-2">휴대폰 번호 (알림톡 수신용)</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                <Phone className="w-5 h-5" />
              </div>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-zinc-200 rounded-xl text-[#1D1D1F] font-medium focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
              />
            </div>
            <p className="text-xs text-zinc-400 mt-2 ml-1">이 번호로 보관 만료 및 결제 관련 카카오톡 알림이 발송됩니다.</p>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="submit"
              className="bg-[#1B2435] text-white px-8 py-3.5 rounded-xl font-bold shadow-md hover:bg-black transition-colors"
            >
              정보 저장
            </button>
          </div>
        </form>
      </section>

      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-zinc-100">
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-2.5 rounded-xl ${isSocialLogin ? 'bg-green-50 text-green-500' : 'bg-zinc-100 text-zinc-600'}`}>
            {isSocialLogin ? <CheckCircle2 className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1D1D1F]">보안 및 로그인 관리</h2>
          </div>
        </div>

        {isSocialLogin ? (
          <div className="p-5 border border-green-100 rounded-2xl bg-green-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#1D1D1F] text-sm mb-1">{providerName} 소셜 연동 중</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">현재 <strong>{providerName} 간편로그인</strong>을 통해 안전하게 접속 중입니다.</p>
            </div>
          </div>
        ) : (
          <div className="p-5 border border-zinc-100 rounded-2xl bg-zinc-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#1D1D1F] text-sm mb-1">비밀번호 변경</h3>
              <p className="text-xs text-zinc-500">가입하신 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
            </div>
            <button 
              onClick={handlePasswordReset}
              className="w-full sm:w-auto bg-white border border-zinc-200 text-[#1D1D1F] px-4 py-2.5 rounded-xl font-bold hover:bg-zinc-50 transition-colors text-sm"
            >
              재설정 메일 받기
            </button>
          </div>
        )}
      </section>

      <section className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-red-100 mt-12">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="w-5 h-5 text-red-500" />
          <h2 className="text-lg font-bold text-red-500">위험 구역</h2>
        </div>
        <p className="text-sm text-zinc-500 mb-6">계정을 삭제하면 모든 정보가 영구적으로 삭제되며 복구할 수 없습니다.</p>
        <button 
          onClick={handleDeleteAccount}
          className="text-red-500 font-bold text-sm bg-red-50 px-5 py-3 rounded-xl hover:bg-red-100 transition-colors"
        >
          회원 탈퇴하기
        </button>
      </section>
    </div>
  );
}
