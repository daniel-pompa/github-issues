import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { State } from '../interfaces';

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels }],
    queryFn: () => getIssues(state, selectedLabels),
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
  });

  return {
    issuesQuery,
  };
};
