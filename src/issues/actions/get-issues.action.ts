import { githubApi } from '../../api/github.api';
import { GithubIssue } from '../interfaces';
import { sleep } from '../../utils';

export const getIssues = async (): Promise<GithubIssue[]> => {
    await sleep(1000);
    const { data } = await githubApi.get<GithubIssue[]>('/issues');
    return data;
};