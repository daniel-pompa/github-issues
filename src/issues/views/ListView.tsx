import { useState } from 'react';
import { State } from '../interfaces';
import { useIssues } from '../hooks';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingSpinner } from '../../shared';

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const { issuesQuery } = useIssues({ state });

  const issues = issuesQuery.data ?? [];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5'>
      <div>
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <IssueList issues={issues} onStateChange={setState} state={state} />
        )}
      </div>

      <div className='px-6'>
        <LabelPicker />
      </div>
    </div>
  );
};
