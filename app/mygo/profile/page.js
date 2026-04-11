import { redirect } from 'next/navigation'
import { createClient } from '@/lib/mygo/supabase/server'
import { logout } from '@/app/mygo/auth/actions'
import { User, Package, Bell, Settings, LogOut, ChevronRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/mygo')
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 pl-2">
          <h1 className="text-3xl font-bold text-[#1D1D1F]">마이페이지</h1>
          <p className="text-zinc-500 mt-1">내꼬와 함께하는 소중한 공간 관리</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 mb-6 transition-all hover:shadow-md">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#1B2435] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.email[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1D1D1F]">{user.email.split('@')[0]}님</h2>
              <p className="text-zinc-400 text-sm mt-1">{user.email}</p>
              <div className="mt-3 inline-flex items-center px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold text-zinc-500 tracking-wider">
                NORMAL MEMBER
              </div>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-4">
          <MenuButton 
            icon={<Package className="w-5 h-5" />} 
            title="내 보관함 관리" 
            subtitle="현재 이용 중인 지점 및 짐 확인"
          />
          <MenuButton 
            icon={<Bell className="w-5 h-5" />} 
            title="알림 설정" 
            subtitle="보관 만료 및 결제 알림 관리"
          />
          <MenuButton 
            icon={<Settings className="w-5 h-5" />} 
            title="개인정보 설정" 
            subtitle="비밀번호 변경 및 계정 관리"
          />
        </div>

        {/* Action Footer */}
        <div className="mt-12 flex justify-center">
          <form action={logout}>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors text-sm font-medium">
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function MenuButton({ icon, title, subtitle }) {
  return (
    <button className="w-full bg-white p-6 rounded-2xl border border-zinc-100 flex items-center justify-between group transition-all hover:border-zinc-300 hover:translate-y-[-2px]">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-zinc-50 rounded-xl text-[#1B2435] group-hover:bg-[#1B2435] group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="text-left">
          <h4 className="font-bold text-[#1D1D1F]">{title}</h4>
          <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-zinc-500 transition-colors" />
    </button>
  )
}
