import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router'
import { ToastContainer} from 'react-toastify';
import './App.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <ToastContainer />,
  </StrictMode>,
)
