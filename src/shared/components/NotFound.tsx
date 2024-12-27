import { IoHome } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center text-white mt-20'>
      <h1 className='text-2xlmd:text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-sm md:text-lg mb-6'>
        Oops! The page you are looking for does not exist.
      </p>

      <button
        onClick={() => navigate('/')}
        className='flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md'
      >
        <IoHome className='mr-2' size={20} />
        Go Back to Home
      </button>
    </div>
  );
};
