import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/Dashboard';
import Moreinfo from './Components/Moreinfo/Moreinfo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path: '/',
        element: <Home></Home>

      },

      {
        path: '/Books/:bookId',
        // loader: ()=> fetch('/booksData.json'),
        loader: () => fetch('/booksData.json').then(res => res.json()),


       element: <Moreinfo></Moreinfo>
      },
      {
        path: 'Dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
    
  },
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} /> 
  </StrictMode>,
)
