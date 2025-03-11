import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LoginComponent from "./components/Login/login.tsx";
import RegisterComponent from "./components/Register/register.tsx";
import UserListComponent from "./components/UserList/userList.tsx";
import HomeComponent from "./components/Home/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    path: import.meta.env.VITE_URL_PAGE_LOGIN,
    element: <LoginComponent />,
  },
  {
    path: import.meta.env.VITE_URL_PAGE_HOME,
    element: <UserListComponent />,
  },
  {
    path: import.meta.env.VITE_URL_PAGE_REGISTER,
    element: <RegisterComponent />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
