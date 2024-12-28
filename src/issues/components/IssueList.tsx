import { GithubIssue, State } from '../interfaces';
import { IssueItem } from './IssueItem';

interface IssueListProps {
  issues: GithubIssue[];
  state: State;
  onStateChange: (state: State) => void;
}

export const IssueList = ({ issues, onStateChange, state }: IssueListProps) => {
  return (
    <>
      {/* All, Open, Closed buttons */}
      <div className='flex gap-4'>
        <button
          onClick={() => onStateChange(State.All)}
          className={`btn flex-1 ${state === State.All ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => onStateChange(State.Open)}
          className={`btn flex-1 ${state === State.Open ? 'active' : ''}`}
        >
          Open
        </button>
        <button
          onClick={() => onStateChange(State.Closed)}
          className={`btn flex-1 ${state === State.Closed ? 'active' : ''}`}
        >
          Closed
        </button>
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
