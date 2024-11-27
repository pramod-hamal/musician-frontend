import { NextRequest, NextResponse } from "next/server";

const redirect = (request: NextRequest, url: string): NextResponse => {
  return NextResponse.redirect(new URL(url, request.url));
};

const isTokenAvailable = (token: string | undefined): boolean => {
  if (
    token == undefined ||
    token == "undefined" ||
    token == "" ||
    token == null
  ) {
    return false;
  }
  return true;
};

export default async function middleware(
  request: NextRequest
): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  //   Login routes
  if (pathname.includes("login") || pathname.includes("register")) {
    if (isTokenAvailable(token)) {
      return redirect(request, "/dashboard");
    }
    return NextResponse.next();
  }

  console.log("Checking token", isTokenAvailable(token));
  if (
    !isTokenAvailable(token) &&
    (!pathname.includes("login") && !pathname.includes("register"))
  ) {
    console.log("Redirecting to login");
    return redirect(request, "/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|api).*)"],
};
