import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from "./pages/NotFoundPage.jsx"; 
import FavouriteDetailPage from './pages/FavouriteDetailPage.jsx';
import FavouritePage from './pages/FavouritePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fav", 
        element: <FavouritePage />, 
      },
      {
    path: "/fav/:id", 
    element: <FavouriteDetailPage />,
      },
              ],
  },
  {
        path: "/login",
        element: <LoginPage />,
      },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
