import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logout } from '@/app/auth/actions'
import { User, Package, Bell, Settings, LogOut, ChevronRight, Clock, CreditCard, Zap, Crown } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/naekko/Header'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/')
  }

  // 실제 Supabase 데이터 병렬 조회
  const [subscriptionResult, sessionResult] = await Promise.all([
    supabase
      .from('subscriptions')
      .select('*, lockers(locker_number, size, branches(name))')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from('usage_sessions')
      .select('*')
      .eq('user_id', user.id)
      .is('ended_at', null)
      .order('started_at', { ascending: false })
      .limit(1)
      .maybeSingle(),
  ])

  const subscription = subscriptionResult.data
  const activeSession = sessionResult.data

  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || '사용자'
  const avatarLetter = displayName[0]?.toUpperCase()
  const provider = user.app_metadata?.provider || 'email'
  const isSocialUser = provider !== 'email'

  // 구독 D-Day 계산
  let dDay = null
  if (subscription?.end_date) {
    const end = new Date(subscription.end_date)
    const now = new Date()
    dDay = Math.ceil((end - now) / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      <Header />
      <div className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto space-y-5">

          {/* 상단 프로필 카드 */}
          <div className="bg-[#1B2435] rounded-[2rem] p-8 text-white overflow-hidden relative">
            {/* 배경 장식 */}
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
            <div className="absolute -bottom-10 -left-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />

            <div className="relative flex items-center gap-5">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-blue-900/30 flex-shrink-0">
                {avatarLetter}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-black text-white truncate">{displayName}님</h2>
                  {isSocialUser && (
                    <span className="flex-shrink-0 text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold border border-yellow-400/30">
                      {provider === 'kakao' ? '카카오' : provider === 'naver' ? '네이버' : '소셜'} 계정
                    </span>
                  )}
                </div>
                <p className="text-[#8892A4] text-sm truncate">{user.email}</p>
                <div className="mt-3">
                  {subscription ? (
                    <span className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-black px-3 py-1 rounded-full tracking-wider">
                      <Crown className="w-3 h-3" />
                      멤버십 이용 중
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#8892A4] text-[11px] font-black px-3 py-1 rounded-full tracking-wider">
                      일반 회원
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 실시간 이용 중 배너 (세션 있을 때만) */}
          {activeSession && (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-black text-blue-500 uppercase tracking-widest mb-0.5">현재 이용 중</p>
                <p className="text-sm font-bold text-blue-900 truncate">
                  {new Date(activeSession.started_at).toLocaleString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} 시작
                </p>
              </div>
              <Link href="/profile/lockers" className="flex-shrink-0 text-blue-500 text-xs font-bold flex items-center gap-1 hover:text-blue-700 transition-colors">
                상세 보기 <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* 구독 현황 카드 (구독 있을 때만) */}
          {subscription && (
            <div className="bg-white rounded-[2rem] p-7 shadow-sm border border-zinc-100">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400">내 구독 현황</p>
                {dDay !== null && (
                  <span className={`text-[12px] font-black px-3 py-1 rounded-full ${dDay <= 7 ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                    {dDay > 0 ? `D-${dDay}` : 'D-Day'}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#1B2435] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1D1D1F]">
                    {subscription.lockers?.branches?.name || '내꼬 지점'}{' '}
                    {subscription.lockers?.locker_number || ''}호
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium mt-0.5">
                    {subscription.lockers?.size || ''} 사이즈 보관함
                  </p>
                  {subscription.end_date && (
                    <p className="text-xs text-zinc-300 mt-1">
                      ~{new Date(subscription.end_date).toLocaleDateString('ko-KR')} 까지
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 비구독 유도 카드 */}
          {!subscription && (
            <Link href="/membership">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-[2rem] p-7 text-white hover:shadow-xl hover:shadow-blue-500/20 transition-all hover:-translate-y-0.5 overflow-hidden relative">
                <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
                <div className="flex items-center gap-4 relative">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-blue-200 mb-1">멤버십 가입하기</p>
                    <h3 className="text-lg font-black">지금 내꼬를 시작하세요</h3>
                    <p className="text-sm text-blue-200 mt-0.5">합리적인 가격의 프리미엄 보관 서비스</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-200 ml-auto flex-shrink-0" />
                </div>
              </div>
            </Link>
          )}

          {/* 메뉴 리스트 */}
          <div className="space-y-3">
            <Link href="/profile/lockers">
              <MenuButton
                icon={<Package className="w-5 h-5" />}
                title="내 보관함 관리"
                subtitle="이용 현황, 내역, 결제 정보"
                accent="blue"
              />
            </Link>
            <Link href="/profile/notifications">
              <MenuButton
                icon={<Bell className="w-5 h-5" />}
                title="알림 설정"
                subtitle="보관 만료 및 결제 알림 관리"
                accent="yellow"
              />
            </Link>
            <Link href="/profile/settings">
              <MenuButton
                icon={<Settings className="w-5 h-5" />}
                title="개인정보 설정"
                subtitle="비밀번호 변경 및 계정 관리"
                accent="zinc"
              />
            </Link>
          </div>

          {/* 로그아웃 */}
          <div className="pt-2 flex justify-center">
            <form action={logout}>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors text-sm font-medium py-3 px-6">
                <LogOut className="w-4 h-4" />
                로그아웃
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuButton({ icon, title, subtitle, accent = 'zinc' }) {
  const accentMap = {
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
    yellow: 'bg-yellow-50 text-yellow-500 group-hover:bg-yellow-400 group-hover:text-white',
    zinc: 'bg-zinc-50 text-zinc-500 group-hover:bg-[#1B2435] group-hover:text-white',
  }
  return (
    <div className="w-full bg-white p-5 rounded-2xl border border-zinc-100 flex items-center justify-between group transition-all hover:border-zinc-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-xl transition-colors ${accentMap[accent]}`}>
          {icon}
        </div>
        <div className="text-left">
          <h4 className="font-bold text-[#1D1D1F] text-[15px]">{title}</h4>
          <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-zinc-200 group-hover:text-zinc-400 transition-colors" />
    </div>
  )
}
