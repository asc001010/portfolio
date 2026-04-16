import { redirect } from 'next/navigation';
import { createClient } from '@/lib/naekko/supabase/server';
import Header from '@/components/naekko/Header';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import SettingsForm from './SettingsForm';

/**
 * SettingsPage Component
 * Moved from page.js for better file identification.
 */
export default async function SettingsPage() {
  const supabase = await createClient();
  let user = null;
  
  try {
    const { data } = await supabase.auth.getUser();
    user = data?.user;
  } catch (err) {
    console.error('Auth error:', err);
  }

  if (!user) {
    redirect('/naekko');
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7]">
      <Header />
      <div className="flex-1 pt-32 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back Button & Title */}
          <div className="flex items-center gap-4 mb-8 pl-2">
            <Link href="/naekko/profile" className="p-2 -ml-2 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600">
              <ChevronLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-[#1D1D1F]">개인정보 설정</h1>
              <p className="text-zinc-500 mt-1">내 계정 정보와 비밀번호를 관리하세요</p>
            </div>
          </div>

          {/* Form Client Component */}
          <SettingsForm userEmail={user.email} userProvider={user?.app_metadata?.provider || 'email'} />
        </div>
      </div>
    </div>
  );
}
