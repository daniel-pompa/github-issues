import { githubApi } from '../../api/github.api';
import { GithubLabel } from '../interfaces';
import { sleep } from '../../utils';

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(1000);
  const { data } = await githubApi.get<GithubLabel[]>('/labels');
  return data;
};
