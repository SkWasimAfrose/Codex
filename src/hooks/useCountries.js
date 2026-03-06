import { useQuery } from '@tanstack/react-query';
import { fetchWithFallback } from './queryFallback';
import { DEMO_COUNTRIES } from '../lib/demoData';

export const useCountries = () => useQuery({
  queryKey: ['countries'],
  queryFn: () => fetchWithFallback('countries', DEMO_COUNTRIES),
});
