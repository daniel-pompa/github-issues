import { useState } from 'react';
import { State } from '../interfaces';
import { useIssuesInfinite } from '../hooks';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { LoadingSpinner } from '../../shared';

export const ListViewInfiniteScroll = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssuesInfinite({ state, selectedLabels });

  const issues = issuesQuery.data?.pages.flat() ?? [];

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
          <div className='flex flex-col justify-center'>
            <IssueList issues={issues} onStateChange={setState} state={state} />
            <button
              onClick={() => issuesQuery.fetchNextPage()}
              disabled={issuesQuery.isFetchingNextPage}
              className='rounded-md bg-blue-500 hover:bg-blue-700 px-4 py-2 mb-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {issuesQuery.isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </button>
          </div>
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
