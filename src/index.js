
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Individual from './pages/individual';
import Pos from './pages/pos_agent';
import Distributors from './pages/distributors';
import Small from './pages/small_business_loan';
import Transport from './pages/Transport';
import Commerce from './pages/commerce';
import About from './pages/about';
import UserDetails from './pages/userloaninfo/UserInputedDetails';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "Individual",
    element: <Individual/>,
  },
  {
    path: "pos_agent",
    element: <Pos/>,
  },
  {
    path: "Distributors",
    element: <Distributors/>,
  },
  {
    path: "small",
    element: <Small/>,
  },
  {
    path: "Transport",
    element: <Transport/>,
  },
  {
    path: "Commerce",
    element: <Commerce/>,
  },

  {
    path: "About",
    element: <About/>,
  },
  {
    path: "UserDetails",
    element: <UserDetails/>,
  }
 

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
