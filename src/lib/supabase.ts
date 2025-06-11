
import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = 'https://nnhvhegwkuydlgnrenuz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaHZoZWd3a3V5ZGxnbnJlbnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MjUyMjcsImV4cCI6MjA2MzUwMTIyN30.9igiESo9RN6lzBCedBXziaFdImuEnTxNofJgFTJFtm0';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);