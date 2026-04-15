import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://otkyutofocdjahpfitiv.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_4HDK82addD652c5o98hnATA_m9CwdMVi';

  return createBrowserClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        if (typeof document === 'undefined') return [];
        return document.cookie.split(';').reduce((acc, cookieString) => {
          const [key, ...rest] = cookieString.split('=');
          if (key) {
            try {
              acc.push({ name: key.trim(), value: decodeURIComponent(rest.join('=')) });
            } catch {
              acc.push({ name: key.trim(), value: rest.join('=') });
            }
          }
          return acc;
        }, []);
      },
      setAll(cookiesToSet) {
        if (typeof document === 'undefined') return;
        cookiesToSet.forEach(({ name, value, options }) => {
          let cookieStr = `${name}=${encodeURIComponent(value)}`;
          if (options) {
            if (options.path) cookieStr += `; path=${options.path}`;
            if (options.domain) cookieStr += `; domain=${options.domain}`;
            if (options.sameSite) cookieStr += `; samesite=${options.sameSite}`;
            if (options.secure) cookieStr += `; secure`;
            // maxAge와 expires는 포함하지 않아 브라우저 종료 시 삭제되는 세션 쿠키로 만듭니다.
          }
          document.cookie = cookieStr;
        });
      },
    },
  });
}
