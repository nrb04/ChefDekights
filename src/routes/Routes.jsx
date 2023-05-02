import { createBrowserRouter } from "react-router-dom";
import Main from "../All/Main";
import Home from "../All/Home";
import Signup from "../sign/Signup";
import Signin from "../sign/Signin";
import Chef from "../All/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/chef",
        element: <Chef></Chef>,
      },
    ],
  },
]);
export default router;
