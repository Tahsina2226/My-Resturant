import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ErrorPages from './Pages/ErroorPages.jsx'; // Fixed typo here
import Roots from './Roots.jsx';
import OurMenu from './Routes/Ourmenu.jsx';
import Ourshop from './Pages/Ourshop.jsx';
import Contact from './Pages/Contact.jsx';

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
        path: '/menu',
        element: <OurMenu />,
      },
      {
        path: '/shop',
        element: <Ourshop />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
