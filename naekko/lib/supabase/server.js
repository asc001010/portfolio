import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://otkyutofocdjahpfitiv.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_4HDK82addD652c5o98hnATA_m9CwdMVi';

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              // 브라우저 닫을 때 로그아웃되도록 세션 쿠키로 설정
              const sessionOptions = { ...options };
              delete sessionOptions.maxAge;
              delete sessionOptions.expires;
              cookieStore.set(name, value, sessionOptions);
            });
          } catch (error) {
            // This can be ignored if you have middleware refreshing user sessions.
          }
        },
      },
    }
  );
}
