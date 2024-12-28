import { useInfiniteQuery } from '@tanstack/react-query';
import { State } from '../interfaces';
import { getIssues } from '../actions';

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({ state, selectedLabels }: UseIssuesProps) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ['issues', 'infinite', { state, selectedLabels }],
    queryFn: ({ pageParam: page, queryKey }) => {
      const [, , args] = queryKey;
      const { state, selectedLabels } = args as UseIssuesProps;
      return getIssues(state, selectedLabels, page);
    },
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });

  return {
    issuesQuery,
  };
};
