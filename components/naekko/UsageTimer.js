"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ExternalLink, Power } from 'lucide-react';
import { createClient } from '@/lib/naekko/supabase/client';
import Link from 'next/link';

const supabase = createClient();

export default function UsageTimer() {
  const [session, setSession] = useState(null);
  const [elapsedTime, setElapsedTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isStopping, setIsStopping] = useState(false);

  const fetchActiveSession = useCallback(async (userId) => {
    if (!userId) return;

    try {
      const { data, error } = await supabase
        .from('usage_sessions')
        .select('*')
        .is('ended_at', null)
        .eq('user_id', userId)
        .order('started_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) {
        setSession(data);
      } else {
        setSession(null);
      }
    } catch (err) {
      console.error('Session fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    let channel = null;

    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !mounted) {
        setIsLoading(false);
        return;
      }
      
      await fetchActiveSession(user.id);

      if (!mounted) return;

      // Unique channel name for each mount to prevent reuse errors
      const channelName = `usage_status_${user.id}_${Date.now()}`;
      channel = supabase
        .channel(channelName)
        .on('postgres_changes', { 
          event: '*', 
          schema: 'public', 
          table: 'usage_sessions',
          filter: `user_id=eq.${user.id}`
        }, () => {
          if (mounted) fetchActiveSession(user.id);
        })
        .subscribe();
    };

    init();

    return () => {
      mounted = false;
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, [fetchActiveSession]);

  useEffect(() => {
    if (!session?.started_at) return;

    const startTime = new Date(session.started_at).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const diff = now - startTime;

      if (diff < 0) {
        setElapsedTime("이용 준비 중");
        return;
      }

      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      const hDisplay = hours > 0 ? `${hours}시간 ` : "";
      const mDisplay = `${minutes}분 `;
      const sDisplay = `${seconds}초`;
      
      setElapsedTime(`${hDisplay}${mDisplay}${sDisplay}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [session]);

  const handleStop = async (e) => {
    e.preventDefault();
    if (isStopping) return;
    
    const confirmed = window.confirm('현재 이용 중인 짐 보관 세션을 종료하시겠습니까?');
    if (!confirmed) return;

    setIsStopping(true);
    try {
      const res = await fetch('/api/naekko/usage/stop', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (res.ok) {
        setSession(null);
      } else {
        const errData = await res.json();
        alert(`종료 처리 중 오류가 발생했습니다: ${errData.message || '알 수 없는 오류'}`);
      }
    } catch (err) {
      alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsStopping(false);
    }
  };

  if (isLoading || !session) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-md border border-blue-100 px-3 md:px-5 py-2 rounded-2xl shadow-sm border-l-4 border-l-blue-500"
    >
      <div className="flex items-center justify-center w-7 h-7 md:w-9 md:h-9 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20">
        <Clock className="w-4 md:w-5 h-4 md:h-5 text-white animate-pulse" />
      </div>
      
      <div className="flex flex-col min-w-[80px] md:min-w-[100px]">
        <span className="text-[9px] md:text-[10px] text-blue-600 font-black uppercase tracking-widest leading-none mb-1 flex items-center gap-1">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
          Live Usage
        </span>
        <span className="text-[13px] md:text-base font-black text-[#1D1D1F] tabular-nums leading-none tracking-tight">
          {elapsedTime || "계산 중..."}
        </span>
      </div>

      <div className="flex items-center gap-1 ml-2 pl-2 border-l border-zinc-100">
        <Link 
          href="/naekko/profile"
          className="p-1.5 hover:bg-zinc-50 rounded-lg transition-colors text-zinc-400 hover:text-blue-500 active:scale-95"
          title="상세보기"
        >
          <ExternalLink className="w-4 h-4" />
        </Link>
        <button
          onClick={handleStop}
          disabled={isStopping}
          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors text-zinc-400 hover:text-red-500 disabled:opacity-30 active:scale-95"
          title="이용 종료"
        >
          {isStopping ? (
             <div className="w-4 h-4 border-2 border-zinc-200 border-t-red-500 rounded-full animate-spin" />
          ) : (
            <Power className="w-4 h-4" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
