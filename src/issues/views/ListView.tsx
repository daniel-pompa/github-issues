import { useState } from 'react';
import { State } from '../interfaces';
import { useIssues } from '../hooks';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingSpinner } from '../../shared';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery, page, nextPage, prevPage } = useIssues({ state, selectedLabels });

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
          <>
            <IssueList issues={issues} onStateChange={setState} state={state} />
            <div className='my-8 flex justify-between items-center'>
              <button
                onClick={prevPage}
                className='rounded-full bg-blue-500 hover:bg-blue-700 p-1 transition-all'
              >
                <GrFormPrevious size={25} />
              </button>

              <span className='text-sm sm:text-lg'>{page}</span>

              <button
                onClick={nextPage}
                className='rounded-full bg-blue-500 hover:bg-blue-700 p-1 transition-all'
              >
                <GrFormNext size={25} />
              </button>
            </div>
          </>
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
