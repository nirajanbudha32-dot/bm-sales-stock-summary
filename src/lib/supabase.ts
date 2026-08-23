import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "[BM Store] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Set them in Vercel > Settings > Environment Variables and redeploy.",
  );
}

export const supabase: SupabaseClient = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-key",
);

export type UserRole = "admin" | "salesman";

export type Profile = {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
};
