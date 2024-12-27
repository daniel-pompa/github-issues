import { githubApi } from '../../api/github.api';
import { GithubIssue } from '../interfaces';
import { sleep } from '../../utils';

export const getIssueComments = async (issueNumber: number): Promise<GithubIssue[]> => {
  await sleep(1000);
  const { data } = await githubApi.get<GithubIssue[]>(`/issues/${issueNumber}/comments`);
  return data;
};
