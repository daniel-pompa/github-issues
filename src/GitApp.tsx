import { Outlet } from 'react-router-dom';

export const GitApp = () => {
  return (
    <div className='container m-auto mt-3'>
      <h1>
        Git Issues <small className='text-xl sm:text-2xl'>Problem tracking</small>
      </h1>
      <Outlet />
    </div>
  );
};
