import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'routes/Routes';
import { ApolloProvider } from '@apollo/client';
import client from 'graphql';
import AuthContextProvider from 'contex';
import { Toaster } from 'react-hot-toast';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);
