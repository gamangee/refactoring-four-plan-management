import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./NotFound";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Login from "./pages/user/Login.tsx";
import Home from "./Home.tsx";
import Signup from "./pages/user/Signup.tsx";
import UserAnnual from "./pages/user/UserAnnual.tsx";
import UserInfo from "./pages/user/UserInfo.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import Management from "./pages/admin/Management.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "/main",
        element: <Home />,
      },
      { path: "/signup", element: <Signup /> },
      { path: "/userinfo", element: <UserInfo /> },
      { path: "/userannual", element: <UserAnnual /> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AdminLogin /> },
      { path: "/admin/main", element: <Home /> },
      {
        path: "/admin/management",
        element: <Management />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
