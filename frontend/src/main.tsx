import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LoginComponent from "./components/Login/login.tsx";
import HomeComponent from "./components/Home/home.tsx";
import RegisterComponent from "./components/Register/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/home",
    element: <HomeComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
