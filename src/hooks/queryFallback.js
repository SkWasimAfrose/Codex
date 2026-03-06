import { supabase } from '../lib/supabaseClient';

export const fetchWithFallback = async (table, fallback) => {
  const { data, error } = await supabase.from(table).select('*');
  if (error || !data?.length) {
    return fallback;
  }
  return data;
};
