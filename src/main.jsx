import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/Error/ErrorPage';
import Login from './Components/LoginPage/LoginPage';
import SignUp from './Components/SignUp/SIgnUp';
import AuthProviders from './Components/Provider/AuthProviders';
import UserProfile from './Components/UserProfile/UserProfile';
import OrderList from './Components/OderList/OrderList';
import PrivateRoutes from './Components/Routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/UserProfile",
        element: <UserProfile></UserProfile>
       },
       {
        path: "/OrderList",
        element: <PrivateRoutes><OrderList></OrderList></PrivateRoutes>
       }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
