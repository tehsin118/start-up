import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./page/notFound";
import Login from "./page/account/login";
import ResetPassword from "./page/account/resetPassword";
import Verify from "./page/account/verify";
import Forget from "./page/account/forget";
import Register from "./page/account/register";
const AppLayout = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forget-password",
    element: <Forget />,
  },
  {
    path: "/verify-code",
    element: <Verify />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  // {
  //   path: "/",
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <Dashboardoutlet />,
  //       children: [
  //         {
  //           path: "/dashboard",
  //           element: <Dashboardmain />,
  //         },
  //       ],
  //     },
  //   ],
  // },
]);
export default AppLayout;
