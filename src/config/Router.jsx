import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import Bulk from "../Pages/Bulk/Bulk";
import Single from "../Pages/Single/Single";
import Template from "../Pages/Template/Template";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Orders from "../Pages/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/login",
    element: <Login />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    path: "/register",
    element: <Register />,
    children: [{ path: "/register", element: <Register /> }],
  },
  {
    path: "/bulk",
    element: <Layout />,
    children: [{ path: "/bulk", element: <Bulk /> }],
  },
  {
    path: "/single",
    element: <Layout />,
    children: [{ path: "/single", element: <Single /> }],
  },
  {
    path: "/template",
    element: <Layout />,
    children: [{ path: "/template", element: <Template /> }],
  },
  {
    path: "/orders",
    element: <Layout />,
    children: [{ path: "/orders", element: <Orders /> }],
  },
]);

export default router;
