import { FaSpinner } from 'react-icons/fa';

export const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-36'>
      <FaSpinner className='animate-spin' size={40} />
    </div>
  );
};
