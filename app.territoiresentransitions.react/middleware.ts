import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source:
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',

      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;
  // const hostname = request.headers.get('host') as string; // e.g. 'app.territoiresentransitions.fr'

  if (isAuthUrl(pathname)) {
    return redirectToAuthDomain(url);
  }
}

function isAuthUrl(pathname: string) {
  return (
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/recover')
  );
}

function redirectToAuthDomain(url: URL) {
  const searchParams = url.search.toString();

  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;

  const authUrl = new URL(path, process.env.NEXT_PUBLIC_AUTH_URL);

  return NextResponse.redirect(authUrl);
}
