import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import LoginComponent from "./components/Login/login.tsx";
import HomeComponent from "./components/Home/home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/home",
    element: <HomeComponent />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
