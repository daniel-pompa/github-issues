import { githubApi } from '../../api/github.api';
import { GithubIssue, State } from '../interfaces';
import { sleep } from '../../utils';

export const getIssues = async (state: State): Promise<GithubIssue[]> => {
  await sleep(1000);
  const params = new URLSearchParams();

  if (state !== State.All) {
    params.set('state', state);
  }

  const { data } = await githubApi.get<GithubIssue[]>('/issues', { params });

  return data;
};
