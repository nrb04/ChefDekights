import { createBrowserRouter } from "react-router-dom";
import Main from "../All/Main";
import Home from "../All/Home";
import Signup from "../sign/Signup";
import Signin from "../sign/Signin";
import Chef from "../All/Chef";
import Blog from "../All/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/data"),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/data/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/data/${params.id}`),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
