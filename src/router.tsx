import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import HomeView from '@/views/HomeView';
import UsersView from './views/UsersView';

export const shutUpEslint: React.FC = () => <></>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/users',
    element: <UsersView />,
  },
]);
