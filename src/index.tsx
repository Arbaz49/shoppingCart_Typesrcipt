import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './store/store'
import { Provider } from 'react-redux';
import routes from './routes/routes';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      
    <App />
      
  </Provider>
);


