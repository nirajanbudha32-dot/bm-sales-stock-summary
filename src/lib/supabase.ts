import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const url = supabaseUrl || "https://aulhjaemgbpjhxkljyrh.supabase.co";
const key = supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1bGhqYWVtZ2Jwamh4a2xqeXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0NTQyMjAsImV4cCI6MjEwMzAzMDIyMH0.uVrdhn0gGma9tvPcPtQq5YZrt4RNA4pgxO9W2SatAe8";

export const supabase: SupabaseClient = createClient(url, key);

export type UserRole = "admin" | "salesman";

export type Profile = {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
};
