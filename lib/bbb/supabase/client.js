import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Cloudflare 빌드 시 환경변수 누락 문제를 방지하기 위해 실제 값을 기본값으로 설정합니다.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://otkyutofocdjahpfitiv.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_4HDK82addD652c5o98hnATA_m9CwdMVi';

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.log("Using hardcoded Supabase URL fallback");
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
