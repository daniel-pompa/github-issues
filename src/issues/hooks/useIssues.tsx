import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { State } from '../interfaces';

interface UseIssuesProps {
  state: State;
}

export const useIssues = ({ state }: UseIssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', { state }],
    queryFn: () => getIssues(state),
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
  });

  return {
    issuesQuery,
  };
};
