import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Comments from './Components/Comments/Comments'


const router=createBrowserRouter([
  {path:'/', element:<App />},
  {path:'dashboard' , element:<Dashboard/>},
  {path:'comments', element: <Comments/>},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

