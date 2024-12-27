import { githubApi } from '../../api/github.api';
import { GithubIssue } from '../interfaces';
import { sleep } from '../../utils';

export const getIssue = async (issueNumber: number): Promise<GithubIssue> => {
  await sleep(1000);
  const { data } = await githubApi.get<GithubIssue>(`/issues/${issueNumber}`);
  return data;
};
