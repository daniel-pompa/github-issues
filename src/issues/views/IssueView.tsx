import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IssueComment } from '../components/IssueComment';
import { IoChevronBackCircle } from 'react-icons/io5';
import { useIssue } from '../hooks';
import { LoadingSpinner } from '../../shared';

export const IssueView = () => {
  const navigate = useNavigate();
  const params = useParams();

  const issueNumber = Number(params.issueNumber ?? 0);
  const { issueQuery, commentsQuery } = useIssue(issueNumber);

  if (issueQuery.isLoading) {
    return <h2 className='text-lg sm:text-xl mt-5'>Loading...</h2>;
  }

  if (!issueQuery.data) {
    return <Navigate to='/404' />;
  }

  return (
    <div className='mb-5'>
      <div className='mt-4 mb-4'>
        <button
          onClick={() => navigate(-1)}
          className='hover:underline text-blue-400 flex items-center'
        >
          <IoChevronBackCircle className='mr-1' size={20} />
          Back
        </button>
      </div>

      {/* First comment */}
      <IssueComment issue={issueQuery.data} />

      {/* All comments */}
      {commentsQuery.isLoading ? (
        <LoadingSpinner />
      ) : (
        commentsQuery.data?.map(comment => (
          <IssueComment key={comment.id} issue={comment} />
        ))
      )}
    </div>
  );
};
