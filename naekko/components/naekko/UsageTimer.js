"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

const supabase = createClient();

export default function UsageTimer() {
  const [session, setSession] = useState(null);
  const [elapsedTime, setElapsedTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRecord = null;

    const fetchActiveSession = async (user = userRecord) => {
      if (!user) {
        const { data: { user: fetchedUser } } = await supabase.auth.getUser();
        if (!fetchedUser) {
          setIsLoading(false);
          return;
        }
        userRecord = fetchedUser;
        user = fetchedUser;
      }

      const { data, error } = await supabase
        .from('usage_sessions')
        .select('*')
        .is('ended_at', null)
        .eq('user_id', user.id)
        .order('started_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) {
        setSession(data);
      } else {
        setSession(null);
      }
      setIsLoading(false);
    };

    const setupSubscription = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      
      userRecord = user;
      fetchActiveSession(user);

      // Subscribe only to changes for this specific user
      const channel = supabase
        .channel(`usage_status_${user.id}`)
        .on('postgres_changes', { 
          event: '*', 
          schema: 'public', 
          table: 'usage_sessions',
          filter: `user_id=eq.${user.id}`
        }, () => {
          fetchActiveSession(user);
        })
        .subscribe();

      return channel;
    };

    const channelPromise = setupSubscription();

    return () => {
      channelPromise.then(channel => {
        if (channel) supabase.removeChannel(channel);
      });
    };
  }, []);

  useEffect(() => {
    if (!session) return;

    const interval = setInterval(() => {
      const start = new Date(session.started_at);
      const now = new Date();
      const diff = now - start;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsedTime(
        `${hours > 0 ? `${hours}시간 ` : ""}${minutes}분 ${seconds}초`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [session]);

  if (isLoading || !session) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="flex items-center gap-2 md:gap-3 bg-blue-50 border border-blue-100 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl shadow-sm"
    >
      <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full">
        <Clock className="w-3 md:w-4 h-3 md:h-4 text-white animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-[8px] md:text-[10px] text-blue-600 font-bold uppercase tracking-wider leading-none mb-0.5 md:mb-1">
          실시간 이용 중
        </span>
        <span className="text-[12px] md:text-sm font-black text-blue-900 tabular-nums leading-none">
          {elapsedTime}
        </span>
      </div>
      <Link 
        href="/profile"
        className="ml-1 md:ml-2 p-1 md:p-1.5 hover:bg-blue-100 rounded-lg transition-colors group"
      >
        <ExternalLink className="w-3 md:w-3.5 h-3 md:h-3.5 text-blue-400 group-hover:text-blue-600" />
      </Link>
      <button
        onClick={async (e) => {
          e.preventDefault();
          if (confirm('이용을 종료하시겠습니까?')) {
            const res = await fetch('/api/usage/stop', { method: 'POST' });
            if (res.ok) {
              setSession(null);
              alert('이용이 종료되었습니다.');
            }
          }
        }}
        className="ml-1 md:ml-2 bg-red-500 hover:bg-red-600 text-white text-[10px] md:text-[11px] font-bold px-2 py-1 rounded-lg transition-colors"
      >
        종료
      </button>
    </motion.div>
  );
}
