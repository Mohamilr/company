import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <a href="/">Go back home</a>,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);

export default router;
