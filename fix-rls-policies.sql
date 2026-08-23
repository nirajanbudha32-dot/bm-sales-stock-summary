-- ============================================
-- FIX: Replace deprecated auth.role() with
-- current_setting('request.jwt.claim.role', true)
-- Run this in Supabase SQL Editor AFTER the main setup
-- ============================================

-- Drop old policies that use auth.role()
DROP POLICY IF EXISTS "Authenticated users can read stock" ON public.stock;
DROP POLICY IF EXISTS "Authenticated users can read sales" ON public.sales;
DROP POLICY IF EXISTS "Authenticated users can insert sales" ON public.sales;
DROP POLICY IF EXISTS "Authenticated users can delete sales" ON public.sales;

-- Re-create with working auth check
CREATE POLICY "Authenticated users can read stock"
  ON public.stock FOR SELECT
  USING (current_setting('request.jwt.claim.role', true) = 'authenticated');

CREATE POLICY "Authenticated users can read sales"
  ON public.sales FOR SELECT
  USING (current_setting('request.jwt.claim.role', true) = 'authenticated');

CREATE POLICY "Authenticated users can insert sales"
  ON public.sales FOR INSERT
  WITH CHECK (current_setting('request.jwt.claim.role', true) = 'authenticated');

CREATE POLICY "Authenticated users can delete sales"
  ON public.sales FOR DELETE
  USING (current_setting('request.jwt.claim.role', true) = 'authenticated');
