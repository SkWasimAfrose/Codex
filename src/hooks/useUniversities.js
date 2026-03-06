import { useQuery } from '@tanstack/react-query';
import { fetchWithFallback } from './queryFallback';
import { DEMO_UNIVERSITIES } from '../lib/demoData';

export const useUniversities = () => useQuery({
  queryKey: ['universities'],
  queryFn: () => fetchWithFallback('universities', DEMO_UNIVERSITIES),
});
