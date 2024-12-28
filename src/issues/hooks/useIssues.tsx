import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { State } from '../interfaces';
import { useEffect, useState } from 'react';

interface UseIssuesProps {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: UseIssuesProps) => {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    retry: false,
    staleTime: 1000 * 60, // 1 minute stale time for cache updates
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  return {
    issuesQuery,
    page,
    nextPage,
    prevPage,
  };
};
