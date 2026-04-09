import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // 환경변수가 없을 때 렌더링 크래시를 방지하기 위해 임시 대체값(fallback)을 제공합니다.
  // 실제 운영에서는 URL과 Key가 반드시 필요합니다.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
