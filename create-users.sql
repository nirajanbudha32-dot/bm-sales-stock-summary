-- ============================================
-- Fix emails to have @ and recreate users
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Delete old users
DELETE FROM public.profiles WHERE email IN ('BMADMIN', 'Saleman');
DELETE FROM auth.users WHERE email IN ('BMADMIN', 'Saleman');

-- 2. Create Admin user
INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, created_at, updated_at,
  confirmation_token, recovery_token, email_change_token_new, email_change
) VALUES (
  '00000000-0000-0000-0000-000000000000', gen_random_uuid(),
  'authenticated', 'authenticated', 'admin@bmstore.com',
  crypt('BM2026@', gen_salt('bf')),
  now(), now(), now(), '', '', '', ''
);

DO $$ DECLARE admin_id uuid; BEGIN
  SELECT id INTO admin_id FROM auth.users WHERE email = 'admin@bmstore.com';
  INSERT INTO public.profiles (id, email, role) VALUES (admin_id, 'admin@bmstore.com', 'admin')
  ON CONFLICT (id) DO UPDATE SET role = 'admin';
END $$;

-- 3. Create Salesman user
INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password,
  email_confirmed_at, created_at, updated_at,
  confirmation_token, recovery_token, email_change_token_new, email_change
) VALUES (
  '00000000-0000-0000-0000-000000000000', gen_random_uuid(),
  'authenticated', 'authenticated', 'salesman@bmstore.com',
  crypt('Salesman@2026', gen_salt('bf')),
  now(), now(), now(), '', '', '', ''
);

DO $$ DECLARE sales_id uuid; BEGIN
  SELECT id INTO sales_id FROM auth.users WHERE email = 'salesman@bmstore.com';
  INSERT INTO public.profiles (id, email, role) VALUES (sales_id, 'salesman@bmstore.com', 'salesman')
  ON CONFLICT (id) DO UPDATE SET role = 'salesman';
END $$;
