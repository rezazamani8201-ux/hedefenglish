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

  const publicPages = ["/", "/login", "/register"];

  useEffect(() => {
    if (!loading && !user && !publicPages.includes(pathname)) {
      router.replace("/login");
    }
  }, [user, loading, pathname, router]);

  if (!loading && !user && !publicPages.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}