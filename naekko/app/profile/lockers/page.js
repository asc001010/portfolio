import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Header from '@/components/naekko/Header'
import LockerDashboardClient from './LockerDashboardClient'
import { ChevronLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function LockerManagementPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/')

  // 병렬로 데이터 조회
  const [subscriptionResult, sessionResult, allSessionsResult] = await Promise.all([
    // 현재 활성 구독
    supabase
      .from('subscriptions')
      .select('*, lockers(locker_number, size, branches(name, address))')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle(),

    // 현재 진행 중인 QR 이용 세션
    supabase
      .from('usage_sessions')
      .select('*')
      .eq('user_id', user.id)
      .is('ended_at', null)
      .order('started_at', { ascending: false })
      .limit(1)
      .maybeSingle(),

    // 이용 내역 (최근 20건)
    supabase
      .from('usage_sessions')
      .select('*')
      .eq('user_id', user.id)
      .not('ended_at', 'is', null)
      .order('started_at', { ascending: false })
      .limit(20),
  ])

  const subscription = subscriptionResult.data
  const activeSession = sessionResult.data
  const sessionHistory = allSessionsResult.data || []

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      <Header />
      <div className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">

          {/* 뒤로가기 */}
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#1D1D1F] transition-colors mb-6 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-sm font-medium">마이페이지로 돌아가기</span>
          </Link>

          {/* 페이지 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#1D1D1F]">내 보관함 관리</h1>
            <p className="text-zinc-500 mt-1">이용 중인 보관함과 QR 이용 내역을 확인하세요.</p>
          </div>

          {/* 클라이언트 대시보드 컴포넌트 */}
          <LockerDashboardClient
            subscription={subscription}
            activeSession={activeSession}
            sessionHistory={sessionHistory}
          />
        </div>
      </div>
    </div>
  )
}
