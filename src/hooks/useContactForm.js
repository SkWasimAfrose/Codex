import { useMutation } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';

export const useContactForm = () => useMutation({
  mutationFn: async (payload) => {
    const { error } = await supabase.from('contact_submissions').insert(payload);
    if (error) {
      throw error;
    }
    return payload;
  },
});
