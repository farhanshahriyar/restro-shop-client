import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/SecretPart/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import UserCart from "../pages/UserDashboard/UserCart/UserCart";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contact-us",
          element: <Contact/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "/order/:category",
          element: <Order/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "*",
          element: <Error/>,
        },
        {
          path: "/sign-up",
          element: <SignUp/>,
        },
        // private route rules starts here
        {
          path: "/secret",
          element: <PrivateRoute>
            <Secret/>
          </PrivateRoute>,
        },
        // {
        //   path: "/cart",
        //   element: <PrivateRoute>
        //     <Cart/>
        //   </PrivateRoute>,
        // }
      ],
    },
    {
      path: "/dashboard",
      element: <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>,
      children: [
        {
          path: "/dashboard/carts",
          element: <PrivateRoute>
            <UserCart/>
          </PrivateRoute>,
        }
      ],
    }
  ]);
