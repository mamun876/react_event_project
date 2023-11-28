import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import Gallery from './component/Gallery';
import Price from './component/Price';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
   children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path: 'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'price',
        element:<Price></Price>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
