import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Inicio } from "./views/Inicio";

const router = createBrowserRouter ([

  //EJEMPLO
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Inicio />
      }
    ]
  },
  // {
  //   path: '/auth',
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: '/auth/login',
  //       element: <Login />
  //     },
  //     {
  //       path: '/auth/registro',
  //       element: <Registro />
  //     }
  //   ]
  // },

])

export default router