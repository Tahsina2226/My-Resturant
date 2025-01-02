import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ErrorPages from './Pages/ErroorPages.jsx';
import Roots from './Roots.jsx';
import OurMenu from './Routes/Ourmenu.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <OurMenu/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
