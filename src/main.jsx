import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import Registration from './Components/pages/Registration/Registration.jsx';
import OtpCode from './Components/pages/OtpCode/OtpCode.jsx';
import Dashboard from './Components/pages/Dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/otp-code/:email/",
    element: <OtpCode />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/*",
    element: <h2>Url not found</h2>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
