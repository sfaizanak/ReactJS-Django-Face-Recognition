import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import Login from "./routes/Login.jsx";
import Registeration from "./routes/Registeration.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import CaptureImage from "./routes/CaputerImage.jsx";
import Profile from "./routes/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/org-login", element: <Login /> },
      { path: "/emp-login", element: <Login /> },
      { path: "/guard-login", element: <Login /> },
      { path: "/emp-register", element: <Registeration /> },
      { path: "/guard-register", element: <Registeration /> },
      { path: "/emp-dashboard", element: <Dashboard /> },
      { path: "/guard-dashboard", element: <Dashboard /> },
      { path: "/capture-image", element: <CaptureImage /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
