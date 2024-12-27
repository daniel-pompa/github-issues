import { useQuery } from '@tanstack/react-query';
import { getIssue, getIssueComments } from '../actions';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
  });

  const commentsQuery = useQuery({
    queryKey: ['issues', issueQuery.data?.number, 'comments'],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    enabled: issueQuery.data !== undefined,
    retry: false,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
