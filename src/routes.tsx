import { createBrowserRouter } from 'react-router-dom';

import DefaultLayout from './pages/layouts/Default';
import Error from './pages/app/Error';
import Home from './pages/app/Home';
import Products from './pages/app/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'produtos',
        element: <Products />,
      },
    ],
  },
]);

export default router;
