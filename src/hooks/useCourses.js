import { useQuery } from '@tanstack/react-query';
import { fetchWithFallback } from './queryFallback';
import { DEMO_COURSES } from '../lib/demoData';

export const useCourses = () => useQuery({
  queryKey: ['courses'],
  queryFn: () => fetchWithFallback('courses', DEMO_COURSES),
});
