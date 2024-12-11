import { Database } from '@/api';
import { type CookieOptions, createServerClient } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Pour accéder à supabase depuis les Server Actions et les Route Handlers
 */
export function createClient(
  cookieStore: NextRequest['cookies'] | ReturnType<typeof cookies>,
  responseCookies?: NextResponse['cookies']
): SupabaseClient<Database> {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
          responseCookies?.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options });
          responseCookies?.set({ name, value: '', ...options });
        },
      },
    }
  );
}
