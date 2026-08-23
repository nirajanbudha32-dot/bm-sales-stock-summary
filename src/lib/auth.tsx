import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { User, AuthError } from "@supabase/supabase-js";
import { supabase, type Profile } from "@/lib/supabase";

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signUp: (
    email: string,
    password: string,
    asAdmin?: boolean,
  ) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(userId: string) {
    try {
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
      if (error) {
        console.error("[BM Store] fetchProfile error:", error.message);
        setProfile(null);
      } else {
        setProfile(data as Profile | null);
      }
    } catch (err) {
      console.error("[BM Store] fetchProfile exception:", err);
      setProfile(null);
    }
  }

  async function refreshProfile() {
    if (!user) return;
    await fetchProfile(user.id);
  }

  useEffect(() => {
    let mounted = true;

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (!mounted) return;
        setUser(session?.user ?? null);
        if (session?.user) {
          fetchProfile(session.user.id).finally(() => {
            if (mounted) setLoading(false);
          });
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("[BM Store] getSession error:", err);
        if (mounted) setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error };
    } catch (err) {
      console.error("[BM Store] signIn exception:", err);
      return { error: { message: err instanceof Error ? err.message : "Sign in failed" } as AuthError };
    }
  }

  async function signUp(email: string, password: string, asAdmin = false) {
    try {
      const { data: existingUsers } = await supabase.from("profiles").select("id").limit(1);
      const isFirstUser = !existingUsers || existingUsers.length === 0;

      const { error } = await supabase.auth.signUp({ email, password });
      if (error) return { error };

      if (asAdmin || isFirstUser) {
        const {
          data: { user: newUser },
        } = await supabase.auth.getUser();
        if (newUser) {
          await supabase.from("profiles").upsert({
            id: newUser.id,
            email: newUser.email!,
            role: "admin",
          });
        }
      }

      return { error: null };
    } catch (err) {
      console.error("[BM Store] signUp exception:", err);
      return { error: { message: err instanceof Error ? err.message : "Sign up failed" } as AuthError };
    }
  }

  async function signOut() {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("[BM Store] signOut error:", err);
    }
    setUser(null);
    setProfile(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, profile, loading, signIn, signUp, signOut, refreshProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
