import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;

  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (path.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
};
