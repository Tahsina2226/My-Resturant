import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ErrorPages from './Pages/ErroorPages.jsx'; // Fixed typo here (ErroorPages -> ErrorPages)
import Roots from './Roots.jsx';
import OurMenu from './Routes/Ourmenu.jsx';
import Ourshop from './Pages/Ourshop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/menu', // If these are supposed to be different routes, you can change the path for one of them.
        element: <OurMenu />,
      },
      {
        path: '/shop', // Changed path to `/shop` to avoid conflict with `/menu`
        element: <Ourshop />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
