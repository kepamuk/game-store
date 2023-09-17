import { useRoutes } from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import { routes } from '../constants/routes';

export default function MainRoutes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [{ path: routes.home.root, element: <HomePage /> }],
    },
  ]);
}
