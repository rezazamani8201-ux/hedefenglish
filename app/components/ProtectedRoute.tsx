"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isPublicPage =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/resources") ||
    pathname.startsWith("/toolkit") ||
pathname.startsWith("/exercises");

  useEffect(() => {
    if (!loading && !user && !isPublicPage) {
      router.replace("/login");
    }
  }, [user, loading, pathname, router, isPublicPage]);

  if (!loading && !user && !isPublicPage) {
    return null;
  }

  return <>{children}</>;
}