import { githubApi } from '../../api/github.api';
import { GithubIssue, State } from '../interfaces';
import { sleep } from '../../utils';

export const getIssues = async (
  state: State,
  selectedLabels: string[],
  page: number
): Promise<GithubIssue[]> => {
  await sleep(1000);
  const params = new URLSearchParams();

  if (state !== State.All) {
    params.set('state', state);
  }

  if (selectedLabels.length > 0) {
    params.set('labels', selectedLabels.join(','));
  }

  params.set('page', `${page}`);
  params.set('per_page', '5');

  const { data } = await githubApi.get<GithubIssue[]>('/issues', { params });

  return data;
};
