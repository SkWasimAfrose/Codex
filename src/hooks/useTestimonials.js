import { useQuery } from '@tanstack/react-query';
import { fetchWithFallback } from './queryFallback';
import { DEMO_TESTIMONIALS } from '../lib/demoData';

export const useTestimonials = () => useQuery({
  queryKey: ['testimonials'],
  queryFn: () => fetchWithFallback('testimonials', DEMO_TESTIMONIALS),
});
