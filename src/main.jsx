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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
