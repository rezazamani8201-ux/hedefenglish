"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/app/lib/supabase";
import { useAuth } from "@/app/context/AuthContext";

export default function VisitTracker() {
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    if (!pathname) return;

    const recordVisit = async () => {
      try {
        let visitorId = localStorage.getItem("hedef_visitor_id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("hedef_visitor_id", visitorId);
        }

        await supabase.from("website_visits").insert({
          user_id: user?.id ?? null,
          visitor_id: visitorId,
          page: pathname,
        });
      } catch (error) {
        console.error("Failed to record website visit:", error);
      }
    };

    recordVisit();
  }, [pathname, user]);

  return null;
}