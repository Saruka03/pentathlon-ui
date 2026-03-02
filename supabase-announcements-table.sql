-- Create announcements table in Supabase
-- Run this SQL in your Supabase SQL Editor

-- Step 1: Create the announcements table
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  comment TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to announcements"
  ON announcements
  FOR SELECT
  TO public;

-- Allow authenticated insert access
CREATE POLICY "Allow authenticated users to insert announcements"
  ON announcements
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Step 2: Create storage bucket (run this as a separate query or in Supabase Storage UI)
-- Note: You can also create this in Supabase Storage UI
-- Bucket name: announcement-images
-- Set bucket as PUBLIC

-- Step 3: Create storage policies for the bucket
-- These policies allow authenticated users to upload images

/*
-- Create storage bucket (run in SQL Editor)
INSERT INTO storage.buckets (id, name, public)
VALUES ('announcement-images', 'announcement-images', true);

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated uploads to announcement-images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'announcement-images'
  );

-- Allow public read access to images
CREATE POLICY "Allow public read access to announcement-images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (
    bucket_id = 'announcement-images'
  );
*/
