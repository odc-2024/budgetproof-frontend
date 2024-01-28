import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import HomeView from '@/views/HomeView';
import UsersView from '@/views/UsersView';
import CampaignsView from '@/views/CampaignsView';
import CampaignsCardView from '@/views/CampaignsCardView.tsx';
import AddCampaignView from '@/views/AddCampaignView.tsx';
import AboutView from '@/views/AboutView.tsx';

export const shutUpEslint: React.FC = () => <></>;

export const router = createBrowserRouter([
  {
    path: '/users',
    element: <UsersView withLayout />,
  },
  {
    path: '/',
    element: <CampaignsView />,
  },
  {
    path: '/campaigns/:id',
    element: <CampaignsCardView />,
  },
  {
    path: '/campaigns/add',
    element: <AddCampaignView />,
  },
  {
    path: '/about',
    element: <AboutView />,
  },
  {
    path: '/enter',
    element: <div></div>,
  },
]);
