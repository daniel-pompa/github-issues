import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    retry: false,
    staleTime: 1000 * 60 * 60, // 1 hour stale time for cache updates every hour
  });

  return { labelsQuery };
};
