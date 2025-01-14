import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'


const URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const API_KEY = process.env.SUPABASE_ANON_KEY as string
export const supabase = createClient<Database>(URL, API_KEY)

