import { useQuery } from '@tanstack/react-query';
import { fetchWithFallback } from './queryFallback';
import { DEMO_BLOGS } from '../lib/demoData';

export const useBlogs = () => useQuery({
  queryKey: ['blogs'],
  queryFn: () => fetchWithFallback('blogs', DEMO_BLOGS),
});
