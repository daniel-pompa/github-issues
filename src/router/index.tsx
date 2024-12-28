import { createBrowserRouter, Navigate } from 'react-router-dom';
import { GitApp } from '../GitApp';
import { ListView, IssueView, ListViewInfiniteScroll } from '../issues/views';
import { NotFound } from '../shared';

export const router = createBrowserRouter(
  [
    {
      path: '/issues',
      element: <GitApp />,
      children: [
        { path: 'list', element: <ListView /> },
        { path: 'list-infinite', element: <ListViewInfiniteScroll /> },
        { path: 'issue/:issueNumber', element: <IssueView /> },
      ],
    },
    {
      path: '/',
      element: <Navigate to='issues/list' />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);
