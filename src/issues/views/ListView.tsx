import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { LoadingSpinner } from '../../shared';

export const ListView = () => {
  const { issuesQuery } = useIssues();

  const issues = issuesQuery.data ?? [];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 mt-5'>
      <div>
        {issuesQuery.isLoading ? <LoadingSpinner /> : <IssueList issues={issues} />}
      </div>

      <div className='px-6'>
        <LabelPicker />
      </div>
    </div>
  );
};
