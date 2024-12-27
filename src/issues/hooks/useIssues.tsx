import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: getIssues,
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
  });

  return {
    issuesQuery,
  };
};
