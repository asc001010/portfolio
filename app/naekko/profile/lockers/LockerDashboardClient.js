"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  History,
  QrCode,
  MapPin,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function LockerDashboardClient({ subscription, activeSession, sessionHistory }) {
  const [activeTab, setActiveTab] = useState('current');
  const [isStoppingSession, setIsStoppingSession] = useState(false);
  const [localSession, setLocalSession] = useState(activeSession);

  const tabs = [
    { id: 'current', label: '이용 현황', icon: <Package className="w-4 h-4" /> },
    { id: 'history', label: 'QR 이용 내역', icon: <History className="w-4 h-4" /> },
  ];

  const handleStopSession = async () => {
    if (!confirm('QR 이용을 종료하시겠습니까?')) return;
    setIsStoppingSession(true);
    try {
      const res = await fetch('/naekko/api/usage/stop', { method: 'POST' });
      if (res.ok) {
        setLocalSession(null);
        alert('이용이 종료되었습니다.');
      } else {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('네트워크 오류가 발생했습니다.');
    } finally {
      setIsStoppingSession(false);
    }
  };

  return (
    <>
      {/* 탭 셀렉터 */}
      <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-zinc-100 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-xl transition-all relative ${
              activeTab === tab.id ? 'text-white' : 'text-zinc-400 hover:bg-zinc-50'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-[#1B2435] rounded-xl shadow-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'current' && (
            <CurrentStatusView
              subscription={subscription}
              activeSession={localSession}
              onStopSession={handleStopSession}
              isStoppingSession={isStoppingSession}
            />
          )}
          {activeTab === 'history' && (
            <UsageHistoryView sessionHistory={sessionHistory} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// ── 이용 현황 탭 ──────────────────────────────────
function CurrentStatusView({ subscription, activeSession, onStopSession, isStoppingSession }) {
  // D-Day 계산
  let dDay = null;
  if (subscription?.end_date) {
    const end = new Date(subscription.end_date);
    const now = new Date();
    dDay = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  }

  if (!subscription) {
    return (
      <div className="space-y-4">
        <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-5">
            <Package className="w-10 h-10 text-zinc-300" />
          </div>
          <h3 className="text-xl font-bold text-[#1D1D1F] mb-2">이용 중인 보관함이 없어요</h3>
          <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
            내꼬 멤버십에 가입하면<br />프리미엄 보관함을 이용할 수 있어요.
          </p>
          <Link
            href="/naekko/membership"
            className="flex items-center gap-2 bg-[#1B2435] text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-700 transition-colors"
          >
            <Zap className="w-4 h-4" />
            멤버십 가입하기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 메인 보관함 카드 */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 overflow-hidden relative">
        {/* 상태 배지 */}
        <div className="absolute top-7 right-7">
          <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
            이용 중
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {/* 보관함 정보 */}
          <div className="flex items-center gap-4 pr-20">
            <div className="w-14 h-14 bg-[#1B2435] rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1D1D1F]">
                {subscription.lockers?.branches?.name || '내꼬 지점'}{' '}
                {subscription.lockers?.locker_number || ''}호
              </h3>
              <p className="text-sm text-zinc-400 font-medium mt-0.5">
                {subscription.lockers?.size || ''} 사이즈 보관함
              </p>
            </div>
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-50">
            <div>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1.5">이용 시작일</p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-700">
                <Calendar className="w-4 h-4 text-zinc-300" />
                {subscription.start_date
                  ? new Date(subscription.start_date).toLocaleDateString('ko-KR')
                  : '-'}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-1.5">이용 종료일</p>
              <div className="flex items-center gap-2 text-sm font-bold text-zinc-700">
                <Clock className="w-4 h-4 text-zinc-300" />
                <span>
                  {subscription.end_date
                    ? new Date(subscription.end_date).toLocaleDateString('ko-KR')
                    : '-'}
                  {dDay !== null && (
                    <span className={`ml-2 text-[11px] font-black ${
                      dDay <= 7 ? 'text-red-500' : 'text-green-500'
                    }`}>
                      (D-{dDay})
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* 지점 주소 */}
          {subscription.lockers?.branches?.address && (
            <div className="flex items-start gap-2 -mt-2">
              <MapPin className="w-4 h-4 text-zinc-300 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-zinc-400">{subscription.lockers.branches.address}</p>
            </div>
          )}

          {/* QR 버튼 */}
          <button className="w-full mt-2 bg-zinc-50 hover:bg-zinc-100 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors group">
            <QrCode className="w-5 h-5 text-zinc-600" />
            <span className="text-sm font-bold text-zinc-700">출입을 위한 QR 코드 열기</span>
            <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* QR 이용 중 배너 */}
      {activeSession && (
        <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-black text-blue-500 uppercase tracking-widest">QR 이용 중</p>
            <p className="text-sm font-bold text-blue-900 mt-0.5">
              {new Date(activeSession.started_at).toLocaleString('ko-KR', {
                month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
              })} 시작
            </p>
          </div>
          <button
            onClick={onStopSession}
            disabled={isStoppingSession}
            className="flex-shrink-0 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white text-xs font-black px-4 py-2.5 rounded-xl transition-colors"
          >
            {isStoppingSession ? '종료 중...' : '이용 종료'}
          </button>
        </div>
      )}

      {/* 안내 배너 */}
      <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
        <p className="text-xs text-blue-600 font-medium leading-relaxed">
          💡 이용 기간 연장이나 해지가 필요하신 경우, 결제일 3일 전까지 개인정보 설정에서 변경해 주세요.
        </p>
      </div>
    </div>
  );
}

// ── QR 이용 내역 탭 ───────────────────────────────
function UsageHistoryView({ sessionHistory }) {
  if (!sessionHistory || sessionHistory.length === 0) {
    return (
      <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-zinc-100 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-5">
          <History className="w-10 h-10 text-zinc-300" />
        </div>
        <h3 className="text-lg font-bold text-[#1D1D1F] mb-2">이용 내역이 없어요</h3>
        <p className="text-sm text-zinc-400">QR 코드로 이용을 시작하면 여기에 기록돼요.</p>
      </div>
    );
  }

  const formatDuration = (startedAt, endedAt) => {
    if (!endedAt) return '이용 중';
    const diff = new Date(endedAt) - new Date(startedAt);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) return `${hours}시간 ${minutes}분`;
    return `${minutes}분`;
  };

  return (
    <div className="space-y-3">
      {sessionHistory.map((session, idx) => (
        <div
          key={session.id}
          className="bg-white p-5 rounded-2xl border border-zinc-100 flex items-center gap-4 hover:border-zinc-200 hover:shadow-sm transition-all"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
            session.ended_at ? 'bg-zinc-50' : 'bg-blue-50'
          }`}>
            {session.ended_at
              ? <CheckCircle className="w-5 h-5 text-zinc-300" />
              : <Clock className="w-5 h-5 text-blue-400 animate-pulse" />
            }
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-[#1D1D1F]">
              {new Date(session.started_at).toLocaleDateString('ko-KR', {
                month: 'long', day: 'numeric', weekday: 'short'
              })}
            </p>
            <p className="text-xs text-zinc-400 mt-0.5">
              {new Date(session.started_at).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}{' '}
              {session.ended_at && `~ ${new Date(session.ended_at).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}`}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className={`text-xs font-black px-2.5 py-1.5 rounded-full ${
              session.ended_at
                ? 'bg-zinc-50 text-zinc-400'
                : 'bg-blue-50 text-blue-500'
            }`}>
              {formatDuration(session.started_at, session.ended_at)}
            </span>
          </div>
        </div>
      ))}
      <div className="text-center py-6">
        <p className="text-xs text-zinc-300 font-medium">최근 20개의 이용 내역이 표시됩니다.</p>
      </div>
    </div>
  );
}
