"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/app/lib/supabase";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      let session = null;

      // First, let Supabase restore the session normally.
      const result = await supabase.auth.getSession();
      session = result.data.session;

      // Fallback: restore the saved session directly from localStorage.
      if (!session && typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem(
            "sb-zrrdxbihkfeabompksfe-auth-token"
          );

          if (stored) {
            const savedSession = JSON.parse(stored);

            if (
              savedSession?.access_token &&
              savedSession?.refresh_token
            ) {
              const restored = await supabase.auth.setSession({
                access_token: savedSession.access_token,
                refresh_token: savedSession.refresh_token,
              });

              session = restored.data.session;
            }
          }
        } catch (error) {
          console.error("Failed to restore saved session:", error);
        }
      }

      if (!mounted) return;

      setUser(session?.user ?? null);
      setLoading(false);
    };

    initializeAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;

        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}