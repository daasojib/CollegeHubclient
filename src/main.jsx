import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./HomePage/Home";
import AuthProvider from "./providers/AuthProvider";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CollegeDetails from "./Components/CollegeDetails/CollegeDetails";
import Colleges from "./Components/Colleges/Colleges";
import Admission from "./Components/Admission/Admission";
import MyCollege from "./Components/MyCollege/MyCollege";
import MyInfo from "./Components/MyInfo/MyInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <CollegeDetails></CollegeDetails>
      },
      {
        path: '/colleges',
        element: <Colleges></Colleges>
      }, {
        path: '/admission',
        element: <Admission></Admission>
      }, {
        path: '/mycollege',
        element: <MyCollege></MyCollege>
      },
      {
        path: '/myInfo',
        element: <MyInfo></MyInfo>
      }
    ],
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
