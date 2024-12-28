import { useState } from 'react';
import { State } from '../interfaces';
import { useIssues } from '../hooks';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingSpinner } from '../../shared';

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues({ state, selectedLabels });

  const issues = issuesQuery.data ?? [];

  const onSelectedLabels = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

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
        <LabelPicker
          selectedLabels={selectedLabels}
          onSelectedLabels={onSelectedLabels}
        />
      </div>
    </div>
  );
};
