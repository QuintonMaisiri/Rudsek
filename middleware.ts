// export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/admin/:path*",
    "/cart",
    "/auth/:path*"
  ],
};

export async function middleware(req : NextRequest){

  const { pathname }: { pathname: string } = req.nextUrl;
  const token = await getToken({req: req})
  const user:any | null = token

  const authRoutes = ["/auth/signin","/auth/signup"]

  const Redirect: any = () => {
    if (!token && !authRoutes.includes(pathname)) {
      return NextResponse.redirect(
        new URL(
          "/auth/signin",
          req.url
        )
      );
    } else if (user.role == "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else if (user.role == "user") {
      return NextResponse.redirect(new URL("/cart", req.url));
    }
  }

  if (
    (token && pathname.startsWith("/admin") && user.role !== "admin") ||
    (token && pathname.startsWith("/cart") && user.role !== "user") ||
    (token && authRoutes.includes(pathname)) ||
    (!token && !authRoutes.includes(pathname) )
  ) {
    return Redirect();
  }


}