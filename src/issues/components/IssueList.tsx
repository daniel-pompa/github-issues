import { GithubIssue } from '../interfaces';
import { IssueItem } from './IssueItem';

interface IssueListProps {
  issues: GithubIssue[];
}

export const IssueList = ({ issues }: IssueListProps) => {
  return (
    <>
      {/* All, Open, Closed buttons */}
      <div className='flex gap-4'>
        <button className='btn flex-1 active'>All</button>
        <button className='btn flex-1'>Open</button>
        <button className='btn flex-1'>Closed</button>
      </div>

      {/* List of issues*/}
      <div className='mt-4'>
        {issues.map(issue => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
