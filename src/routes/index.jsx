import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Authenticated from "../layouts/authenticated";
import Unauthenticated from "../layouts/unauthenticated";
import ForgottenPassword from "../modules/ForgottenPassword";
import OTP from "../modules/OTP";
import Signin from "../modules/Signin";
import Register from "../modules/register";
import { ResetPassword } from "../modules/reset-password";

const Mainapp = ({ children }) => {
  return (
    <div className="h-screen w-full bg-slate-50">
      {children ? children : <Outlet />}
    </div>
  );
};

export default function MainRoutes() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Mainapp />,
      children: [
        {
          path: "/",
          element: <Authenticated />,
        },
        {
          path: "/auth",
          element: <Unauthenticated />,
          children: [
            {
              index: true,
              element: <Signin />,
            },
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "forgotten-password",
              children: [
                {
                  index: true,
                  element: <ForgottenPassword />,
                },
                {
                  path: ":email",
                  element: <OTP />,
                },
                {
                  path: "resetPassword",
                  element: <ResetPassword />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}
